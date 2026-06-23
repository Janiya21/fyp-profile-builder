import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



//  http://localhost:3000/templates?pfUserId=67c40393218c9cbe1fdbcf7e