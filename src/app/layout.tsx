import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Agarwal | Portfolio",
  description: "Full-stack developer specializing in modern web applications",
  keywords: ["Next.js", "React", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Sahil Agarwal" }],
  creator: "Sahil Agarwal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Portfolio
              </Link>
              <Tabs defaultValue="/about" className="w-auto">
                <TabsList>
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path} passHref>
                      <TabsTrigger value={item.path} className="cursor-pointer">
                        {item.name}
                      </TabsTrigger>
                    </Link>
                  ))}
                </TabsList>
              </Tabs>
            </nav>
          </div>
        </header>
        <main className="min-h-screen bg-background">
          {children}
        </main>
        <footer className="border-t py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sahil Agarwal. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
