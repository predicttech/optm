import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create or update contact
    try {
      const { data, error } = await resend.contacts.create({
        email,
        firstName: name,
        unsubscribed: false,
      });

      console.log("Create Contact:", data, error);

      if (error) {
        // If contact already exists, update it
        const update = await resend.contacts.update({
          email,
          firstName: name,
          unsubscribed: false,
        });

        console.log("Update Contact:", update);
      }
    } catch (contactError) {
      console.error("Contact Error:", contactError);
      // Continue even if contact creation fails
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "OPTM <onboarding@resend.dev>",
      to: process.env.PERSONAL_EMAIL!,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        message,
      }),
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact saved and email sent successfully.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}