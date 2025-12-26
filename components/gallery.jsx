"use client"

import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    { id: 1, query: "LED acrylic letter signage in red neon lights" },
    { id: 2, query: "vinyl vehicle branding wrap on car" },
    { id: 3, query: "illuminated glow sign board for shop" },
    { id: 4, query: "retro style shop board with classic typography" },
    { id: 5, query: "one way vision window graphic advertisement" },
    { id: 6, query: "large outdoor hoarding billboard advertisement" },
    { id: 7, query: "LED channel letter sign mounted on wall" },
    { id: 8, query: "vinyl wall branding with company logo" },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">Portfolio</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-secondary">Recent</span> Work
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Explore our diverse portfolio showcasing exceptional signage and printing projects delivered across Katihar
            and beyond.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={`/.jpg?key=or3ye&height=400&width=400&query=${encodeURIComponent(item.query)}`}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-secondary text-4xl"
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={`/.jpg?key=g90ec&height=800&width=800&query=${encodeURIComponent(selectedImage.query)}`}
                alt={`Gallery item ${selectedImage.id}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
