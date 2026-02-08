import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { toolName, toolUrl, category, email, reason } = body

    // Validate required fields
    if (!toolName || !toolUrl || !category || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email message
    const emailBody = `
🔔 NEW TOOL SUBMISSION

Tool Name: ${toolName}
Tool URL: ${toolUrl}
Category: ${category}
Submitter Email: ${email}

Why Feature This Tool:
${reason}

---
Submitted from: hackerstack.dev/submit
Date: ${new Date().toISOString()}
    `.trim()

    // Send email using nodemailer directly
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SUBMISSION_EMAIL_USER || 'WakingUpInMatrix@gmail.com',
        pass: process.env.SUBMISSION_EMAIL_PASS || 'hyf_xkg6wug4YJF8hnr'
      }
    })

    await transporter.sendMail({
      from: 'HackerStack <WakingUpInMatrix@gmail.com>',
      to: 'WakingUpInMatrix@gmail.com',
      subject: `🔔 New Tool Submission: ${toolName}`,
      text: emailBody
    })

    return NextResponse.json({
      success: true,
      message: "Tool submitted successfully! We'll review it soon."
    })

  } catch (error: any) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit tool' },
      { status: 500 }
    )
  }
}
