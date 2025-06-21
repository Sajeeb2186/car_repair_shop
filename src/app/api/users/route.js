import connectMongoDB from "@/lib/connectDB";
import user from "../../../../models/users";
import { NextResponse } from "next/server";

export async function POST(request){
    const{userId,password}=  await request.json();
    await connectMongoDB();
    await user.create({userId,password})
    return NextResponse.json({message:"user store success"},{status:201})
}