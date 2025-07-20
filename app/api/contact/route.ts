import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email content
    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `.trim()

    // For now, we'll use a simple approach with a service like EmailJS or Resend
    // You can also use services like SendGrid, Mailgun, or your own SMTP server
    
    // Option 1: Using EmailJS (client-side, no server setup needed)
    // This would require setting up EmailJS in the frontend
    
    // Option 2: Using a serverless email service like Resend
    // You would need to install: npm install resend
    
    // For demonstration, I'll show how to use Resend:
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'your-portfolio@yourdomain.com',
    //   to: 'sumitthakur776694@gmail.com',
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: emailContent,
    // })

    // For now, let's log the email content (you can replace this with actual email sending)
    console.log('Email to be sent:', {
      to: 'sumitthakur776694@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      content: emailContent
    })

    // Simulate email sending (replace this with actual email service)
    // In production, you should use a proper email service
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 