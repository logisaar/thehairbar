import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import founderImage from "@/assets/Founder.jpg";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const teamMembers = [
    {
      name: "Sumant Barik",
      role: "Lead Stylist",
      experience: "3 years experience",
      specialty: "Men's grooming & precision cuts",
    },
    {
      name: "Ajay Kumar Barik",
      role: "Senior Stylist",
      experience: "4 years experience",
      specialty: "Hair styling & treatments",
    },
    {
      name: "Rinku Tarashia",
      role: "Stylist",
      experience: "2 years experience",
      specialty: "Modern cuts & styling",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 font-['Playfair_Display']">
            About Us
          </h1>
          <p className="text-white/90">
            Where style meets precision
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Our Story */}
        <Card className="shadow-soft animate-slide-up">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2023, The Hair Bar has become Chandaka's premier destination for
              men's grooming and professional styling. Our journey began with a simple vision: to create
              a space where craftsmanship meets relaxation, and every client leaves feeling
              sharp and confident.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a team of experienced barbers and a commitment to using only the finest
              products, we've built a reputation for excellence in men's grooming. From everyday
              cuts to premium styling and treatments, we treat every appointment as an opportunity
              to exceed expectations.
            </p>
          </CardContent>
        </Card>

        {/* Meet the Founder */}
        <Card className="shadow-soft animate-slide-up overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="relative w-full h-80 sm:h-96 md:min-h-[500px] overflow-hidden">
                <img
                  src={founderImage}
                  alt="Founder of The Hair Bar"
                  className="w-full h-full object-cover object-center"
                  style={{
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.15) sepia(0.05)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-3 font-['Playfair_Display']">
                  Meet the Founder
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Hair Bar was founded by Tapan Kumar Nath with a vision to create a premium grooming destination
                  where every man feels confident, sharp, and empowered. With years of experience
                  in the grooming industry and a passion for excellence, our founder has built a
                  gentleman's retreat that combines modern style, expert craftsmanship, and personalized service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to using premium products, maintaining the highest hygiene standards,
                  and delivering exceptional grooming has made The Hair Bar a trusted name in men's style
                  and wellness.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4 font-['Playfair_Display']">
            Meet Our Team
          </h2>
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <Card className="shadow-soft animate-slide-up">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Visit Us
            </h2>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">
                  1st Floor, Akash Shopping Complex<br />
                  Chandaka, Bhubaneswar
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 89846 57071</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">thehairbar16@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Daily<br />
                  8:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map */}
        <Card className="shadow-soft overflow-hidden animate-slide-up">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.4926447891844!2d85.77891007516856!3d20.29582961207857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sThe%20Hair%20Bar!5e0!3m2!1sen!2sin!4v1732966429000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Hair Bar Location"
            />
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="shadow-soft animate-slide-up">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* WhatsApp Quick Contact */}
        <Card className="shadow-soft bg-gradient-primary text-white animate-slide-up">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Need Quick Help?</h3>
            <p className="text-white/90 text-sm mb-4">
              Chat with us on WhatsApp for instant booking and queries
            </p>
            <Button
              variant="outline"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open("https://wa.me/918984657071", "_blank")}
            >
              Chat on WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
