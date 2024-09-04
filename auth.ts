import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"
import { db } from "./lib/db"
 
export const { 
    handlers: { GET, POST},
    signIn,
    signOut, 
    auth 
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID || "",
            clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
        }),
    ],
})