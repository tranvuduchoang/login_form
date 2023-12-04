import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    } as any),
  ],
  callbacks: {
    async jwt(params) {
      const { token, account } = params;
      if (account) {
        token.id_token = account.id_token;
      }
      return token;
    },
    async session(params) {
      const { session, token } = params;
      (session as any).id_token = token.id_token;
      return session;
    },
  },
};

export default NextAuth(options);
