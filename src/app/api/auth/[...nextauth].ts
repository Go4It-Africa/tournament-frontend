import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
      clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
      issuer: `${process.env.AUTH_ISSUER}`,
    }),
    /// add more providers here
  ],
};

export default NextAuth(authOptions);

//https://medium.com/@zemmel.mootez/implementing-keycloak-authentication-in-a-next-js-application-0033a6569ec2
//https://www.youtube.com/watch?v=-HsldaBdIPQ&ab_channel=Leodippolito
