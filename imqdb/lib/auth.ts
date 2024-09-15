import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prisma from "./prisma";
import { getServerSession } from "next-auth/next";
import bcrypt from "bcrypt";

const saltRounds = 10;


interface AuthEnv {
    NEXT_AUTH_SECRET: string;
    NEXTAUTH_URL: string;
}
const env: AuthEnv = {
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET || "",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "",
};


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60 * 7

    },
    secret: env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: "login",
            name: "Login",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials: any) => {
                const email = credentials.email
                const password = credentials.password || " ";
       
                try {
                    const user = await prisma.user.findFirst({
                        where: { email }
                    });
                    if (!user) throw new Error("User not found");

                    if (bcrypt.compareSync(password, user.password) === false) throw new Error("Incorrect password");
                    const userData = {
                        id: user.id,
                        email: user.email
                    }
                    return Promise.resolve(userData);
                }
                catch (error: any) {
                    return Promise.reject({
                        status: 400,
                        message: error.message
                    });

                }
            }

        })
    ],
    cookies: {
        sessionToken: {
            name: "indmq_secure",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
            },
        },
    },
    callbacks: {
        async jwt({ token, user }: {
            token: any,
            user: any
        }): Promise<any> {
            if (user) {
                token.user = {
                    ...user
                }
            }
            return token
        },
        session: async ({ session, token }: {
            session: any,
            token: any
        }) => {
            if (token) {
                session.user = token.user
            }
            return session
        }
    },
    pages: {
        signIn: '/',
        error: "/auth/error",
    },
}



export async function getSession() {
    return await getServerSession(authOptions);
}