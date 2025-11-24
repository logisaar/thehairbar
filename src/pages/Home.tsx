import { MapPin, Clock, Star, Instagram, Facebook, MessageCircle, Crown, Sparkles, Shield, Heart, Phone, Mail, ChevronDown, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import interior1 from "@/assets/salon-interior-1.jpg";
import interior2 from "@/assets/salon-interior-2.jpg";
import interior3 from "@/assets/salon-interior-3.jpg";
import interior4 from "@/assets/salon-interior-4.jpg";
import interior5 from "@/assets/salon-interior-5.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [heroSlide1, heroSlide2, heroSlide3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whyChooseUs = [
    {
      icon: Crown,
      title: "Women-Only Space",
      description: "Your private sanctuary of beauty and elegance",
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Premium products & world-class service",
    },
    {
      icon: Award,
      title: "Expert Stylists",
      description: "Certified professionals trained internationally",
    },
    {
      icon: Shield,
      title: "Hygiene First",
      description: "Sterilized tools, pristine environment",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Customized treatments for your unique needs",
    },
  ];

  const signatureServices = [
    {
      category: "Hair Services",
      services: [
        { name: "Luxury Hair Cut & Styling", price: "₹1,200", description: "Expert precision cuts with luxury styling" },
        { name: "Premium Hair Coloring", price: "₹3,500", description: "Balayage, Highlights, Ombre techniques" },
        { name: "Hair Spa & Deep Conditioning", price: "₹1,500", description: "Nourishing treatment for healthy hair" },
        { name: "Keratin Treatment", price: "₹5,000", description: "Smoothening & shine restoration" },
      ],
    },
    {
      category: "Bridal Services",
      services: [
        { name: "Bridal Makeup Artistry", price: "₹15,000", description: "Flawless bridal look perfection" },
        { name: "Pre-Bridal Packages", price: "₹25,000", description: "Complete transformation journey" },
        { name: "Bridal Hair Styling", price: "₹8,000", description: "Elegant bridal hairstyles" },
        { name: "Engagement Look", price: "₹10,000", description: "Stunning engagement makeup & styling" },
      ],
    },
    {
      category: "Skin & Glow",
      services: [
        { name: "Gold Facial", price: "₹3,500", description: "24K gold radiance treatment" },
        { name: "Diamond Facial", price: "₹4,500", description: "Ultimate luxury facial experience" },
        { name: "Skin Brightening", price: "₹2,500", description: "Advanced brightening treatment" },
        { name: "De-Tan & Clean-up", price: "₹1,200", description: "Instant glow and freshness" },
      ],
    },
    {
      category: "Beauty & Grooming",
      services: [
        { name: "Premium Manicure & Pedicure", price: "₹1,500", description: "Luxury hand & feet spa" },
        { name: "Nail Art & Extensions", price: "₹2,000", description: "Creative nail designs" },
        { name: "Threading & Waxing", price: "₹800", description: "Gentle hair removal services" },
        { name: "Eyelash Extensions", price: "₹2,500", description: "Voluminous lash perfection" },
      ],
    },
  ];

  const luxuryPackages = [
    {
      name: "Queen's Refresh",
      price: "₹4,999",
      originalPrice: "₹6,500",
      badge: "Quick Luxury",
      services: ["Haircut + Blow Dry", "Express Facial", "Manicure", "Threading"],
      popular: false,
    },
    {
      name: "Royal Glow",
      price: "₹9,999",
      originalPrice: "₹13,000",
      badge: "Most Popular",
      services: ["Hair Spa + Styling", "Luxury Facial", "Mani + Pedi Combo", "Threading", "Complimentary Beverage"],
      popular: true,
    },
    {
      name: "Empress Indulgence",
      price: "₹24,999",
      originalPrice: "₹32,000",
      badge: "Ultimate Luxury",
      services: ["Premium Hair Treatment", "Gold/Diamond Facial", "Luxury Mani-Pedi", "Full Body Waxing", "Head Massage", "Complimentary Champagne"],
      popular: false,
    },
  ];

  const galleryImages = [interior1, interior2, interior3, interior4, interior5];

  const experts = [
    {
      name: "Priya Sharma",
      title: "Senior Hair Stylist",
      specialization: "Bridal & Color Expert",
      experience: "12+ Years",
    },
    {
      name: "Anjali Verma",
      title: "Makeup Artist",
      specialization: "Bridal Makeup & HD Makeup",
      experience: "10+ Years",
    },
    {
      name: "Neha Patel",
      title: "Skin Specialist",
      specialization: "Facial & Skin Treatments",
      experience: "8+ Years",
    },
  ];

  const testimonials = [
    {
      name: "Riya M.",
      text: "The most luxurious salon experience I've ever had! The women-only environment made me feel so comfortable and pampered.",
      rating: 5,
      service: "Bridal Makeup",
    },
    {
      name: "Sakshi K.",
      text: "Absolutely love The Hair Bar! The gold facial was divine and my skin has never looked better. True luxury!",
      rating: 5,
      service: "Gold Facial",
    },
    {
      name: "Meera D.",
      text: "Finally found my go-to salon! The staff is incredibly professional and the ambiance is pure elegance.",
      rating: 5,
      service: "Hair Spa",
    },
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate("/booking");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`The Hair Bar - Luxury Women's Salon ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img src={logo} alt="The Hair Bar Logo" className="w-32 h-32 mx-auto mb-6 rounded-full shadow-gold-glow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-['Playfair_Display'] animate-slide-up">
            <span className="luxury-text">The Hair Bar</span>
          </h1>
          <p className="text-2xl md:text-3xl text-accent mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Luxury Redefined for the Modern Woman
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Where Every Woman Finds Her Crown
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300 text-lg px-8 py-6"
            >
              <Crown className="w-5 h-5 mr-2" />
              Book Your Throne
            </Button>
            <Button
              onClick={() => navigate("/services")}
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>
          <div className="absolute bottom-8 animate-float">
            <ChevronDown className="w-8 h-8 text-accent" />
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 font-['Playfair_Display']">
            Welcome to Your Personal <span className="luxury-text">Beauty Sanctuary</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Step into an exclusive women-only space where luxury meets expertise. At The Hair Bar, we're building India's most loved women's beauty destination, inspired by the excellence of leading brands.
          </p>
          <p className="text-lg text-accent font-medium">
            International Standards • Premium Products • Expert Care
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-['Playfair_Display']">
          Why <span className="luxury-text">The Hair Bar</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-gold-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-gold mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-['Playfair_Display']">
          Our <span className="luxury-text">Signature Services</span>
        </h2>
        <div className="space-y-12">
          {signatureServices.map((category, catIndex) => (
            <div key={catIndex} className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-accent border-b border-accent pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-gold-glow cursor-pointer group"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">
                          {service.name}
                        </h4>
                        <span className="text-accent font-bold text-lg">{service.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Button
                        onClick={scrollToBooking}
                        variant="outline"
                        size="sm"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury Packages */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-gradient-primary">
        <h2 className="text-4xl font-bold text-center mb-4 font-['Playfair_Display']">
          <span className="luxury-text">Luxury Packages</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Indulge in our curated luxury experiences</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {luxuryPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-accent shadow-gold-glow scale-105"
                  : "border border-border hover:border-accent hover:shadow-gold-glow"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-gold text-primary px-4 py-1 text-sm font-bold">
                  {pkg.badge}
                </div>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 font-['Playfair_Display']">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-muted-foreground line-through text-lg">{pkg.originalPrice}</span>
                  <div className="text-4xl font-bold text-accent">{pkg.price}</div>
                  <span className="text-sm text-accent">Save {Math.round(((parseInt(pkg.originalPrice.replace(/[^0-9]/g, "")) - parseInt(pkg.price.replace(/[^0-9]/g, ""))) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, ""))) * 100)}%</span>
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.services.map((service, i) => (
                    <div key={i} className="flex items-center text-left">
                      <Sparkles className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={scrollToBooking}
                  className="w-full bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300"
                >
                  Reserve Your Throne
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 font-['Playfair_Display']">
          The <span className="luxury-text">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Step into luxury</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Salon Interior ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            onClick={() => window.open("https://www.instagram.com/the.hairbar___?igsh=ODZxaW9kaDYycWJn", "_blank")}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-primary"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us on Instagram
          </Button>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Playfair_Display']">
            Reserve Your <span className="luxury-text">Throne</span>
          </h2>
          <p className="text-muted-foreground text-lg">Book your luxury experience in seconds</p>
        </div>
        <Card className="bg-card border-2 border-accent shadow-gold-glow">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-6">
                Experience the ultimate in luxury and elegance. Our booking system makes it easy to secure your appointment.
              </p>
              <Button
                onClick={() => navigate("/booking")}
                size="lg"
                className="bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300 px-12 py-6 text-lg"
              >
                <Crown className="w-5 h-5 mr-2" />
                Continue to Booking
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quick Book via WhatsApp
              </Button>
              <Button
                onClick={() => window.open("tel:+911234567890")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Book
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Meet Our Experts */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 font-['Playfair_Display']">
          Meet Our <span className="luxury-text">Master Artisans</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Crafted by experts, perfected for you</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-gold-glow text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
                <p className="text-accent font-medium mb-2">{expert.title}</p>
                <p className="text-sm text-muted-foreground mb-2">{expert.specialization}</p>
                <p className="text-sm text-accent">{expert.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 font-['Playfair_Display']">
          What Our <span className="luxury-text">Queens</span> Say
        </h2>
        <p className="text-center text-muted-foreground mb-12">4.9/5.0 from 500+ Happy Clients</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-accent">- {testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-['Playfair_Display']">
          Visit Our <span className="luxury-text">Sanctuary</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Location</h3>
                  <p className="text-muted-foreground">
                    Bhubaneswar, Chandak, Odisha
                  </p>
                  <Button
                    variant="link"
                    className="text-accent p-0 h-auto mt-2"
                    onClick={() => window.open("https://maps.google.com", "_blank")}
                  >
                    Get Directions →
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Opening Hours</h3>
                  <p className="text-muted-foreground">Monday - Sunday</p>
                  <p className="text-muted-foreground">10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Phone</h3>
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-accent transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Email</h3>
                  <a href="mailto:contact@thehairbar.com" className="text-muted-foreground hover:text-accent transition-colors">
                    contact@thehairbar.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-lg overflow-hidden h-[400px] bg-card border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8634634!2d85.8314!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknNTMuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Social Media & Footer */}
      <footer className="bg-gradient-primary py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 font-['Playfair_Display']">
              Stay <span className="luxury-text">Connected</span>
            </h3>
            <p className="text-muted-foreground mb-6">Follow us for beauty tips, offers, and inspiration</p>
            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={() => window.open("https://www.instagram.com/the.hairbar___?igsh=ODZxaW9kaDYycWJn", "_blank")}
                size="icon"
                className="rounded-full bg-card hover:bg-gradient-gold hover:shadow-gold-glow transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="rounded-full bg-card hover:bg-gradient-gold hover:shadow-gold-glow transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                size="icon"
                className="rounded-full bg-card hover:bg-gradient-gold hover:shadow-gold-glow transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                <li><a href="/services" className="text-muted-foreground hover:text-accent transition-colors">Services</a></li>
                <li><a href="/booking" className="text-muted-foreground hover:text-accent transition-colors">Booking</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent">Services</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Hair Services</li>
                <li className="text-muted-foreground">Bridal Packages</li>
                <li className="text-muted-foreground">Skin Care</li>
                <li className="text-muted-foreground">Beauty Treatments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent">Information</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Privacy Policy</li>
                <li className="text-muted-foreground">Terms & Conditions</li>
                <li className="text-muted-foreground">Refund Policy</li>
                <li className="text-muted-foreground">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">Join our exclusive community</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:border-accent"
                />
                <Button className="bg-gradient-gold text-primary hover:shadow-gold-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-2">
              © 2024 The Hair Bar. All Rights Reserved.
            </p>
            <p className="text-sm text-accent italic">
              Crafted with ♥ for Women
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
