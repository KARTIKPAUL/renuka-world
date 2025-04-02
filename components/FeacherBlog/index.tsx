
import Image from "next/image"
import Link from "next/link";
import TourPackages from "components/TourPackage";
import { Star,Shield, Map, Compass ,MapPin, Users, Clock,Calendar, User,Mail, Phone } from "lucide-react"
//FEACHER BLOG
const blogs = [
    {
      id: 1,
      title: "Top 10 Beaches in Goa You Must Visit",
      desc: "Discover the most beautiful and serene beaches in Goa that are perfect for your next vacation.",
      image: "/images2/gallery-06.jpg",
      date: "January 15, 2023",
      author: "Priya Sharma",
    },
    {
      id: 2,
      title: "Goa's Hidden Culinary Gems",
      desc: "Explore the lesser-known but incredibly delicious food spots that locals love in Goa.",
      image: "/images2/blog-img01.jpg",
      date: "February 22, 2023",
      author: "Rahul Mehta",
    },
    {
      id: 3,
      title: "Adventure Activities in Goa",
      desc: "From parasailing to scuba diving, here are the best adventure activities to try in Goa.",
      image: "/images2/blog-img01.jpg",
      date: "March 10, 2023",
      author: "Anjali Patel",
    },
  ]
function FeacherBlog(){
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={600}
                  height={250}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </div>
                </div>

                <h3 className="font-semibold text-lg">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>

                <button className="text-amber-500 font-medium hover:underline">Read More</button>
              </div>
            </div>
          ))}
        </div>
    )
}
export default FeacherBlog; 