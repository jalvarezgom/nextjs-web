import authService from "@/actions/auth";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        console.log("Credentials", credentials);
        const tokenData = await authService.login(username, password);
        console.log("TokenData", tokenData);
        return { ...tokenData };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      console.log("JWT", { token, user, session });
      if (user) {
        return {
          ...token,
          access_token: user.token,
          is_staff: user.is_staff, // TODO: Save user roles in the token
        };
      }
      return token;
    },

    async session({ session, token, user }) {
      console.log("SESSION", { session, token, user });
      if (token) {
        session.access_token = token.access_token;
        session.is_staff = token.is_staff;
        session.user = user as User;
      }
      const access_token = session.access_token;
      console.log("Access Token", access_token);
      return session;
    },
  },
};

export default authOptions;
