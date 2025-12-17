import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import haircutService from "@/assets/haircut-service.jpg";
import colorService from "@/assets/color-service.jpg";
import spaService from "@/assets/spa-service.jpg";

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Hair Services", "Skin Care", "Facials & Others"];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("*")
          .order("created_at", { ascending: true });

        if (error) throw error;
        setServices(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

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
                  src={service.image_url || haircutService}
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
                      <span className="text-accent font-bold text-xl drop-shadow-sm">
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
