import { Card } from "@/components/ui/card"
import { Lightbulb, Frame, Palette, Eye, Zap, Home } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "LED Acrylic Letter",
      description:
        "Illuminated acrylic letters that make your brand shine day and night with energy-efficient LED technology.",
    },
    {
      icon: Frame,
      title: "Retro Redium Board",
      description:
        "Classic retro-style boards with modern durability, perfect for storefronts and commercial displays.",
    },
    {
      icon: Palette,
      title: "Vinyl/Branding",
      description:
        "High-quality vinyl graphics for vehicles, walls, and windows. Complete branding solutions for businesses.",
    },
    {
      icon: Eye,
      title: "One Way Vision",
      description: "Privacy vinyl with stunning graphics visible from outside while maintaining interior visibility.",
    },
    {
      icon: Zap,
      title: "Glow Sign Board",
      description: "Eye-catching illuminated signage that ensures your business stands out in any lighting condition.",
    },
    {
      icon: Home,
      title: "Hoarding/Unipole",
      description: "Large-format outdoor advertising solutions with weather-resistant materials and bold designs.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
            <span className="text-secondary font-semibold text-sm">What We Offer</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Premium</span> Services
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            From concept to installation, we provide comprehensive signage and printing solutions tailored to your
            unique requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
