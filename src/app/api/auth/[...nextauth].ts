import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { jwtDecode } from 'jwt-decode';
import { encrypt } from '@/utils/encryption';

interface JWTPayload {
  token: any;
  account: any;
}

interface SESSION {
  session: any;
  token: any;
}
export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
      clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
      issuer: `${process.env.AUTH_ISSUER}`,
    }),
    /// add more providers here
  ],

  callbacks: {
    async jwt({ token, account }: JWTPayload) {
      const nowTimestamp = Math.floor(Date.now() / 1000);
      if (account) {
        //account only available only the first time the callback is called on a new session
        token.decoded = jwtDecode(account.access_token);
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.refresh_token = account.refresh_token;
        token.expires_at = account.expires_at;
        return token;
      } else if (nowTimestamp < token.expires_at) {
        //token not yet expired
        return token;
      } else {
        return token;
      }
    },
    async session({ session, token }: SESSION) {
      /**
       * Server components might not be able to use nextAuth getToken() function so we'll encrypt it
       */
      session.access_token = encrypt(token.access_token);
      session.id_token = encrypt(token.id_token);
      session.roles = token.decoded.realm_access.roles;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

//https://medium.com/@zemmel.mootez/implementing-keycloak-authentication-in-a-next-js-application-0033a6569ec2
//https://www.youtube.com/watch?v=-HsldaBdIPQ&ab_channel=Leodippolito
