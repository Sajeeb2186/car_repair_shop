import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredintialsProviders from "next-auth/providers/credentials";






const handler= NextAuth({

    session:{
        session:'jwt',
        maxAge:33 * 24 * 60 * 60
    },
    providers:[
        CredintialsProviders({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials){
                
                const {email,password}= credentials;

                if(!email || !password){
                    return null
                }

                const db=connectDB();
                const currentUser= await db.collections('users').findOne({email})
            }
        })
    ],
    callbacks:{},
    pages:{
        signin:"/SignIn"
    }


})

export {handler as GET, handler as POST}