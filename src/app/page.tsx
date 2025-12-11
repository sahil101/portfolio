import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Sahil Agarwal
        </span>
      </h1>
      <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
        A passionate full-stack developer specializing in building modern web applications. 
        I love creating elegant solutions to complex problems.
      </p>
      <div className="flex gap-4 mt-8">
        <Button asChild>
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}
