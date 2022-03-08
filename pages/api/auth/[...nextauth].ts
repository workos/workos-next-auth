import NextAuth from 'next-auth';
import WorkOSProvider from 'next-auth/providers/workos'

export default NextAuth({
  providers: [
    WorkOSProvider({
      clientId: process.env.WORKOS_CLIENT_ID,
      clientSecret: process.env.WORKOS_API_KEY,
      client: {
        token_endpoint_auth_method: "client_secret_post",
      },
    }),
  ],
  
  pages: {
    signIn: '/login',
  },
  debug: true,
  secret: process.env.SECRET,
});
