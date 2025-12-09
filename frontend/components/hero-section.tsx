import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gorgeous_lawncare.jpg"
          alt="Professional lawn care and property maintenance"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-balance">
              A Step Above <br />
              The Rest
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto text-balance leading-relaxed">
              Professional property maintenance, landscaping, and contracting services across Southwestern Ontario
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <a href="#contact" className="flex items-center gap-2">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="#services">View Services</a>
            </Button>
          </div>

          <div className="pt-12 text-sm text-primary-foreground/70">
            <p>Serving Kitchener, Waterloo, Cambridge, Guelph, and greater Southwestern Ontario</p>
          </div>
        </div>
      </div>
    </section>
  )
}
