"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand } from "lucide-react"

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/images2/gallery-01.jpg",
      alt: "Tropical beach with boat",
      className: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
        src: "/images2/gallery-02.jpg",
        alt: "Person floating in water during sunset",
      className: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
        src: "/images2/gallery-03.jpg",
        alt: "Mountain climber on snowy peak",
      className: "col-span-1 row-span-1",
    },
    {
        src: "/images2/gallery-04.jpg",
        alt: "Hiker overlooking mountains",
      className: "col-span-1 row-span-1",
    },
    {
        src: "/images2/gallery-05.jpg",
        alt: "Person at scenic viewpoint",
      className: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
        src: "/images2/gallery-06.jpg",
        alt: "Hiker on mountain trail",
      className: "col-span-1 row-span-1",
    },
    {
        src: "/images2/gallery-07.jpg",
        alt: "Historic church with camera",
      className: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
        src: "/images2/gallery-01.jpg",
        alt: "Person floating in water during sunset",
      className: "col-span-1 row-span-1",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="inline-block rounded-full bg-orange-300 px-4 py-1 mb-4">
          <span className="text-lg font-medium italic text-black">Gallery</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Visit Our Customers Tour Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${image.className}`}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="aspect-square w-full h-full relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout='fill'
                  className={`object-cover transition-transform duration-500 ${
                    hoveredImage === index ? "scale-110" : "scale-100"
                  }`}
                />
                {hoveredImage === index && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300">
                    <button className="bg-white/80 p-2 rounded-full">
                      <Expand className="h-6 w-6 text-black" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

