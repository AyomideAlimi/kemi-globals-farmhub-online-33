
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "10 Essential Tips for Starting Your Poultry Farm",
      excerpt: "Learn the fundamental steps to establish a successful poultry farming business in Nigeria.",
      category: "Poultry",
      date: "2024-03-15",
      readTime: "5 min",
      image: "/placeholder.svg",
      content: "Starting a poultry farm requires careful planning and preparation..."
    },
    {
      id: 2,
      title: "Choosing the Right Feed for Your Chickens",
      excerpt: "Understand the nutritional needs of chickens at different growth stages.",
      category: "Feed",
      date: "2024-03-10",
      readTime: "7 min",
      image: "/placeholder.svg",
      content: "Proper nutrition is crucial for healthy chicken development..."
    },
    {
      id: 3,
      title: "Goat Farming: A Profitable Livestock Venture",
      excerpt: "Discover why goat farming is becoming increasingly popular among Nigerian farmers.",
      category: "Livestock",
      date: "2024-03-08",
      readTime: "6 min",
      image: "/placeholder.svg",
      content: "Goat farming offers excellent returns on investment..."
    },
    {
      id: 4,
      title: "Disease Prevention in Poultry: Best Practices",
      excerpt: "Learn how to protect your flock from common diseases and maintain healthy birds.",
      category: "Health",
      date: "2024-03-05",
      readTime: "8 min",
      image: "/placeholder.svg",
      content: "Prevention is better than cure when it comes to poultry health..."
    },
    {
      id: 5,
      title: "Maximizing Egg Production in Layer Birds",
      excerpt: "Tips and strategies to increase egg production and quality in your layer farm.",
      category: "Poultry",
      date: "2024-03-01",
      readTime: "6 min",
      image: "/placeholder.svg",
      content: "Layer management requires attention to multiple factors..."
    },
    {
      id: 6,
      title: "The Economics of Cattle Farming in Nigeria",
      excerpt: "Understanding the costs, challenges, and opportunities in cattle farming.",
      category: "Livestock",
      date: "2024-02-28",
      readTime: "10 min",
      image: "/placeholder.svg",
      content: "Cattle farming remains one of the most lucrative agricultural ventures..."
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Poultry': return 'bg-blue-500';
      case 'Feed': return 'bg-orange-500';
      case 'Livestock': return 'bg-purple-500';
      case 'Health': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Farming Blog & Tips</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Expert advice, practical tips, and industry insights to help you succeed in livestock and poultry farming.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={getCategoryColor(articles[0].category)}>
                      {articles[0].category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(articles[0].date)}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {articles[0].readTime} read
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {articles[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {articles[0].excerpt}
                  </p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold self-start transition-colors">
                    Read Full Article
                  </button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime} read
                    </div>
                  </div>
                  
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors self-start">
                    Read More
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Farming Tips</h2>
          <p className="text-xl text-green-100 mb-8">
            Subscribe to our newsletter for weekly farming advice, market updates, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
