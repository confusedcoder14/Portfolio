"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      // Using Formspree (free service) - Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xkgzorld", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: "sumitthakur776694@gmail.com"
        }),
      })

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error('Email sending error:', error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{"Let's"} Work Together</h3>
            <p className="text-muted-foreground mb-8">
              {"I'm"} always interested in new opportunities and exciting projects. Whether you have a question or just
              want to say hi, {"I'll"} try my best to get back to you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>sumitthakur776694@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 7766943295</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Sitamarhi, Bihar</span>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              <CardDescription>
                Fill out the form below and {"I'll"} get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
