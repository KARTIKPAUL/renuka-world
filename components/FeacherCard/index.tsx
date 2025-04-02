
import Image from "next/image"
import Link from "next/link";
import TourPackages from "components/TourPackage";
import { Star,Shield, Map, Compass ,MapPin, Users, Clock,Calendar, User,Mail, Phone } from "lucide-react"
//FEACHER TOUR
const featuredTours = [
    {
      id: 1,
      title: "North Goa Beach Tour",
      price: 2999,
      duration: "1 day",
      groupSize: 8,
      location: "North Goa",
      rating: 4.8,
      reviews: 32,
      image: "/images2/tour-img01.jpg",
    },
    {
      id: 2,
      title: "South Goa Heritage Tour",
      price: 3499,
      duration: "2 days",
      groupSize: 10,
      location: "South Goa",
      rating: 4.7,
      reviews: 28,
      image: "/images2/tour-img02.jpg",
    },
    {
      id: 3,
      title: "Dudhsagar Waterfall Trek",
      price: 1999,
      duration: "1 day",
      groupSize: 12,
      location: "Eastern Goa",
      rating: 4.9,
      reviews: 45,
      image: "/images2/tour-img03.jpg",
    },
  ]
function FeacherCard(){
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredTours.map((tour) => (
                    <div
                      key={tour.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-60">
                        <Image
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
        
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {tour.location}
                        </div>                             <div className="flex items-center">
                            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                            <span className="text-sm ml-1">{tour.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">({tour.reviews})</span>
                          </div>
                        </div>
        
                                               <h3 className="font-semibold text-lg">{tour.title}</h3>

        
                        <div className="flex justify-between text-gray-600 text-sm">
                        <div className="   text-amber-500 px-2 py-1 text-2xl ">₹{tour.price}<h4 className='text-black text-sm'>/Per Person</h4></div>

                          <button className="w-fit px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors mt-2">
                          Book Now
                        </button>
                        </div>
        
                        
                      </div>
                    </div>
                  ))}
                </div>
    )
}
export default FeacherCard;