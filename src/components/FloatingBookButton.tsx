import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FloatingBookButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/booking")}
      className="fixed bottom-24 right-4 z-40 h-14 w-14 rounded-full bg-gradient-primary shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-110 animate-float"
      size="icon"
    >
      <Calendar className="w-6 h-6" />
    </Button>
  );
};

export default FloatingBookButton;
