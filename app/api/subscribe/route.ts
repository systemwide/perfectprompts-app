import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit environment variables not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Subscribe to ConvertKit form
    const response = await fetch(
      `https://api.convertkit.com/v4/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CONVERTKIT_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('ConvertKit API error:', errorData)

      // Handle already subscribed case gracefully
      if (response.status === 422) {
        return NextResponse.json({ success: true, message: 'Already subscribed' })
      }

      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
