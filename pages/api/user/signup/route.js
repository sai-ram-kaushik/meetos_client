import { connect } from "@/db/dbConfig";
import User from '@/models/usermodel'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

export async function POST() {
    try{
        const reqBody = await NextRequest.json()
        const {username, email, password} = reqBody

        // check if user already exists
        const user = await User.findOne({email})

        if(user) {
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        console.log(reqBody)

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User ({
            username,
            email,
            password: hashedPassword
        })

        return NextResponse.json({message: "User has been created", success: true, saveUser}, {status: 201})

       const saveUser = await newUser.save()
       console.log(saveUser)
    } catch(error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}