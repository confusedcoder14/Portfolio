# Contact Form Setup Guide

This guide will help you set up the contact form to send emails to `sumitthakur776694@gmail.com` when someone submits a message.

## Option 1: Using Formspree (Recommended - Free & Easy)

### Step 1: Create a Formspree Account

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (it will look like `xrgjabrg`)

### Step 2: Update the Contact Component

Replace `YOUR_FORMSPREE_ID` in `components/contact.tsx` with your actual Formspree form ID:

```typescript
// In components/contact.tsx, line 35
const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
```

Change to:

```typescript
const response = await fetch("https://formspree.io/f/xrgjabrg", { // Replace with your actual ID
```

### Step 3: Configure Email Settings

1. In your Formspree dashboard, go to your form settings
2. Set the "Reply To" email to `sumitthakur776694@gmail.com`
3. Enable email notifications

## Option 2: Using EmailJS (More Control)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

### Step 2: Install EmailJS

```bash
pnpm add @emailjs/browser
```

### Step 3: Update Contact Component

Replace the current form submission code in `components/contact.tsx` with:

```typescript
// Add these imports at the top
import emailjs from "@emailjs/browser";

// Replace the handleSubmit function with:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validation code...

  setIsSubmitting(true);

  try {
    const templateParams = {
      to_email: "sumitthakur776694@gmail.com",
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      templateParams,
      "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
    );

    if (response.status === 200) {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Email sending error:", error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 3: Using Next.js API Route with Nodemailer

### Step 1: Install Dependencies

```bash
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

### Step 2: Create Environment Variables

Create a `.env.local` file in your project root:

```
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

### Step 3: Update API Route

Replace the content in `app/api/contact/route.ts` with:

```typescript
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "sumitthakur776694@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
```

### Step 4: Update Contact Component

Replace the form submission in `components/contact.tsx` with:

```typescript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

## Testing the Contact Form

1. Start your development server:

   ```bash
   pnpm dev
   ```

2. Navigate to the contact section of your portfolio

3. Fill out the form and submit

4. Check your email (`sumitthakur776694@gmail.com`) for the message

## Troubleshooting

- **Formspree**: Make sure your form ID is correct and the form is active
- **EmailJS**: Verify your service ID, template ID, and public key
- **Nodemailer**: Ensure your Gmail app password is correct and 2FA is enabled
- **General**: Check the browser console for any error messages

## Security Notes

- Never commit API keys or passwords to your repository
- Use environment variables for sensitive information
- Consider rate limiting for production use
- Validate and sanitize all form inputs

## Recommended Setup

For a portfolio website, **Option 1 (Formspree)** is recommended because:

- It's free for up to 50 submissions per month
- No server setup required
- Reliable and secure
- Easy to configure
- Good spam protection
