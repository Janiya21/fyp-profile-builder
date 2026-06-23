import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;  // Extend user object to include id
      progressStep: string;
      
    } & DefaultSession["user"];
  }
}
