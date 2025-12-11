import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full">
        <Card className="bg-card border-2 border-accent shadow-gold-glow animate-fade-in">
          <CardContent className="p-12 text-center">
            {/* Icon */}
            <div className="inline-flex p-6 rounded-full bg-gradient-gold mb-6 animate-scale-in">
              <Search className="w-16 h-16 text-primary" />
            </div>

            {/* Error Code */}
            <h1 className="text-8xl md:text-9xl font-bold mb-4 font-['Playfair_Display'] luxury-text animate-slide-up">
              404
            </h1>

            {/* Error Title */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-accent animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Page Not Found
            </h2>

            {/* Error Message */}
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              We couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex-1 h-px bg-gradient-gold"></div>
              <Sparkles className="w-5 h-5 text-accent" />
              <div className="flex-1 h-px bg-gradient-gold"></div>
            </div>

            {/* Suggestion Text */}
            <p className="text-sm text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Let us help you find what you're looking for
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </Button>

              <Button
                onClick={() => navigate("/services")}
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View Services
              </Button>
            </div>

            {/* Secondary Action */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button
                onClick={() => navigate("/booking")}
                variant="link"
                className="text-accent hover:text-accent/80 transition-colors group"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Footer Info */}
            <div className="mt-8 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <p className="text-sm text-muted-foreground">
                Need help? <a href="tel:+918984657071" className="text-accent hover:underline">Contact us</a> or visit our{" "}
                <span onClick={() => navigate("/about")} className="text-accent hover:underline cursor-pointer">About page</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

