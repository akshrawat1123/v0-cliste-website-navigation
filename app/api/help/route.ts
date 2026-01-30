import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, issueType, description, urgency } = body

    if (!email || !issueType || !description || !urgency) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const { data, error: resendError } = await resend.emails.send({
      from: "Help Form <onboarding@resend.dev>", // replace later with your domain
      to: ["krishkhati0007king@gmail.com"], // Must match your Resend account email, or verify your domain
      subject: `New Help Request – ${issueType}`,
      replyTo: email,
      html: `
        <h2>New Help Request</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Issue Type:</strong> ${issueType}</p>
        <p><strong>Urgency:</strong> ${urgency}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
    })

    if (resendError) {
      console.error("Resend error:", resendError)
      return NextResponse.json({ error: resendError.message }, { status: 400 })
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
