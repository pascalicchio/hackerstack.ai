import { NextRequest, NextResponse } from 'next/server'
import { spawn } from 'child_process'

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

    // Send email using Node.js nodemailer (more reliable than shell)
    const emailScript = `
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'WakingUpInMatrix@gmail.com',
    pass: 'hyf_xkg6wug4YJF8hnr'
  }
});

const mailOptions = {
  from: 'HackerStack <WakingUpInMatrix@gmail.com>',
  to: 'WakingUpInMatrix@gmail.com',
  subject: '🔔 New Tool Submission: ${toolName}',
  text: \`${emailBody.replace(/`/g, '\\`')}\`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Email error:', error);
    process.exit(1);
  }
  console.log('Email sent:', info.response);
  process.exit(0);
});
`

    // Execute the email script
    await new Promise((resolve, reject) => {
      const child = spawn('node', ['-e', emailScript], {
        cwd: '/root/.openclaw/hackerstack',
        stdio: ['pipe', 'pipe', 'pipe']
      })

      let stdout = ''
      let stderr = ''

      child.stdout.on('data', (data) => {
        stdout += data.toString()
        console.log(data.toString().trim())
      })

      child.stderr.on('data', (data) => {
        stderr += data.toString()
        console.error(data.toString().trim())
      })

      child.on('close', (code) => {
        if (code === 0) {
          resolve(stdout)
        } else {
          reject(new Error(`Email failed with code ${code}: ${stderr}`))
        }
      })

      // Kill after 10 seconds
      setTimeout(() => {
        child.kill()
        reject(new Error('Email timeout'))
      }, 10000)
    })

    return NextResponse.json({
      success: true,
      message: 'Tool submitted successfully! We\\'ll review it soon.'
    })

  } catch (error: any) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit tool' },
      { status: 500 }
    )
  }
}
