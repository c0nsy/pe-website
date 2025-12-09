import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Snowflake, Sparkles, Trash2, Truck, Droplets, Mountain } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Leaf,
      title: "Lawn / Landscape",
      description: "Professional lawn care and landscape maintenance",
    },
    {
      icon: Mountain,
      title: "Hardscape / Softscape",
      description: "Harmonious balance between soft and hard elements",
    },
    {
      icon: Sparkles,
      title: "Spring / Fall Cleanups",
      description: "Get your property ready for the season",
    },
    {
      icon: Snowflake,
      title: "Snow and Ice Management",
      description: "24/7 snow removal and ice control solutions",
    },
    {
      icon: Sparkles,
      title: "Janitorial Services",
      description: "State of the art equipment and green solutions",
    },
    {
      icon: Trash2,
      title: "Junk / Graffiti Removal",
      description: "Fast, discreet, and thorough removal services",
    },
    {
      icon: Truck,
      title: "Asphalt Maintenance",
      description: "Comprehensive asphalt solutions",
    },
    {
      icon: Droplets,
      title: "Irrigation Water Systems",
      description: "Professional irrigation installation and maintenance",
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-balance">
            Property Maintenance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From grass to snow and everything in between—our team delivers full-service, year-round property care
            tailored for commercial clients, builders, and property managers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon className="h-6 w-6 text-secondary-foreground" />
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
