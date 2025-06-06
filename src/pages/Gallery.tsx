
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Poultry", "Livestock", "Farm", "Feed", "Facilities"];

  const galleryItems = [
    {
      id: 1,
      title: "Premium Broiler Chickens",
      category: "Poultry",
      image: "/placeholder.svg",
      description: "Healthy day-old broiler chicks ready for farming"
    },
    {
      id: 2,
      title: "Layer Birds in Production",
      category: "Poultry", 
      image: "/placeholder.svg",
      description: "High-producing layer birds in our farm facility"
    },
    {
      id: 3,
      title: "West African Dwarf Goats",
      category: "Livestock",
      image: "/placeholder.svg",
      description: "Quality goats available for breeding and meat production"
    },
    {
      id: 4,
      title: "Cattle Grazing Area",
      category: "Livestock",
      image: "/placeholder.svg",
      description: "Our cattle in spacious, well-maintained grazing fields"
    },
    {
      id: 5,
      title: "Modern Poultry House",
      category: "Facilities",
      image: "/placeholder.svg",
      description: "State-of-the-art poultry housing with proper ventilation"
    },
    {
      id: 6,
      title: "Feed Production Facility",
      category: "Feed",
      image: "/placeholder.svg",
      description: "Our feed manufacturing plant ensuring quality nutrition"
    },
    {
      id: 7,
      title: "Free-Range Chickens",
      category: "Farm",
      image: "/placeholder.svg",
      description: "Chickens enjoying natural environment on our farm"
    },
    {
      id: 8,
      title: "Quality Feed Products",
      category: "Feed",
      image: "/placeholder.svg",
      description: "Range of nutritious feed for different growth stages"
    },
    {
      id: 9,
      title: "Ram Collection",
      category: "Livestock",
      image: "/placeholder.svg",
      description: "Strong, healthy rams available for breeding"
    },
    {
      id: 10,
      title: "Turkey Farm Section",
      category: "Poultry",
      image: "/placeholder.svg",
      description: "Large turkeys raised for special occasions"
    },
    {
      id: 11,
      title: "Farm Infrastructure",
      category: "Facilities",
      image: "/placeholder.svg",
      description: "Well-planned farm layout with modern infrastructure"
    },
    {
      id: 12,
      title: "Duck Pond Area",
      category: "Farm",
      image: "/placeholder.svg",
      description: "Ducks in their natural aquatic environment"
    },
    {
      id: 13,
      title: "Rabbit Housing Unit",
      category: "Livestock",
      image: "/placeholder.svg",
      description: "Clean, spacious rabbit housing for optimal breeding"
    },
    {
      id: 14,
      title: "Feed Storage Warehouse",
      category: "Facilities",
      image: "/placeholder.svg",
      description: "Climate-controlled storage for feed preservation"
    },
    {
      id: 15,
      title: "Noiler Chickens",
      category: "Poultry",
      image: "/placeholder.svg",
      description: "Dual-purpose noiler chickens for meat and eggs"
    },
    {
      id: 16,
      title: "Farm Team at Work",
      category: "Farm",
      image: "/placeholder.svg",
      description: "Our dedicated team caring for the animals"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Poultry': return 'bg-blue-500';
      case 'Livestock': return 'bg-purple-500';
      case 'Farm': return 'bg-green-500';
      case 'Feed': return 'bg-orange-500';
      case 'Facilities': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Farm Gallery</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Take a visual tour of our farm facilities, quality livestock, and the passion behind Kemi Globals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Photos" : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Farm Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Farm in Numbers</h2>
            <p className="text-lg text-gray-600">
              A look at the scale and scope of our operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Birds Capacity</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">20</div>
              <div className="text-gray-600">Acres of Land</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Livestock</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Staff Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Visit Our Farm?</h2>
          <p className="text-xl text-green-100 mb-8">
            Schedule a visit to see our operations firsthand and meet our team of experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/2348123456789?text=Hi! I'd like to schedule a farm visit."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Farm Visit
              </button>
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
