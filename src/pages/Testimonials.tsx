
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      location: "Lagos State",
      business: "Poultry Farm Owner",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "Kemi Globals has been my trusted partner for over 2 years. Their broiler chickens are of exceptional quality, and the feed has helped me achieve excellent growth rates. My farm productivity has increased by 40% since I started working with them.",
      product: "Broiler Chickens & Feed"
    },
    {
      id: 2,
      name: "Mrs. Fatima Aliyu",
      location: "Kaduna State",
      business: "Layer Farm",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "The layer birds I purchased from Kemi Globals are amazing! They started laying earlier than expected and the egg production rate is fantastic. The customer service is also top-notch - they're always available to answer my questions.",
      product: "Layer Birds"
    },
    {
      id: 3,
      name: "Emeka Okafor",
      location: "Anambra State",
      business: "Mixed Farm",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "I've tried several suppliers before, but none compare to Kemi Globals. Their goats are healthy, well-bred, and adapt quickly to my farm environment. The delivery was prompt and professional. Highly recommended!",
      product: "Goats & Livestock"
    },
    {
      id: 4,
      name: "Samuel Ogundimu",
      location: "Ogun State",
      business: "Commercial Poultry",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "As a commercial poultry farmer, quality is everything to me. Kemi Globals consistently delivers premium day-old chicks and their feed formulations are excellent. My mortality rate has dropped significantly since switching to their products.",
      product: "Day-old Chicks & Feed"
    },
    {
      id: 5,
      name: "Mrs. Grace Adamu",
      location: "FCT Abuja",
      business: "Small Scale Farmer",
      rating: 4,
      image: "/placeholder.svg",
      testimonial: "Starting my poultry farm was daunting, but Kemi Globals made it easy. They provided guidance, quality birds, and ongoing support. My small farm is now profitable thanks to their expertise and quality products.",
      product: "Starter Package"
    },
    {
      id: 6,
      name: "Chief Olumide Balogun",
      location: "Osun State",
      business: "Livestock Ranch",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "I've purchased cattle, goats, and rams from Kemi Globals for my ranch. Every animal has been healthy and well-cared for. Their expertise in livestock breeding is evident in the quality of animals they provide.",
      product: "Cattle & Rams"
    },
    {
      id: 7,
      name: "Dr. Kemi Ashiru",
      location: "Oyo State",
      business: "Veterinarian & Farm Owner",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "As a veterinarian, I appreciate Kemi Globals' commitment to animal health. Their livestock are well-vaccinated and healthy. I've recommended them to many of my clients and they've all been satisfied.",
      product: "Health Consultation"
    },
    {
      id: 8,
      name: "Ibrahim Mohammed",
      location: "Kano State",
      business: "Feed Distributor",
      rating: 5,
      image: "/placeholder.svg",
      testimonial: "I distribute Kemi Globals feed to farmers in my area. The quality is consistent, farmers love it, and it's competitively priced. Our partnership has been mutually beneficial and I look forward to expanding our business together.",
      product: "Feed Distribution"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "25+", label: "States Served" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Hear from satisfied farmers who have transformed their agricultural businesses with our quality products and services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real farmers who have experienced success with Kemi Globals products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-sm text-green-600">{testimonial.business}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <div className="relative mb-4 flex-grow">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200" />
                    <p className="text-gray-700 italic pl-6">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full inline-block">
                      {testimonial.product}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
          <p className="text-xl text-green-100 mb-8">
            Start your journey to farming success with Kemi Globals. Quality products, expert support, and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Success Story
              </button>
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
