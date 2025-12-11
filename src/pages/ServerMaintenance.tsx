import { Construction, Home, Clock, MessageCircle, Wrench, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServerMaintenance = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
            <div className="max-w-2xl w-full">
                <Card className="bg-card border-2 border-accent shadow-gold-glow animate-fade-in">
                    <CardContent className="p-12 text-center">
                        {/* Icon */}
                        <div className="inline-flex p-6 rounded-full bg-gradient-gold mb-6 animate-scale-in">
                            <Construction className="w-16 h-16 text-primary" />
                        </div>

                        {/* Maintenance Title */}
                        <h1 className="text-6xl md:text-7xl font-bold mb-4 font-['Playfair_Display'] luxury-text animate-slide-up">
                            Under Maintenance
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-accent animate-slide-up" style={{ animationDelay: "0.1s" }}>
                            We'll Be Back Soon
                        </h2>

                        {/* Maintenance Message */}
                        <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            We're currently performing scheduled maintenance to improve your experience.
                            Our team is working hard to bring you an even better service.
                        </p>

                        {/* Info Box */}
                        <div className="flex items-start gap-3 bg-secondary/50 border border-accent/30 rounded-lg p-4 mb-8 text-left animate-slide-up" style={{ animationDelay: "0.3s" }}>
                            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold text-accent mb-1">Estimated Downtime</p>
                                <p className="text-sm text-muted-foreground">
                                    We expect to be back online shortly. Thank you for your patience.
                                </p>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                            <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
                                <Wrench className="w-5 h-5 text-accent flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-sm font-semibold text-foreground">System Upgrade</p>
                                    <p className="text-xs text-muted-foreground">Enhancing performance</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
                                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-sm font-semibold text-foreground">Quick Return</p>
                                    <p className="text-xs text-muted-foreground">Back very soon</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                            <Button
                                onClick={() => window.location.reload()}
                                size="lg"
                                className="bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Refresh Page
                            </Button>

                            <Button
                                onClick={() => window.open("https://wa.me/918984657071", "_blank")}
                                size="lg"
                                variant="outline"
                                className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Contact Us
                            </Button>
                        </div>

                        {/* Footer Info */}
                        <div className="mt-8 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
                            <p className="text-sm text-muted-foreground mb-2">
                                Need immediate assistance?
                            </p>
                            <p className="text-sm text-accent">
                                Call us at <a href="tel:+918984657071" className="hover:underline font-semibold">+91 89846 57071</a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ServerMaintenance;
