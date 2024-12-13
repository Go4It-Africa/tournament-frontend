import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    /// add more providers here
  ],
};

export default NextAuth(authOptions);

//https://medium.com/@zemmel.mootez/implementing-keycloak-authentication-in-a-next-js-application-0033a6569ec2
