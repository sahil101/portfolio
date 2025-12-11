'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", "SQL"] },
  { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD"] },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2020 - Present",
    description:
      "Led development of multiple full-stack applications, mentored junior developers, and implemented best practices.",
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    period: "2018 - 2020",
    description:
      "Developed and maintained web applications using React and Node.js, improved application performance by 40%.",
  },
];

export default function About() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">
          I&apos;m a full-stack developer with over 5 years of experience in building web applications.
          I&apos;m passionate about creating efficient, scalable, and user-friendly solutions that solve real-world problems.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-4 rounded-lg border bg-card"
            >
              <h3 className="font-medium mb-3">{skillGroup.category}</h3>
              <ul className="space-y-1">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="border-l-2 pl-4">
              <h3 className="font-medium">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
} 