import Link from "next/link";
import { Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Playfair Display" }}>
              Specialty Chef Marty
            </h3>
            <p className="text-sm opacity-90">
              Sharing delicious recipes, cooking tips, and culinary adventures for home chefs everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
              </li>
              <li>
                <Link href="/videos" className="hover:opacity-80 transition-opacity">Videos</Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:opacity-80 transition-opacity">Recipes</Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">About</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com/@specialtychefcookingwithma2783"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Youtube size={24} />
              </a>
              <a
                href="mailto:contact@specialtychefmarty.com"
                className="hover:opacity-80 transition-opacity"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Specialty Chef Marty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}