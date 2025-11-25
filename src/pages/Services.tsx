import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import haircutService from "@/assets/haircut-service.jpg";
import colorService from "@/assets/color-service.jpg";
import spaService from "@/assets/spa-service.jpg";

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hair Services", "Skin Care", "Facials & Others"];

  const services = [
    // Hair Cut & Grooming
    {
      name: "Hair Cut",
      category: "Hair Services",
      description: "Professional cut - Buzz cut, Crew cut, Mullet, Fade, Quiff, Flat top",
      duration: "30-45 mins",
      price: "₹150",
      image: haircutService,
    },
    {
      name: "Beard Lining",
      category: "Hair Services",
      description: "Precision beard shaping and lining",
      duration: "15 mins",
      price: "₹50",
      image: haircutService,
    },
    {
      name: "Beard Shaving",
      category: "Hair Services",
      description: "Clean professional shave",
      duration: "20 mins",
      price: "₹50",
      image: haircutService,
    },
    // Shampoo
    {
      name: "Normal Shampoo",
      category: "Hair Services",
      description: "Basic hair wash and conditioning",
      duration: "15 mins",
      price: "₹50",
      image: haircutService,
    },
    {
      name: "Premium Shampoo",
      category: "Hair Services",
      description: "Wella, L'Oreal, Raaga, GK brands",
      duration: "20 mins",
      price: "₹100",
      image: haircutService,
    },
    // Hair Colour
    {
      name: "Schwarzkopf Colour",
      category: "Hair Services",
      description: "Premium professional hair coloring",
      duration: "90 mins",
      price: "₹599",
      image: colorService,
    },
    {
      name: "L'Oreal Colour",
      category: "Hair Services",
      description: "Quality hair color treatment",
      duration: "90 mins",
      price: "₹499",
      image: colorService,
    },
    {
      name: "Garnier Colour",
      category: "Hair Services",
      description: "Vibrant color options",
      duration: "75 mins",
      price: "₹249",
      image: colorService,
    },
    {
      name: "Streax Colour",
      category: "Hair Services",
      description: "Professional hair coloring",
      duration: "75 mins",
      price: "₹200",
      image: colorService,
    },
    {
      name: "Vinegar Fruit Colour",
      category: "Hair Services",
      description: "Natural fruit-based color",
      duration: "60 mins",
      price: "₹149",
      image: colorService,
    },
    {
      name: "Highlight Colour",
      category: "Hair Services",
      description: "Add dimension with highlights",
      duration: "60 mins",
      price: "₹99",
      image: colorService,
    },
    // Hair Spa
    {
      name: "Anti Hair Fall Spa (Streax)",
      category: "Hair Services",
      description: "Strengthening treatment to reduce hair fall",
      duration: "60 mins",
      price: "Contact for pricing",
      image: spaService,
    },
    {
      name: "Anti Dandruff Spa",
      category: "Hair Services",
      description: "Specialized treatment for dandruff control",
      duration: "60 mins",
      price: "Contact for pricing",
      image: spaService,
    },
    {
      name: "Moisturizing Hair Spa",
      category: "Hair Services",
      description: "Deep hydration and nourishment",
      duration: "60 mins",
      price: "Contact for pricing",
      image: spaService,
    },
    {
      name: "Classic Hair Spa",
      category: "Hair Services",
      description: "L'Oreal, Streax, Schwarzkopf brands",
      duration: "60 mins",
      price: "Contact for pricing",
      image: spaService,
    },
    // Straightening
    {
      name: "Schwarzkopf Straightening",
      category: "Hair Services",
      description: "Premium straightening treatment",
      duration: "120-150 mins",
      price: "₹1,999",
      image: spaService,
    },
    {
      name: "L'Oreal X-Tenso Straightening",
      category: "Hair Services",
      description: "Professional smoothening system",
      duration: "120-150 mins",
      price: "₹1,499",
      image: spaService,
    },
    {
      name: "Streax Straightening",
      category: "Hair Services",
      description: "Quality straightening treatment",
      duration: "120 mins",
      price: "₹999",
      image: spaService,
    },
    // D-Tan
    {
      name: "O3+ D-Tan",
      category: "Skin Care",
      description: "Premium tan removal treatment",
      duration: "45 mins",
      price: "₹799",
      image: spaService,
    },
    {
      name: "Raaga D-Tan",
      category: "Skin Care",
      description: "Effective tan removal",
      duration: "40 mins",
      price: "₹499",
      image: spaService,
    },
    {
      name: "Nature's D-Tan",
      category: "Skin Care",
      description: "Natural tan removal treatment",
      duration: "40 mins",
      price: "₹399",
      image: spaService,
    },
    {
      name: "Ozone D-Tan",
      category: "Skin Care",
      description: "Gentle tan removal",
      duration: "35 mins",
      price: "₹299",
      image: spaService,
    },
    {
      name: "Lilium D-Tan",
      category: "Skin Care",
      description: "Refreshing tan removal",
      duration: "35 mins",
      price: "₹299",
      image: spaService,
    },
    // Scrub
    {
      name: "Lotus Scrub",
      category: "Skin Care",
      description: "Exfoliating facial scrub",
      duration: "20 mins",
      price: "₹299",
      image: spaService,
    },
    {
      name: "Nature's Scrub",
      category: "Skin Care",
      description: "Natural exfoliation treatment",
      duration: "20 mins",
      price: "₹199",
      image: spaService,
    },
    {
      name: "Raaga Scrub",
      category: "Skin Care",
      description: "Gentle skin exfoliation",
      duration: "20 mins",
      price: "₹199",
      image: spaService,
    },
    // Clean Up
    {
      name: "O3+ Clean Up",
      category: "Skin Care",
      description: "Premium facial clean up",
      duration: "45 mins",
      price: "₹799",
      image: spaService,
    },
    {
      name: "Raaga Clean Up",
      category: "Skin Care",
      description: "Deep cleansing facial",
      duration: "40 mins",
      price: "₹499",
      image: spaService,
    },
    {
      name: "Lotus Clean Up",
      category: "Skin Care",
      description: "Refreshing facial clean up",
      duration: "40 mins",
      price: "₹599",
      image: spaService,
    },
    {
      name: "Basic Clean Up",
      category: "Skin Care",
      description: "Essential facial cleansing",
      duration: "30 mins",
      price: "₹299",
      image: spaService,
    },
    // Facials
    {
      name: "O3+ Facial",
      category: "Facials & Others",
      description: "Luxury facial treatment",
      duration: "60 mins",
      price: "₹2,999",
      image: spaService,
    },
    {
      name: "Lotus Gold Shine Facial",
      category: "Facials & Others",
      description: "Gold-infused radiance facial",
      duration: "60 mins",
      price: "₹2,299",
      image: spaService,
    },
    {
      name: "Nature's Bridal Facial",
      category: "Facials & Others",
      description: "Special bridal glow treatment",
      duration: "75 mins",
      price: "₹1,999",
      image: spaService,
    },
    // Piercing
    {
      name: "Ear Piercing",
      category: "Facials & Others",
      description: "Professional ear piercing with stone",
      duration: "15 mins",
      price: "₹149",
      image: haircutService,
    },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 font-['Playfair_Display']">
            Our Services
          </h1>
          <p className="text-white/90">
            Professional salon services tailored for you
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                  ? "bg-gradient-primary text-white hover:opacity-90"
                  : "hover:border-primary"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          {filteredServices.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-28 h-28 object-cover"
                />
                <CardContent className="flex-1 p-4 pl-4">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-primary font-bold text-lg">
                        {service.price}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => navigate("/booking")}
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
