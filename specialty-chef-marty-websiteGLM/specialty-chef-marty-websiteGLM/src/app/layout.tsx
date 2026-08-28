import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Specialty Chef Marty - Cooking Videos & Recipes",
  description: "Specialty Chef Marty - Step-by-step cooking videos, recipes, and culinary tips for home chefs.",
  keywords: ["cooking", "recipes", "baking", "videos", "chef", "food"],
  authors: [{ name: "Specialty Chef Marty" }],
  icons: {
    icon: "/chef-marty-logo.svg",
  },
  openGraph: {
    title: "Specialty Chef Marty - Cooking Videos & Recipes",
    description: "Step-by-step cooking videos, recipes, and culinary tips for home chefs.",
    url: "https://specialtychefmarty.com",
    siteName: "Specialty Chef Marty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialty Chef Marty",
    description: "Step-by-step cooking videos, recipes, and culinary tips for home chefs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
