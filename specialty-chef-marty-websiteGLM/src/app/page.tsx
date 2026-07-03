import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663243890751/YyMZfsz7vcD9v9ZWwSRhW5/hero-chef-cooking-ie8eXAfkMGSPRAvK5GDu3F.webp"
          alt="Chef Marty cooking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Let&apos;s Cook Something Special
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              Step-by-step recipes, baking tips, and culinary adventures for the home chef
            </p>
            <Link href="/recipes">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Recipes <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipe Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663243890751/YyMZfsz7vcD9v9ZWwSRhW5/featured-pasta-dish-VCesJb8zebC8hiAXGpM83V.webp"
                alt="Curry Shrimp Pasta"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="h-1 w-16 bg-primary mb-6" />
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                Curry Shrimp Pasta
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A delicious and aromatic curry shrimp pasta that combines fresh ingredients with bold spices. Perfect for a weeknight dinner or special occasion.
              </p>
              <ul className="space-y-3 mb-8 text-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Fresh shrimp and pasta
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Aromatic curry spices
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Ready in 20 minutes
                </li>
              </ul>
              <Link href="/recipes">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Full Recipe <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="h-1 w-16 bg-primary mb-6" />
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                Pecan Cinnamon Rolls
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Learn how to make moist, fluffy pecan cinnamon rolls from scratch. Chef Marty walks you through each step to ensure perfect results every time.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">9:35</p>
                  <p className="text-sm text-muted-foreground">Video Length</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">274</p>
                  <p className="text-sm text-muted-foreground">Views</p>
                </div>
              </div>
              <Link href="/videos">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Play className="mr-2" size={18} />
                  Watch Video
                </Button>
              </Link>
            </div>

            {/* Video Thumbnail */}
            <div className="relative group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663243890751/YyMZfsz7vcD9v9ZWwSRhW5/cinnamon-rolls-hero-PqqfeAdBVFNaUsqhTXD4hg.webp"
                alt="Pecan Cinnamon Rolls"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg flex items-center justify-center">
                <Play className="text-white" size={64} fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Your Kitchen, Your Masterpiece
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join 145+ subscribers and discover new recipes, cooking techniques, and culinary inspiration every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/videos">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Watch Videos
              </Button>
            </Link>
            <a
              href="https://youtube.com/@specialtychefcookingwithma2783"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Subscribe on YouTube
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}