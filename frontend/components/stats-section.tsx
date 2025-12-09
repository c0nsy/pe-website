export function StatsSection() {
  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "24/7", label: "Emergency Service" },
    { value: "100%", label: "Quality Guarantee" },
    { value: "500+", label: "Satisfied Clients" },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-serif">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
