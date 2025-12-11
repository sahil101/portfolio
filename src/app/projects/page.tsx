'use client'

/**
 * Projects Page Component
 * 
 * This component showcases various projects in the portfolio.
 * Each project is displayed in a card with details and links.
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and order processing.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Built with React, Node.js, and Socket.IO.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager-demo.com",
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered image generation tool that creates unique artwork based on text descriptions. Integrates with OpenAI's DALL-E API.",
    tech: ["React", "Python", "OpenAI API", "AWS"],
    github: "https://github.com/username/ai-image-gen",
    demo: "https://ai-image-demo.com",
  },
]

export default function Projects() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-lg border bg-card transition-all hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.github}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.demo}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 