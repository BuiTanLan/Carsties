import NextAuth, { NextAuthOptions } from 'next-auth';
import DuendeIDS6Provider from 'next-auth/providers/duende-identity-server6';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    DuendeIDS6Provider({
      id: 'id-server',
      clientId: 'nextApp',
      clientSecret: 'secret',
      issuer: 'http://localhost:5000',
      authorization: { params: { scope: 'openid profile auctionApp' } },
      idToken: true,
    }),
  ],
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile) {
        token.name = profile.name;
      }
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user!.name = token?.name;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
