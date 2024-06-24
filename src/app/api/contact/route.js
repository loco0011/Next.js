import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();

        const newContact = await Contact.create(body);
        
        return NextResponse.json(
            { message: "Message sent successfully!", contact: newContact },
            { status: 200 }
        );
    } catch (e) {
        console.error("Error in POST /api/contact:", e);
        return NextResponse.json(
            { message: "Server error, please try again!", error: e.message },
            { status: 500 }
        );
    }
}