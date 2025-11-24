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

  const categories = ["All", "Haircut", "Coloring", "Treatment", "Styling"];

  const services = [
    {
      name: "Classic Haircut",
      category: "Haircut",
      description: "Professional cut with style consultation",
      duration: "45 mins",
      price: "₹500",
      image: haircutService,
    },
    {
      name: "Premium Haircut",
      category: "Haircut",
      description: "Includes wash, cut, styling, and head massage",
      duration: "60 mins",
      price: "₹750",
      image: haircutService,
    },
    {
      name: "Kids Haircut",
      category: "Haircut",
      description: "Gentle haircut for children",
      duration: "30 mins",
      price: "₹350",
      image: haircutService,
    },
    {
      name: "Full Hair Color",
      category: "Coloring",
      description: "Complete hair color transformation",
      duration: "120 mins",
      price: "₹2,500",
      image: colorService,
    },
    {
      name: "Highlights",
      category: "Coloring",
      description: "Partial highlights for dimension",
      duration: "90 mins",
      price: "₹1,800",
      image: colorService,
    },
    {
      name: "Root Touch-Up",
      category: "Coloring",
      description: "Color roots only",
      duration: "45 mins",
      price: "₹1,200",
      image: colorService,
    },
    {
      name: "Hair Spa Deluxe",
      category: "Treatment",
      description: "Deep conditioning with scalp massage",
      duration: "60 mins",
      price: "₹1,200",
      image: spaService,
    },
    {
      name: "Keratin Treatment",
      category: "Treatment",
      description: "Smoothing and straightening treatment",
      duration: "180 mins",
      price: "₹4,500",
      image: spaService,
    },
    {
      name: "Hair Spa Express",
      category: "Treatment",
      description: "Quick rejuvenating hair treatment",
      duration: "30 mins",
      price: "₹800",
      image: spaService,
    },
    {
      name: "Blow Dry & Style",
      category: "Styling",
      description: "Professional blow dry with styling",
      duration: "30 mins",
      price: "₹400",
      image: haircutService,
    },
    {
      name: "Special Occasion Styling",
      category: "Styling",
      description: "Updo or elegant styling for events",
      duration: "60 mins",
      price: "₹1,000",
      image: haircutService,
    },
    {
      name: "Bridal Styling Package",
      category: "Styling",
      description: "Complete bridal hair and trial",
      duration: "180 mins",
      price: "₹5,000",
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
              className={`cursor-pointer whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
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
