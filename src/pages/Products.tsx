
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const chickenTypes = [
    {
      name: "Broiler Chickens",
      description: "Fast-growing meat birds ready for market in 6-8 weeks",
      price: "From ₦1,500",
      image: "/placeholder.svg"
    },
    {
      name: "Layer Birds",
      description: "High-producing egg layers with excellent egg quality",
      price: "From ₦2,500", 
      image: "/placeholder.svg"
    },
    {
      name: "Noiler Chickens",
      description: "Dual-purpose birds good for both meat and eggs",
      price: "From ₦2,000",
      image: "/placeholder.svg"
    },
    {
      name: "Local Breeds",
      description: "Hardy indigenous chickens adapted to local conditions",
      price: "From ₦3,000",
      image: "/placeholder.svg"
    }
  ];

  const feedTypes = [
    {
      name: "Starter Feed",
      description: "Nutrient-rich feed for chicks 0-8 weeks old",
      price: "₦8,500 per 25kg",
      image: "/placeholder.svg"
    },
    {
      name: "Grower Feed",
      description: "Balanced nutrition for growing birds 8-16 weeks",
      price: "₦8,000 per 25kg",
      image: "/placeholder.svg"
    },
    {
      name: "Finisher Feed",
      description: "High-energy feed for final growth phase",
      price: "₦7,800 per 25kg",
      image: "/placeholder.svg"
    },
    {
      name: "Layers Mash",
      description: "Calcium-rich feed for optimal egg production",
      price: "₦7,500 per 25kg",
      image: "/placeholder.svg"
    }
  ];

  const livestock = [
    {
      name: "Goats",
      description: "Healthy goats of various breeds for meat and milk",
      price: "From ₦45,000",
      image: "/placeholder.svg"
    },
    {
      name: "Cows",
      description: "Quality cattle for dairy and beef production",
      price: "From ₦350,000",
      image: "/placeholder.svg"
    },
    {
      name: "Rams",
      description: "Strong breeding rams and market-ready sheep",
      price: "From ₦85,000",
      image: "/placeholder.svg"
    },
    {
      name: "Turkeys",
      description: "Large, fast-growing turkeys for special occasions",
      price: "From ₦8,500",
      image: "/placeholder.svg"
    },
    {
      name: "Ducks",
      description: "Productive ducks for meat and egg production",
      price: "From ₦3,500",
      image: "/placeholder.svg"
    },
    {
      name: "Rabbits",
      description: "Fast-reproducing rabbits for meat production",
      price: "From ₦4,500",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our comprehensive range of premium livestock, nutritious feed, and quality poultry for your farming success.
          </p>
        </div>
      </section>

      {/* Chicken Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Poultry</h2>
            <p className="text-lg text-gray-600">
              Premium chicken breeds for meat and egg production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chickenTypes.map((chicken, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={chicken.image} alt={chicken.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{chicken.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{chicken.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">{chicken.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Animal Feed</h2>
            <p className="text-lg text-gray-600">
              Nutritionally balanced feed for optimal growth and production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {feedTypes.map((feed, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={feed.image} alt={feed.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feed.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{feed.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">{feed.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Livestock Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Livestock</h2>
            <p className="text-lg text-gray-600">
              Quality livestock for meat, milk, and breeding purposes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {livestock.map((animal, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
                  <p className="text-gray-600 mb-4">{animal.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">{animal.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us for bulk orders, custom feed formulations, and farm consultation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                WhatsApp Us
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
