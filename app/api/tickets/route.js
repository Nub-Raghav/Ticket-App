import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error get maii", err },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  console.log("Post Ran");
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Error post mai", e }, { status: 500 });
  }
}
