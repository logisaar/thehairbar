import { useNavigate } from "react-router-dom";
import { ServerCrash, Home, RotateCcw, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServerError = () => {
    const navigate = useNavigate();

    const handleTryAgain = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
            <div className="max-w-2xl w-full">
                <Card className="bg-card border-2 border-accent shadow-gold-glow animate-fade-in">
                    <CardContent className="p-12 text-center">
                        {/* Icon */}
                        <div className="inline-flex p-6 rounded-full bg-gradient-gold mb-6 animate-scale-in">
                            <ServerCrash className="w-16 h-16 text-primary" />
                        </div>

                        {/* Error Code */}
                        <h1 className="text-8xl md:text-9xl font-bold mb-4 font-['Playfair_Display'] luxury-text animate-slide-up">
                            500
                        </h1>

                        {/* Error Title */}
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-accent animate-slide-up" style={{ animationDelay: "0.1s" }}>
                            Server Error
                        </h2>

                        {/* Error Message */}
                        <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            Oops! Something went wrong on our end. Our team has been notified and we're working to fix the issue.
                        </p>

                        {/* Alert Box */}
                        <div className="flex items-start gap-3 bg-secondary/50 border border-accent/30 rounded-lg p-4 mb-8 text-left animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                                If this problem persists, please contact our support team and we'll assist you right away.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
                            <Button
                                onClick={() => navigate("/")}
                                size="lg"
                                className="bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Return to Home
                            </Button>

                            <Button
                                onClick={handleTryAgain}
                                size="lg"
                                variant="outline"
                                className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                            >
                                <RotateCcw className="w-5 h-5 mr-2" />
                                Try Again
                            </Button>
                        </div>

                        {/* Contact Support */}
                        <div className="mt-8 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            <p className="text-sm text-muted-foreground mb-4">
                                Need immediate assistance?
                            </p>
                            <Button
                                onClick={() => window.open("https://wa.me/918984657071", "_blank")}
                                variant="outline"
                                className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Contact Support via WhatsApp
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ServerError;
