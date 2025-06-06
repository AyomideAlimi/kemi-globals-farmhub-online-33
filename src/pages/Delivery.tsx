
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, Shield, MapPin, Phone, CreditCard } from "lucide-react";

const Delivery = () => {
  const deliveryZones = [
    {
      zone: "Lagos State",
      timeframe: "Same Day - 1 Day",
      cost: "₦2,000 - ₦5,000",
      coverage: ["Lagos Island", "Lagos Mainland", "Ikorodu", "Epe", "Badagry"]
    },
    {
      zone: "South West (Ogun, Oyo, Osun, Ekiti, Ondo)",
      timeframe: "1-2 Days",
      cost: "₦5,000 - ₦8,000",
      coverage: ["All major cities and towns in the region"]
    },
    {
      zone: "South East (Anambra, Imo, Abia, Enugu, Ebonyi)",
      timeframe: "2-3 Days", 
      cost: "₦8,000 - ₦12,000",
      coverage: ["Onitsha", "Owerri", "Enugu", "Aba", "Umuahia", "Abakaliki"]
    },
    {
      zone: "South South (Rivers, Delta, Cross River, Akwa Ibom, Bayelsa, Edo)",
      timeframe: "2-4 Days",
      cost: "₦10,000 - ₦15,000", 
      coverage: ["Port Harcourt", "Warri", "Calabar", "Uyo", "Benin City"]
    },
    {
      zone: "North Central (FCT, Plateau, Niger, Kwara, Kogi, Benue, Nasarawa)",
      timeframe: "2-3 Days",
      cost: "₦8,000 - ₦12,000",
      coverage: ["Abuja", "Jos", "Ilorin", "Lokoja", "Makurdi", "Lafia"]
    },
    {
      zone: "North West (Kaduna, Kano, Katsina, Kebbi, Sokoto, Zamfara, Jigawa)",
      timeframe: "3-5 Days",
      cost: "₦12,000 - ₦18,000",
      coverage: ["Kaduna", "Kano", "Katsina", "Sokoto", "Gusau", "Dutse"]
    },
    {
      zone: "North East (Borno, Yobe, Bauchi, Gombe, Taraba, Adamawa)",
      timeframe: "4-6 Days",
      cost: "₦15,000 - ₦20,000",
      coverage: ["Maiduguri", "Damaturu", "Bauchi", "Gombe", "Jalingo", "Yola"]
    }
  ];

  const paymentMethods = [
    {
      method: "Bank Transfer",
      description: "Direct transfer to our company account",
      processing: "Instant verification",
      icon: CreditCard
    },
    {
      method: "Mobile Money",
      description: "Opay, PalmPay, Kuda, etc.",
      processing: "Instant verification",
      icon: Phone
    },
    {
      method: "Cash on Delivery",
      description: "Available for Lagos State only",
      processing: "Payment on delivery",
      icon: Truck
    },
    {
      method: "Cryptocurrency",
      description: "Bitcoin, USDT accepted",
      processing: "1-2 confirmations",
      icon: Shield
    }
  ];

  const deliveryFeatures = [
    {
      icon: Shield,
      title: "Safe Transportation",
      description: "Specialized vehicles with proper ventilation and security for livestock"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "SMS and WhatsApp updates throughout the delivery journey"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Dedicated customer service team available round the clock"
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "We deliver to all 36 states and FCT with reliable logistics partners"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Delivery & Payment Information</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Fast, reliable delivery across Nigeria with flexible payment options for your convenience.
          </p>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Delivery Service?</h2>
            <p className="text-lg text-gray-600">
              Professional, secure, and reliable delivery service designed specifically for livestock and feed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery Zones & Pricing</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing based on delivery zones across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{zone.zone}</h3>
                    <Badge className="bg-green-100 text-green-800">
                      {zone.timeframe}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Delivery Cost:</p>
                    <p className="text-lg font-semibold text-green-600">{zone.cost}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Coverage Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.coverage.map((area, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Delivery costs vary based on order size and exact location</li>
              <li>• Bulk orders may qualify for discounted or free delivery</li>
              <li>• Remote areas may incur additional charges</li>
              <li>• Delivery times may be extended during peak seasons or weather challenges</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Methods</h2>
            <p className="text-lg text-gray-600">
              Multiple secure payment options for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((payment, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <payment.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{payment.method}</h3>
                  <p className="text-gray-600 text-sm mb-3">{payment.description}</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    {payment.processing}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Delivery Process</h2>
            <p className="text-lg text-gray-600">
              Simple, transparent process from order to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Place Order</h3>
              <p className="text-gray-600 text-sm">
                Contact us via WhatsApp, phone, or website to place your order
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Confirm Payment</h3>
              <p className="text-gray-600 text-sm">
                Make payment via your preferred method and get confirmation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Prepare & Ship</h3>
              <p className="text-gray-600 text-sm">
                We prepare your order with care and ship via our trusted logistics
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Receive Order</h3>
              <p className="text-gray-600 text-sm">
                Receive your healthy livestock or quality feed at your location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Terms & Conditions</h2>
            
            <div className="space-y-6 text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Processing:</h4>
                <p>Orders are processed within 24 hours of payment confirmation. Livestock orders may require additional preparation time.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Delivery Scheduling:</h4>
                <p>We schedule deliveries based on optimal timing for animal welfare. Morning deliveries are preferred for livestock to ensure better adaptation.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Inspection Policy:</h4>
                <p>Customers have the right to inspect animals upon delivery. Any concerns must be reported within 2 hours of delivery for immediate resolution.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Weather Delays:</h4>
                <p>Delivery may be delayed due to adverse weather conditions to ensure animal safety. Customers will be notified in advance of any delays.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cancellation Policy:</h4>
                <p>Orders can be cancelled within 12 hours of placement. Livestock orders confirmed for transport cannot be cancelled without charges.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Place Your Order?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for fast, reliable delivery of quality livestock and feed to your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Order via WhatsApp
              </button>
            </a>
            <a href="tel:+2348123456789">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call to Order
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Delivery;
