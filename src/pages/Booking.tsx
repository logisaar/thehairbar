import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const services = [
    "Classic Haircut - ₹500",
    "Premium Haircut - ₹750",
    "Full Hair Color - ₹2,500",
    "Highlights - ₹1,800",
    "Hair Spa Deluxe - ₹1,200",
    "Keratin Treatment - ₹4,500",
    "Blow Dry & Style - ₹400",
    "Special Occasion Styling - ₹1,000",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedService || !selectedTime || !selectedTable || !name || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setShowPayment(true);
  };

  const handlePayment = async () => {
    // Simulate successful payment
    setIsSubmitted(true);
    setShowPayment(false);
    toast.success("Payment successful! Booking confirmed.");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md w-full shadow-elevated animate-scale-in">
          <CardContent className="pt-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2 font-['Playfair_Display']">
              Booking Confirmed!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you, {name}! Your booking has been confirmed for{" "}
              {date?.toLocaleDateString()} at {selectedTime} (Table {selectedTable}).
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              We look forward to seeing you at The Hair Bar!
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300"
            >
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 font-['Playfair_Display']">
            Book Appointment
          </h1>
          <p className="text-white/90">
            Choose your preferred service and time
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <Card className="shadow-soft animate-slide-up">
            <CardHeader>
              <CardTitle className="text-lg">Select Service</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Date Selection */}
          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="text-lg">Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Table Selection */}
          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-lg">Select Table</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {tables.map((table) => (
                  <Button
                    key={table}
                    type="button"
                    variant={selectedTable === table.toString() ? "default" : "outline"}
                    className={
                      selectedTable === table.toString()
                        ? "bg-gradient-gold text-primary hover:opacity-90"
                        : "border-accent text-accent hover:bg-accent hover:text-primary"
                    }
                    onClick={() => setSelectedTable(table.toString())}
                  >
                    {table}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Selection */}
          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="text-lg">Select Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant={selectedTime === time ? "default" : "outline"}
                    className={
                      selectedTime === time
                        ? "bg-gradient-gold text-primary hover:opacity-90"
                        : "border-accent text-accent hover:bg-accent hover:text-primary"
                    }
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="text-lg">Your Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full bg-gradient-gold text-primary hover:shadow-gold-glow transition-all duration-300 py-6 text-lg font-semibold"
          >
            Proceed to Payment
          </Button>
        </form>

        {/* Demo Payment Dialog */}
        {showPayment && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <Card className="max-w-md w-full">
              <CardHeader>
                <CardTitle>Demo Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Service: <span className="font-medium text-foreground">{selectedService}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Date: <span className="font-medium text-foreground">{date?.toLocaleDateString()}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Time: <span className="font-medium text-foreground">{selectedTime}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Table: <span className="font-medium text-foreground">{selectedTable}</span>
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-4">
                    This is a demo payment. No real transaction will be processed.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setShowPayment(false)}
                      variant="outline"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-primary"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handlePayment}
                      className="flex-1 bg-gradient-gold text-primary hover:shadow-gold-glow"
                    >
                      Pay Now (Demo)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
