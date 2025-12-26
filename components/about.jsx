import { Award, Users, Sparkles } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Sparkles, value: "10+", label: "Years Experience" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-printing-workshop-with-led-signs-and-.jpg"
                alt="Sarfaraz Art workshop"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full -z-10" />
          </div>

          {/* Content side */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">About Us</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Crafting Visual Excellence Since 2014
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              At Sarfaraz Art, we blend traditional craftsmanship with modern technology to deliver exceptional signage
              and printing solutions. Based in the heart of Katihar, Bihar, we've been serving businesses and
              individuals with creative visual displays that capture attention and leave lasting impressions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Our commitment to quality, attention to detail, and customer satisfaction has made us a trusted name in
              digital printing, vinyl works, and custom signage solutions across the region.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
