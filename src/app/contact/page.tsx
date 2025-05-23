'use client'

/**
 * Contact Page Component
 * 
 * This component provides contact information and social media links.
 * It includes a simple contact form and professional social media profiles.
 */

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SocialLink {
  platform: string
  url: string
  icon: string
}

export default function ContactPage() {
  const socialLinks: SocialLink[] = [
    {
      platform: "GitHub",
      url: "https://github.com/sahil101",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/agarwalsahil97/",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/sahilagarwal97",
      icon: "twitter"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Feel free to reach out through any of these platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <p className="text-lg">
                Email: <a href="mailto:sahil.agarwal@example.com" className="text-primary hover:underline">
                  sahil.agarwal@example.com
                </a>
              </p>
              <p className="text-lg">Location: San Francisco Bay Area</p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button key={link.platform} variant="outline" asChild>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {link.platform}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 