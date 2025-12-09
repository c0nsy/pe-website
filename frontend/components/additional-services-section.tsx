import { Card, CardContent } from "@/components/ui/card"
import {
  Fence,
  Hammer,
  PaintBucket,
  Home,
  HardHat,
  Wrench,
  Droplet,
  TreeDeciduous,
  Trees,
  Square,
  Blocks,
} from "lucide-react"

export function AdditionalServicesSection() {
  const services = [
    { icon: Fence, title: "Deck and Fencing", description: "Enhance your outdoor living space" },
    { icon: Hammer, title: "Demolitions / Bin Rentals", description: "Safe and efficient demolition services" },
    { icon: PaintBucket, title: "Interior Renovations", description: "Transform your living or working space" },
    { icon: Home, title: "Exterior Renovations", description: "Enhance your property's curb appeal" },
    { icon: Square, title: "Concrete", description: "Comprehensive concrete solutions" },
    { icon: HardHat, title: "Roofing", description: "Comprehensive range of roofing services" },
    { icon: Wrench, title: "Mobile Welding", description: "Welding technologies directly to your location" },
    { icon: Droplet, title: "Caulking", description: "Professional caulking and sealing services" },
    { icon: TreeDeciduous, title: "Landscape Design", description: "Free consultation with our design professionals" },
    { icon: Trees, title: "Tree Removal", description: "Expert tree removal and stump grinding services" },
    {
      icon: Square,
      title: "Sod Installation",
      description: "Fast, professional sod installation for instant green lawns",
    },
    { icon: Blocks, title: "Interlock Stone", description: "Precision-built, professionally installed stone work" },
  ]

  return (
    <section id="additional-services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-balance">Additional Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From custom fences and decks to roofing, concrete work, and full-scale renovations—our team delivers quality
            craftsmanship with zero shortcuts and zero nonsense.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
