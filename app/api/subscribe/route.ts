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

    const API_KEY = process.env.CONVERTKIT_API_KEY
    const FORM_ID = process.env.CONVERTKIT_FORM_ID

    if (!API_KEY || !FORM_ID) {
      console.error('Kit environment variables not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const headers = {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': API_KEY,
    }

    // Step 1: Create subscriber (or get existing)
    const createResponse = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email }),
    })

    if (!createResponse.ok) {
      const errorData = await createResponse.json().catch(() => ({}))
      console.error('Kit create subscriber error:', errorData)

      // If subscriber already exists, that's fine - continue to add to form
      if (createResponse.status !== 422) {
        return NextResponse.json(
          { error: 'Failed to create subscriber' },
          { status: 500 }
        )
      }
    }

    // Step 2: Add subscriber to form by email
    const formResponse = await fetch(
      `https://api.kit.com/v4/forms/${FORM_ID}/subscribers`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ email_address: email }),
      }
    )

    if (!formResponse.ok) {
      const errorData = await formResponse.json().catch(() => ({}))
      console.error('Kit add to form error:', errorData)

      // 422 likely means already subscribed to this form - that's success
      if (formResponse.status === 422) {
        return NextResponse.json({ success: true, message: 'Already subscribed' })
      }

      return NextResponse.json(
        { error: 'Failed to subscribe to form' },
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
