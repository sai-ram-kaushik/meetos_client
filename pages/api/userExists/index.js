import { connect } from "@/db/dbConfig";
import User from "@/models/usermodel";
import { NextResponse } from "next/server";
export default async function userHandler(req, res) {
    try {
        const { body, method } = req;
       
        if (method === "POST") {
            connect();
            const { email } = body;
            const user = await User.findOne({email}).select("_id")
            console.log("user", user)
            res.status(200).send({ user });
        } else {
            res.status(500).send({ error: "Not a post request" });
        }
    } catch (error) {

    }
}