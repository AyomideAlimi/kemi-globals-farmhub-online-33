
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

const Shop = () => {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [cartTotal, setCartTotal] = useState(0);

  const products = [
    {
      id: 1,
      name: "Broiler Chickens",
      price: 1500,
      category: "Poultry",
      description: "Day-old broiler chicks",
      unit: "per piece",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 2,
      name: "Layer Birds",
      price: 2500,
      category: "Poultry", 
      description: "Point of lay pullets",
      unit: "per piece",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 3,
      name: "Starter Feed",
      price: 8500,
      category: "Feed",
      description: "High protein starter feed for chicks",
      unit: "per 25kg bag",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 4,
      name: "Layers Mash",
      price: 7500,
      category: "Feed",
      description: "Calcium-rich feed for laying hens",
      unit: "per 25kg bag",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 5,
      name: "Goats",
      price: 45000,
      category: "Livestock",
      description: "Healthy West African Dwarf goats",
      unit: "per animal",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 6,
      name: "Rams",
      price: 85000,
      category: "Livestock",
      description: "Quality breeding rams",
      unit: "per animal",
      image: "/placeholder.svg",
      inStock: false
    }
  ];

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
    setCartTotal(prev => prev + product.price);
    toast.success(`Added ${product.name} to cart`);
  };

  const removeFromCart = (product: typeof products[0]) => {
    if (cart[product.id] > 0) {
      setCart(prev => ({
        ...prev,
        [product.id]: prev[product.id] - 1
      }));
      setCartTotal(prev => prev - product.price);
      toast.success(`Removed ${product.name} from cart`);
    }
  };

  const getCartQuantity = (productId: number) => cart[productId] || 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Online Shop</h1>
              <p className="text-xl text-green-100">
                Order quality livestock and feed with convenient delivery options.
              </p>
            </div>
            <div className="bg-white text-green-800 rounded-lg p-4 text-center">
              <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Cart Total</p>
              <p className="text-2xl font-bold">{formatPrice(cartTotal)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      product.category === 'Poultry' ? 'bg-blue-500' :
                      product.category === 'Feed' ? 'bg-orange-500' : 'bg-purple-500'
                    }`}
                  >
                    {product.category}
                  </Badge>
                  {!product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-red-500">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-gray-500 block">{product.unit}</span>
                    </div>
                  </div>

                  {product.inStock ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(product)}
                          disabled={getCartQuantity(product.id) === 0}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">
                          {getCartQuantity(product.id)}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addToCart(product)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button 
                        onClick={() => addToCart(product)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  ) : (
                    <Button disabled className="w-full">
                      Out of Stock
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {cartTotal > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {Object.entries(cart).map(([productId, quantity]) => {
                  if (quantity === 0) return null;
                  const product = products.find(p => p.id === parseInt(productId));
                  if (!product) return null;
                  return (
                    <div key={productId} className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold">{product.name}</span>
                        <span className="text-gray-600 ml-2">x {quantity}</span>
                      </div>
                      <span className="font-semibold">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-green-600">{formatPrice(cartTotal)}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/2348051272003?text=Hello! I'd like to place an order for: ${Object.entries(cart).map(([productId, quantity]) => {
                    if (quantity === 0) return '';
                    const product = products.find(p => p.id === parseInt(productId));
                    return product ? `${product.name} x ${quantity}` : '';
                  }).filter(Boolean).join(', ')}. Total: ${formatPrice(cartTotal)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    Order via WhatsApp
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  className="flex-1 text-lg py-3"
                  onClick={() => {
                    setCart({});
                    setCartTotal(0);
                    toast.success("Cart cleared");
                  }}
                >
                  Clear Cart
                </Button>
              </div>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
