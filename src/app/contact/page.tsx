'use client'

/**
 * Contact Page Component
 * 
 * This component provides contact information and social media links.
 * It includes a simple contact form and professional social media profiles.
 */

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sahil101",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/agarwalsahil97",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          I&apos;m always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the channels below.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Contact</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 rounded-md border bg-background"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded-md border bg-background"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 rounded-md border bg-background"
              required
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
} 