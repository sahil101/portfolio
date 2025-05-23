'use client'

/**
 * Projects Page Component
 * 
 * This component showcases various projects in the portfolio.
 * Each project is displayed in a card with details and links.
 */

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  github?: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Shadcn UI",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "/",
      github: "https://github.com/sahil101/portfolio"
    },
    // Add more projects here
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 