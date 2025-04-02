"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Lia Frank",
      role: "Customer",
      image: "/images2/ava-1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.",
    },
    {
      id: 2,
      name: "Stefan Hawking",
      role: "Customer",
      image: "/images2/ava-3.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.",
    },
    {
      id: 3,
      name: "Maria Johnson",
      role: "Customer",
      image: "/images2/ava-1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.",
    },
    {
      id: 4,
      name: "John Smith",
      role: "Customer",
      image:"/images2/ava-2.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.",
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "Customer",
      image: "/images2/ava-3.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.",
    },
  ]

  useEffect(() => {
    // Start auto-scrolling
    startAutoScroll()

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index)

    // Reset the interval when manually changing slides
    startAutoScroll()
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="inline-block rounded-full bg-orange-300 px-4 py-1 mb-4">
          <span className="text-lg font-medium italic text-black">Testimonial</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">What our Customers Say about us</h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="grid md:grid-cols-3 gap-8">
                  {[0, 1, 2].map((i) => {
                    const index = (testimonial.id - 1 + i) % testimonials.length
                    const item = testimonials[index]
                    return (
                      <div key={`${testimonial.id}-${i}`} className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-gray-700 mb-6">{item.content}</p>
                        <div className="flex items-center">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                             layout='fill'
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-gray-600">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeIndex === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

