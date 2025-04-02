import Image from "next/image"
import TourPackages from "components/TourPackage";
import { Star,Shield, Map, Compass ,MapPin, Users, Clock,Calendar, User,Mail, Phone } from "lucide-react"
import ServiceCard from "components/ServiceCard";
import FeacherCard from "components/FeacherCard"
import FeacherBlog from 'components/FeacherBlog'
import Gallery from "components/Gallary";
import Testimonials from "components/Testimonals"
import Link from "next/link";
import TwitterIco from 'assets/images/twitter.svg';
import InstagramIco from 'assets/images/instagram.svg';
import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';
import DecorEllipse1 from 'assets/images/decor-ellipse-style-1.svg';
import FacebookIco from 'assets/images/facebook.svg';
import Head from 'next/head';
import Header from 'components/Header';
import PackagesCard from "components/PackagesCard";







//Tour Card Details

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
    image: "/tour-2.jpg",
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
    image: "/tour-3.jpg",
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
    image: "/tour-4.jpg",
  },
]


  
  //GALLARY
  const galleryImages = [
    { id: 1, image: "/gallery-1.jpg" },
    { id: 2, image: "/gallery-2.jpg" },
    { id: 3, image: "/gallery-3.jpg" },
    { id: 4, image: "/gallery-4.jpg" },
    { id: 5, image: "/gallery-5.jpg" },
    { id: 6, image: "/gallery-6.jpg" },
    { id: 7, image: "/gallery-7.jpg" },
    { id: 8, image: "/gallery-8.jpg" },
  ]
  
  //testimonals
  const testimonials = [
    {
      id: 1,
      name: "Vikram Singh",
      photo: "/avatar-1.jpg",
      rating: 5,
      text: "Our trip to Goa was absolutely amazing thanks to RenukaWorld! The itinerary was perfectly planned, and we got to experience both popular attractions and hidden gems. The team was responsive and helpful throughout our journey.",
    },
    {
      id: 2,
      name: "Meera Patel",
      photo: "/avatar-2.jpg",
      rating: 5,
      text: "I can't recommend RenukaWorld enough! As a solo traveler, I was looking for a safe and enriching experience in Goa, and they delivered beyond my expectations. The local guides were knowledgeable and friendly.",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      photo: "/avatar-3.jpg",
      rating: 4,
      text: "We booked a family tour with RenukaWorld, and it was perfect for all ages. The kids enjoyed the beach activities while we adults appreciated the cultural insights. The accommodations were comfortable and well-located.",
    },
  ]
  

function home (){
    return(
        <main  >
       
      {/* Header */}
      <div className="mt-10">
        <Header />
        </div>

        <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Hero Content - Takes 6/12 columns on large screens */}
            <div className="lg:col-span-3 pt-2 md:pt-8">
              <div className="flex items-center hero__subtitle">
              <div className="bg-[#e9963f] text-black text-2xl px-8 py-1 rounded-full font-[cursive] shadow-md"> Welcome to Goa Explorer </div> 
              <Image src="/images2/world.png" alt="World" width={36} height={36} className="ml-2 w-9 h-9" />
              </div>
  
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-4 mb-4 text-[#222]">
                Discover Goa: Your Ultimate <span className="text-amber-500">Travel Guide</span>
              </h1>
  
              <p className="text-base text-gray-600 leading-8">
                🎉 Welcome to our vibrant corner of the internet, where the adventure begins! Dive into the heart of Goa's
                beauty and excitement with our interactive travel guide. 🗺️ From pristine beaches to bustling markets,
                ancient forts to lively nightlife, we've curated the ultimate experience for every traveler. 🏖️ Choose your
                path, explore hidden gems, and create memories that will last a lifetime. Ready to embark on an
                unforgettable journey? Let's start exploring together! 🚀
              </p>
            </div>
  
            {/* Hero Images - Each takes 1/12 columns on large screens */}
                        <div className="lg:col-span-1 pt-8">
            <div className="h-[350px] rounded-[20px] overflow-hidden border-2 border-amber-500 relative">
                <Image
                src="/images2/hero-img01.jpg"
                alt="Goa Beach"
                layout="fill" // Makes the image fill the container
                className="object-cover" // Ensures the image covers the container without distorting its aspect ratio
                />
            </div>
            </div>

  
            <div className="lg:col-span-1 pt-8 mt-0 md:mt-4">
              <div className="h-[350px] rounded-[20px] overflow-hidden border-2 border-amber-500 video-box">
                <video src="/images2/hero-video.mp4" autoPlay loop muted className="w-full h-full object-cover" />
              </div>
            </div>
            
                        <div className="lg:col-span-1 pt-8 mt-0 md:mt-5">
            <div className="h-[350px] rounded-[20px] overflow-hidden border-2 border-amber-500 mt-5 relative">
                <Image
                src="/images2/hero-img02.jpg"
                alt="Goa Attraction"
                layout="fill" // This makes the image fill the container both horizontally and vertically
                className="object-cover" // Ensures the image maintains aspect ratio while filling the container
                />
            </div>
            </div>

          </div>
        </div>
      </section>

        {/*TOUR PACKAGGES*/ }
      <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h5 className="text-xl md:text-2xl font-medium text-red-400 cursive">Our Best of Tour Packages</h5>
          <h2 className="text-2xl md:text-3xl font-medium mt-2">We Offer Our Best Packages</h2>
        </div>

        <TourPackages />
      </div>
    </section>
     {/*pACKAGES */}
     <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h5 className="text-2xl md:text-3xl font-medium mt-2">Customize & Book Festive
Goa Tour Packages</h5>
          <h2 className="text-gray-600  font-medium mt-2">Experience the best in travel with our Best Holiday Packages to Top Notch Destinations. Don't miss out on these exclusive deals!.</h2>
        </div>

      <PackagesCard />
      </div>
    </section>

    {/*SEVICE SECTION */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h5 className="text-xl md:text-2xl font-medium text-red-400 cursive">What We Serve</h5>
          <h2 className="text-2xl md:text-3xl font-medium mt-2">We Offer Our Best Services</h2>
        </div>

       <ServiceCard />
      </div>
    </section>
    {/*EXPLOER PACKAGE && FEACHER TOUR */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
        <h5  className="cursive text-xl md:text-2xl text-red-500">Explore Packages"</h5>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-2">Our Featured Tours</h2>
        </div>

        <FeacherCard />
      </div>
    </section>

    {/*EXPERIENCE  */}
    <section className="py-12 bg-gray-50"> <div className="container mx-auto px-4"> <div className="grid md:grid-cols-2 gap-8 items-center"> {/* Left Section */} <div className="space-y-6">
    <div className="bg-[#e9963f] text-black w-fit text-2xl px-8 py-1 rounded-full font-[cursive] shadow-md"> Embrace Goa: Our Presence in Paradise </div> 
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold"> Connecting You to Goa's Essence, <br /> One Experience at a Time </h2> <p className="text-gray-600 leading-8"> Our vibrant presence in the heart of Goa! At Goa Explorer, we're more than just a travel company. We're your gateway to experiencing the soul of this beautiful destination. Through our carefully curated experiences, personalized services, and passionate team, we strive to connect you with the essence of Goa. </p>

{/* Statistics Section */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { count: '12k+', label: 'Successful Trips' },
            { count: '2k+', label: 'Regular Clients' },
            { count: '15+', label: 'Years Experience' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-[70px] h-[70px] mx-auto flex items-center justify-center bg-orange-500 text-white text-2xl font-semibold rounded-lg shadow-lg">
                {item.count}
              </div>
              <h6 className="mt-4 text-gray-600 text-lg">{item.label}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="relative">
        <div className="relative z-20">
          <Image
            src="/images2/experience.png"
            priority
            layout="responsive"
            width={100}
            height={100}
            alt="Traveler with suitcase"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute top-10 left-10 w-24 h-24 animate-bounce">
          <Image src="/images/plane.png" layout="responsive" width={100} height={100} alt="plane" />
        </div>
        <div className="absolute top-20 right-10 w-24 h-24 animate-bounce delay-500">
          <Image src="/images/plane.png" layout="responsive" width={100} height={100} alt="plane" />
        </div>
      </div>
    </div>
  </div>
</section>

    {/*gALLARY */}
    <Gallery />
    {/*FEACHER BLOG */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
        <h5  className="cursive text-xl md:text-2xl text-red-500">Feacher Blogs</h5>
        </div>

        <FeacherBlog />
      </div>
    </section>
    {/*Testimonals*/}
   <Testimonials />
    {/*Contact */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
        <h5  className="cursive text-xl md:text-2xl text-red-500">Contact Us</h5>
            <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-6">Get in Touch</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                <p>123 Beach Road, Calangute, Goa, India - 403516</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3" />
                <p>info@renukaworld.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3" />
                <p>+91 98765 43210</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="contact__img">
            <Image src="/images2/contact.jpg" alt="Contact Us" width={600} height={600} className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
     {/* Section News Letter */}
     <section className="mb-32">
        <div className="relative mx-auto max-w-full px-4 lg:max-w-7xl">
          <div className="absolute bottom-0 -z-10 h-36 w-36 translate-y-1/2 rotate-90 transform lg:-right-20">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="relative w-full bg-white">
            <div className="relative top-8 right-auto left-1/2 z-30 h-16 w-16 -translate-x-1/2 translate-y-0 transform rounded-full bg-gradient-to-b from-accent-6/60 to-accent-6 lg:absolute lg:top-0 lg:right-0 lg:translate-x-1/2 lg:-translate-y-1/2">
              <span className="material-icons flex h-16 w-16 items-center justify-center text-white">near_me</span>
            </div>
            <div className="relative z-20 mb-8 overflow-hidden rounded-xl rounded-tl-3xl bg-accent-4/20 pt-20 pb-20 lg:rounded-3xl lg:rounded-tl-[120px]">
              <div className="absolute top-0 right-0 h-[290px] w-[284px] -translate-y-1/3 translate-x-1/4 rotate-[45deg] scale-x-[-1] transform">
                <DecorEllipse1 className="stroke-accent-6/10 opacity-10" />
              </div>
              <div className="absolute -bottom-0 left-4 h-[397px] w-[389px] translate-y-1/3 transform">
                <DecorEllipse1 className="stroke-accent-6/10 opacity-10" />
              </div>
              <div className="relative z-10">
                <h6 className="mb-10 px-4 text-center text-lg font-bold leading-normal text-gray-500 lg:px-36 lg:text-3xl">
                  Subscribe to get information, latest news and other interesting offers about Cobham
                </h6>
                <form action="" className="flex justify-center lg:space-x-5">
                  <fieldset className="relative">
                    <span className="material-icons absolute flex h-full w-16 items-center justify-center text-gray-500">
                      mail_outline
                    </span>
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="w-auto appearance-none rounded-l-lg border-2 border-transparent bg-white py-4 pl-14 transition duration-300 focus:border-accent-6 focus:outline-none lg:w-96 lg:rounded-lg"
                    />
                  </fieldset>
                  <button className="rounded-r-lg bg-gradient-to-b from-accent-2/90 to-accent-2 py-4 px-4 text-white lg:rounded-lg lg:px-16">
                    <span className="hidden lg:block">Subscribe</span>
                    <span className="material-icons block lg:hidden">search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    <footer className="relative overflow-x-hidden pb-32">
        <div className="h-6- bg-accent-6.20 absolute -bottom-0 -right-10 z-10 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-full px-4 lg:max-w-7xl">
          <div className="mb-12 flex flex-wrap">
            <div className="w-full lg:w-3/12 lg:px-4">
              <h6 className="mb03 mb-4 text-5xl tracking-tight text-gray-900">Jadoo.</h6>
              <p className="pr-8 text-sm text-gray-500">Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-4">
                <div>
                  <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">Company</h6>
                  <ul className="space-y-2 text-lg text-gray-500">
                    <li>
                      <Link href="/#">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Careers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Mobile</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">Contact</h6>
                  <ul className="space-y-2 text-lg text-gray-500">
                    <li>
                      <Link href="/#">
                        <a>Help</a>
                      </Link>
                      /FAQ
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Press</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Affiliates</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">More</h6>
                  <ul className="space-y-2 text-lg text-gray-500">
                    <li>
                      <Link href="/#">
                        <a>Airlinefees</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Airline</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Low fare tips</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full lg:mt-0 lg:w-3/12">
              <div className="flex space-x-5">
                <Link href="https://facebook.com" className="cursor-pointer" passHref>
                  <a target="blank" rel="noreferrer noopener">
                    <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white fill-black shadow-xl">
                      <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                      <span className="relative z-20">
                        <FacebookIco className="fill-black group-hover:fill-white" />
                      </span>
                    </div>
                  </a>
                </Link>
                <Link href="https://instagram.com" className="cursor-pointer" passHref>
                  <a target="blank" rel="noreferrer noopener">
                    <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white fill-black shadow-xl">
                      <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                      <span className="relative z-20">
                        <InstagramIco className="fill-black group-hover:fill-white" />
                      </span>
                    </div>
                  </a>
                </Link>
                <Link href="https://twitter.com" className="cursor-pointer" passHref>
                  <a target="blank" rel="noreferrer noopener">
                    <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white fill-black shadow-xl">
                      <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                      <span className="relative z-20">
                        <TwitterIco className="fill-black group-hover:fill-white" />
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
              <h6 className="mt-7 text-xl tracking-tight text-gray-500">Discover our app</h6>
              <div className="mt-4 flex space-x-1">
                <div className="relative h-[35px] w-[107px]">
                  <a href="https://play.google.com" target="_blank" className="relative flex h-full w-full">
                    <Image layout="fill" alt="play store" className="object-contain" src="/images/google-play-1.jpg" />
                  </a>
                </div>
                <div className="relative h-[35px] w-[107px]">
                  <a href="https://www.apple.com/id/app-store/" target="_blank" className="relative flex h-full w-full">
                    <Image layout="fill" alt="apps store" className="object-contain" src="/images/apple-1.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 text-center text-sm text-gray-500">All rights reserved@jadoo.co</div>
        </div>
      </footer>

      </main>
      
    )
}
export default home;