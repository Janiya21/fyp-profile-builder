import GoogleProvider from "next-auth/providers/google";
import dbConnect from "./db";
import User from "@/model/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: any, user: any }) {
      await dbConnect();
      const dbUser = await User.findOne({ email: session.user?.email });

      if (dbUser) {
        session.user.id = dbUser._id;
        session.user.progressStep = dbUser.progressStep;
      }

      return session;
    },

    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        await dbConnect();

        const checkUser = await User.findOne({ email: user?.email });

        if (checkUser) {
          token.progressStep = checkUser.progressStep;
          token.userId = checkUser?._id?.toString();
        }else{
          const newUser = await User.create({
            email: token?.email,
            name: token?.name,
            progressStep: "signedIn",
          });
          token.progressStep = newUser.progressStep;
          token.userId = newUser._id?.toString();
        }
        token.expires = Math.floor(Date.now() / 1000) + 60 * 60 * 5; // 5 hours
      }

      return token;
    },

    async redirect({ url, baseUrl }: {url: string, baseUrl: string}) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin', // Use same page for errors
  },
};
