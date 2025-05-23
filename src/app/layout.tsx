import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "A showcase of my work and skills",
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
    <html lang="en">
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
                      <TabsTrigger value={item.path}>
                        {item.name}
                      </TabsTrigger>
                    </Link>
                  ))}
                </TabsList>
              </Tabs>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
