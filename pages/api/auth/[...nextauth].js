import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  // YOU CAN DO THE FOLLOWING INSTEAD OF THE PAGES OBJECT ABOVE,
  // BUT WITH THE PAGES OBJECT IT CREATES A NEW CUSTOM PAGE
  //
  //   theme: {
  //     logo: "https://i.imgur.com/fGZqOd0.png",
  //     brandColor: "#F13287",
  //     colorScheme: "auto",
  //   },
  callbacks: {
    async session({ session, user, token }) {
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
