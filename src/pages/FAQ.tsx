
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What types of animals does Kemi Globals sell?",
          answer: "We specialize in poultry (broilers, layers, noilers), livestock (goats, cows, rams, turkeys, ducks, rabbits), and provide various types of animal feed including starter, grower, finisher, and layers mash."
        },
        {
          question: "Do you deliver nationwide?",
          answer: "Yes, we deliver to all 36 states in Nigeria and the FCT. Delivery times vary by location, typically 2-5 business days for livestock and 1-3 days for feed."
        },
        {
          question: "How long has Kemi Globals been in business?",
          answer: "Kemi Globals was founded in 2020 and has been serving Nigerian farmers for over 4 years with quality livestock and feed products."
        },
        {
          question: "Are your animals vaccinated?",
          answer: "Yes, all our animals receive appropriate vaccinations and health checks before delivery. We provide health certificates with each animal purchased."
        }
      ]
    },
    {
      category: "Ordering & Payment",
      questions: [
        {
          question: "How can I place an order?",
          answer: "You can place orders through our website shop, WhatsApp (+234 812 345 6789), phone call, or email (info@kemiglobals.com). We accept multiple payment methods for your convenience."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, mobile money payments (Opay, PalmPay, etc.), cash on delivery (for local orders), and cryptocurrency payments. All transactions are secure and verified."
        },
        {
          question: "Can I get a discount for bulk orders?",
          answer: "Yes! We offer attractive discounts for bulk orders. Contact us directly to discuss pricing for orders of 50+ birds, 10+ bags of feed, or multiple livestock."
        },
        {
          question: "Do you require advance payment?",
          answer: "For livestock, we typically require 50% advance payment with balance on delivery. For feed orders, full payment is required before dispatch unless you're a registered customer with credit terms."
        }
      ]
    },
    {
      category: "Products & Quality",
      questions: [
        {
          question: "What's the difference between broilers, layers, and noilers?",
          answer: "Broilers are fast-growing meat birds (6-8 weeks to market), layers are specialized for egg production, and noilers are dual-purpose birds good for both meat and eggs with better hardiness."
        },
        {
          question: "How do I choose the right feed for my birds?",
          answer: "Use starter feed (0-8 weeks), grower feed (8-16 weeks), finisher feed (16+ weeks for meat birds), or layers mash (for laying hens). We provide feeding guides with every purchase."
        },
        {
          question: "Are your feeds locally made?",
          answer: "Yes, our feeds are manufactured locally using quality ingredients. We formulate our feeds specifically for Nigerian climate conditions and local bird breeds."
        },
        {
          question: "What's your return policy?",
          answer: "We accept returns within 24 hours for livestock with health issues. Feed can be returned if unopened within 7 days. All returns require prior approval and health documentation."
        }
      ]
    },
    {
      category: "Delivery & Logistics",
      questions: [
        {
          question: "How are animals transported?",
          answer: "We use specialized livestock transport vehicles with proper ventilation, spacing, and care. Birds are transported in appropriate crates, and larger animals in secure, comfortable compartments."
        },
        {
          question: "What are your delivery charges?",
          answer: "Delivery charges vary by location and order size. Local delivery (Lagos) starts from ₦2,000. Interstate delivery ranges from ₦5,000-₦15,000 depending on distance and cargo."
        },
        {
          question: "Can I schedule a specific delivery time?",
          answer: "Yes, we offer scheduled deliveries. Please arrange this during order placement. We recommend morning deliveries for livestock to reduce stress and ensure better adaptation."
        },
        {
          question: "Do you provide delivery tracking?",
          answer: "Yes, you'll receive tracking information via SMS and WhatsApp. Our drivers also provide regular updates during transit for livestock deliveries."
        }
      ]
    },
    {
      category: "Farm Support & Services",
      questions: [
        {
          question: "Do you provide farming consultation?",
          answer: "Yes, we offer farm setup consultation, management advice, and ongoing support. Our experienced team helps with farm design, feeding programs, and health management."
        },
        {
          question: "Can you help me start a poultry farm?",
          answer: "Absolutely! We provide complete startup packages including birds, feed, basic equipment guidance, and mentorship for new farmers. Contact us for a customized startup plan."
        },
        {
          question: "Do you offer training programs?",
          answer: "We conduct regular training sessions on poultry management, livestock care, and modern farming techniques. Check our blog or contact us for upcoming training schedules."
        },
        {
          question: "What ongoing support do you provide?",
          answer: "We offer 24/7 WhatsApp support, regular check-ins for large orders, health advice, feeding guidance, and market linkage support for your produce."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and farming guidance.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4+ Years</div>
              <div className="text-gray-600">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex; // Unique index
                  const isOpen = openItems.has(globalIndex);
                  
                  return (
                    <Card key={globalIndex} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900 pr-8">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                            )}
                          </div>
                          
                          {isOpen && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-green-100 mb-8">
            Our expert team is always ready to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                WhatsApp Us
              </button>
            </a>
            <a href="tel:+2348123456789">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Us Now
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
