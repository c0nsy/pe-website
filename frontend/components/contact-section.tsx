"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    // Initialize EmailJS with public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    } else {
      console.warn("EmailJS public key not found. Make sure NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is set in your environment variables.")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    // Get environment variables
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    
    // Validate environment variables
    if (!publicKey || !serviceId || !templateId) {
      console.error("EmailJS configuration missing:", {
        hasPublicKey: !!publicKey,
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
      })
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }
    
    try {
      // Ensure EmailJS is initialized
      if (publicKey) {
        emailjs.init(publicKey)
      }
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          message: formData.message,
          reply_to: formData.email,
        }
      )

      console.log("Email sent successfully:", response)
      setSubmitStatus("success")
      setFormData({
        from_name: "",
        email: "",
        message: "",
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus("error")
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-balance">
            Request a Free Quote
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Property Maintenance Services in Cambridge, Kitchener & Waterloo
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Sick of chasing down contractors who vanish faster than your budget? Whether you manage properties in Cambridge, build them from the ground up in Kitchener, or run commercial sites in Waterloo that demand real results — you're in the right place. At Platinum Enterprise Group, we don't cut corners (unless it's grass). We show up, we handle business, and we make you look like a genius for hiring us.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    We're here to help with all your property maintenance needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <div className="space-y-1">
                            <p className="font-medium text-sm">Primary</p>
                            <a
                              href="tel:5485581970"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              (548) 558-1970
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <div className="space-y-1">
                            <p className="font-medium text-sm">After Hours</p>
                            <a
                              href="tel:18662782610"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              1-866-278-2610
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-lg font-semibold">Email</h3>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <a
                          href="mailto:office@platinumeg.ca"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                        >
                          office@platinumeg.ca
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-lg font-semibold">Locations</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <div className="space-y-1">
                            <p className="font-medium text-sm">Office</p>
                            <p className="text-sm text-muted-foreground">
                              10 Clemens Ave., Building 2<br />
                              Cambridge, Ontario N3C 3W2
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <div className="space-y-1">
                            <p className="font-medium text-sm">Yard</p>
                            <p className="text-sm text-muted-foreground">
                              859 Courtland Ave East<br />
                              Kitchener, Ontario N2C 1K4
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div className="space-y-1">
                          <p className="font-medium text-sm">Business Hours</p>
                          <p className="text-sm text-muted-foreground">
                            Monday - Friday: 8:00 AM – 5:00 PM<br />
                            Saturday: By Appointment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - Right Side (Takes 2 columns) */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and tell us what you need. No fluff. No excuses. Just professionals who actually pick up the phone, get the job done, and keep your properties running smoother than your tenant's excuses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="from_name" className="text-sm font-medium">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="from_name"
                        name="from_name"
                        placeholder="Your name"
                        value={formData.from_name}
                        onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                        required
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or inquiry. What services are you interested in? What's your timeline? Any specific requirements?"
                        rows={8}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        disabled={isSubmitting}
                        className="resize-none"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md text-green-800 dark:text-green-200">
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <p className="text-sm font-medium">Your message has been sent successfully! We'll get back to you soon.</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive">
                        <p className="text-sm font-medium">Oops! Something went wrong. Please try again or contact us directly.</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-12 text-base font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
