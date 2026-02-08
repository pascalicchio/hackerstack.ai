import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // For now, log the subscription (integrate with SendGrid in production)
    console.log(`📧 New newsletter subscription: ${email}`)
    
    // TODO: Integrate with SendGrid or database
    // await sendWelcomeEmail(email)
    // await saveToDatabase(email)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    })

  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
