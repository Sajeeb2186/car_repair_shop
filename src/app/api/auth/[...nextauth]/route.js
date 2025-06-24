import nextAuth from "next-auth/next";
import CredintialsProviders from "next-auth/providers/credentials";






const handler= async()=> NextAuth({

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
                return true
            }
        })
    ],
    callbacks:{},
    pages:{
        signin:"/SignIn"
    }


})