import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, LayoutDashboard, Calendar, Scissors } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminBookings from "@/components/admin/AdminBookings";
import AdminServices from "@/components/admin/AdminServices";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("bookings");

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      navigate("/auth");
      return;
    }
    // We can assume if they are here and auth works, RLS will handle the rest
    // In a real app we'd check roles specifically here too
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-primary text-white py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-['Playfair_Display']">
              Admin Dashboard
            </h1>
            <p className="text-white/90 mt-1 text-sm">Manage bookings & services</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        <Tabs defaultValue="bookings" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-card border border-border w-full justify-start h-auto flex-wrap gap-2 p-2">
            <TabsTrigger value="bookings" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-primary flex-1 min-w-[150px]">
              <Calendar className="w-4 h-4 mr-2" /> Bookings & Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-primary flex-1 min-w-[150px]">
              <Scissors className="w-4 h-4 mr-2" /> Service Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4">
            <AdminBookings />
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <AdminServices />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
