import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Sarfaraz <span className="text-secondary">Art</span>
            </h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Your trusted partner for professional signage and digital printing solutions in Katihar, Bihar. Quality
              craftsmanship meets modern innovation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <div className="text-background/80 text-sm">
                  <p>7488647962</p>
                  <p>06452 243078</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <a
                  href="mailto:sarfarazartktr@gmail.com"
                  className="text-background/80 hover:text-secondary transition-colors text-sm"
                >
                  sarfarazartktr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© {currentYear} Sarfaraz Art. All rights reserved.</p>
            <p>Choudhary Mohalla, Hariganj Chowk, Katihar, Bihar</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
