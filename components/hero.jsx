import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Decorative geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 border-4 border-secondary/20 rotate-45" />
        <div className="absolute bottom-40 left-10 w-24 h-24 border-4 border-primary/20 rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
              <span className="text-secondary font-semibold text-sm">Digital Printing </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6">
              Bringing Your Vision to <span className="text-primary">Vibrant</span>{" "}
              <span className="text-secondary">Life</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              Professional signage and printing solutions in Katihar, Bihar. From LED acrylic letters to vinyl branding,
              we transform your ideas into stunning visual displays.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Get a Quote</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>

            {/* Contact info */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm">
              <div>
                <p className="text-muted-foreground">Call us</p>
                <p className="font-semibold text-foreground">7488647962</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">Katihar, Bihar</p>
              </div>
            </div>
          </div>

          {/* Right visual element */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Geometric pattern background */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl -rotate-6" />

              {/* Image placeholder */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <img
                  src="/vibrant-traditional-indian-madhubani-art-patterns-.jpg"
                  alt="Traditional Madhubani art patterns"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
                <p className="text-4xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
