import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export async function POST(req: Request, res: Response) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  });

  const data = await req.json();
  const { name, email, message } = data;
  if (!name || !email || !message) {
    return NextResponse.json(
      {
        alert: "All fields are required",
      },
      { status: 400 },
    );
  }
  try {
    const newMessage = await client.create({
      _type: "message",
      name,
      email,
      message,
    });
    return NextResponse.json(
      { alert: "Message successfully added", message: newMessage },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { alert: "Failed to create a message", error },
      { status: 500 },
    );
  }
}
