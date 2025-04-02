

import Image from "next/image"
import Link from "next/link";
import TourPackages from "components/TourPackage";
import { Star,Shield, Map, Compass ,MapPin, Users, Clock,Calendar, User,Mail, Phone } from "lucide-react"
//SERVICE LIST

const packages = [
    {
      id: 1,
      title: "Customized Itineraries",
      desc: "Personalized travel plans tailored to your preferences, interests, and budget.",
      icon: <Map className="w-8 h-8 text-amber-500" />,
    },
    {
      id: 2,
      title: "Local Expertise",
      desc: "Insider knowledge and recommendations from our team of Goa specialists.",
      icon: <Compass className="w-8 h-8 text-amber-500" />,
    },
    {
      id: 3,
      title: "24/7 Support",
      desc: "Round-the-clock assistance throughout your journey for peace of mind.",
      icon: <Shield className="w-8 h-8 text-amber-500" />,
    },
  ]
function PackagesCard(){
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg w-25 h-50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default PackagesCard;