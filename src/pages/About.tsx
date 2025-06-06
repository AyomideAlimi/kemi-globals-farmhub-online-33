
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kemi Globals</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Empowering Nigerian farmers with premium livestock, quality feed, and expert agricultural solutions since 2020.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Kemi Globals began as a small family farm with a vision to provide 
                Nigerian farmers with access to quality livestock and nutritious feed. What started 
                as a local operation has grown into a trusted nationwide supplier.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, Mrs. Kemi Adebayo, saw the challenges facing local farmers - limited 
                access to quality breeding stock, expensive feed, and lack of technical support. 
                This inspired the creation of Kemi Globals, a company dedicated to bridging these gaps.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve hundreds of farms across Nigeria, providing not just products but 
                partnerships that help our customers build successful agricultural businesses.
              </p>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Our farm" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To empower Nigerian farmers with premium livestock, nutritious feed, and expert 
                  agricultural guidance that enables sustainable farming practices and profitable 
                  agricultural businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To be Nigeria's leading agricultural partner, transforming farming communities 
                  through quality products, innovative solutions, and unwavering commitment to 
                  farmer success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Numbers that tell our story of growth and farmer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">500+</div>
              <div className="text-gray-600">Happy Farmers</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">10,000+</div>
              <div className="text-gray-600">Animals Delivered</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-2">25+</div>
              <div className="text-gray-600">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at Kemi Globals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our livestock and feed, ensuring every 
                  product meets the highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Farmer Success</h3>
                <p className="text-gray-600">
                  Your success is our success. We're committed to providing products and support 
                  that help farmers thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously improve our breeding programs, feed formulations, and services 
                  to stay ahead of industry trends.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We promote environmentally responsible farming practices that protect our land 
                  for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honest business practices, transparent pricing, and reliable service form the 
                  foundation of our relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in building strong farming communities through knowledge sharing 
                  and mutual support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
