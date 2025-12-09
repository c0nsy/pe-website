"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/platinum-logo.jpg"
              alt="Platinum Enterprise Group Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="text-2xl font-serif font-bold tracking-tight">Platinum Enterprise Group</div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary-foreground/80 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary-foreground/80 transition-colors">
              About
            </a>
            <a
              href="#additional-services"
              className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
            >
              Additional Services
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary-foreground/80 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary-foreground/80 transition-colors">
              Contact
            </a>
            <Button variant="secondary" size="sm" asChild>
              <a href="tel:5485581970" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (548) 558-1970
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-primary-foreground/10 pt-4">
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#additional-services"
              className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Additional Services
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="secondary" size="sm" asChild className="w-fit">
              <a href="tel:5485581970" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (548) 558-1970
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
