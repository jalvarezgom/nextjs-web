import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


  const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
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
          const url = 'http://178.33.249.178:8002/api/auth/login/';

          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify({username, password})
            });
            const data = await response.json();
            console.log(data);
            return data;
          } catch (error) {
            console.error(error);
            throw new Error("Invalid credentials");
          }
        },
      }),
    ],
    callbacks: {
      async jwt({token, user}) {
        console.log("JWT", token, user);
        return token;
      },
      async session({session, token, user}) {
        session.user = token; 
        console.log("SESSION", session, token, user);
        return session;
      }
    }
  }
  
  const handler = NextAuth(authOptions)
  export { handler as GET, handler as POST } ;