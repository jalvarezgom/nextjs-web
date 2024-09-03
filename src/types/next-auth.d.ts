import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    access_token?: string;
    is_staff?: boolean;
  }

  interface User extends DefaultUser {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    groups: number[];
    is_staff: boolean;
    last_login: string;
    date_joined: string;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    name: string;
    email: string;
    access_token?: string;
    is_staff?: boolean;
  }
}
