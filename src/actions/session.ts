"use server";

import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";


export async function getSession() {
  const session = await getServerSession(authOptions);
  return session?.access_token;
}
