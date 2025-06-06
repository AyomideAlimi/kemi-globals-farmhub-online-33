
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">KG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kemi Globals</h3>
                <p className="text-green-200 text-sm">Quality Livestock & Feed</p>
              </div>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Your trusted partner for quality livestock, poultry, and animal feed. 
              We provide premium products to help your farming business thrive.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+2348123456789" className="flex items-center text-green-200 hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +234 812 345 6789
              </a>
              <a href="mailto:info@kemiglobals.com" className="flex items-center text-green-200 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                info@kemiglobals.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-green-200 hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-green-200 hover:text-white">Products</Link></li>
              <li><Link to="/shop" className="text-green-200 hover:text-white">Shop</Link></li>
              <li><Link to="/blog" className="text-green-200 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-green-200">Broiler Chickens</li>
              <li className="text-green-200">Layer Birds</li>
              <li className="text-green-200">Animal Feed</li>
              <li className="text-green-200">Livestock</li>
              <li className="text-green-200">Farm Consultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Kemi Globals. All rights reserved. Built with care for Nigerian farmers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
