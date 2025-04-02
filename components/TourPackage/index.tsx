
import Image from "next/image"
import Link from "next/link";
import TourPackages from "components/TourPackage";
import { Star,Shield, Map, Compass ,MapPin, Users, Clock,Calendar, User,Mail, Phone } from "lucide-react"

const tourPackages = [
    {
      id: 1,
      title: "Sunset view of beautiful lakeside resident",
      price: "₹1,900",
      duration: "7D/6N",
      people: 5,
      location: "North Goa",
      rating: 4,
      reviews: 25,
      image: "/images2/tour-img01.jpg",
    },
    {
      id: 2,
      title: "Sunset view of beautiful lakeside resident",
      price: "₹1,900",
      duration: "7D/6N",
      people: 5,
      location: "Malaysia",
      rating: 4,
      reviews: 25,
      image: "/images2/tour-img02.jpg",
    },
    {
      id: 3,
      title: "Sunset view of beautiful lakeside resident",
      price: "₹1,900",
      duration: "7D/6N",
      people: 5,
      location: "Malaysia",
      rating: 4,
      reviews: 25,
      image: "/images2/tour-img03.jpg",
    },
    {
      id: 4,
      title: "Sunset view of beautiful lakeside resident",
      price: "₹1,900",
      duration: "7D/6N",
      people: 5,
      location: "Malaysia",
      rating: 4,
      reviews: 25,
      image: "/images2/tour-img04.jpg",
    },
  ]
  

export default function TourPackage(){
    
    return(
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-md border">
              <div className="relative h-48">
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded z-10">
                  {pkg.price} / per person
                </div>
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                
              </div>

              <div className="p-4 space-y-3 justify-start text-left">
              <div className="bg-blue-600 text-white px-4 py-2 mt-14">
              {pkg.duration} | People: {pkg.people} | {pkg.location}
              </div>

                <h3 className="font-semibold text-lg">{pkg.title}</h3>

                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < pkg.rating ? "fill-amber-500 text-amber-500" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  <span className="text-sm text-gray-500 ml-1">({pkg.reviews} reviews)</span>
                </div>

                <div className="text-sm text-gray-600">
                  {pkg.duration} | People: {pkg.people} | {pkg.location}
                </div>
                        {/* Travel options */}
        <div className="flex items-center justify-between border-t border-b py-3 text-gray-700">
          <div className="flex items-center gap-1">
            <span className="text-sm">✈️ Flight</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">🏨 Hotels</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">🚌 Transport</span>
          </div>
        </div>
        <div className="flex gap-3 pt-2">
          <button
            className="flex-1 bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center"
          >
            Book Now →
          </button>
          <button className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center">
            Wish List ♡
          </button>
        </div>
              </div>
            </div>
          ))}
        </div>
        )
}