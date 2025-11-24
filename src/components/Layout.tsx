import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Scissors, Calendar, Info, LogIn, LogOut, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/logo-new.jpg";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminRole(session.user.id);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string) => {
    // TODO: Implement admin check when user_roles table is created
    setIsAdmin(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
  };

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/services", icon: Scissors, label: "Services" },
    { path: "/booking", icon: Calendar, label: "Booking" },
    { path: "/about", icon: Info, label: "About" },
  ];

  // Don't show navigation on auth page or admin page
  if (location.pathname === "/auth" || location.pathname === "/admin") {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Top Bar with Logo and Auth */}
      <div className="bg-background border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="The Hair Bar" className="h-16 object-contain" />
          </Link>
          <div className="flex items-center gap-2">
            {user && isAdmin && (
              <Button asChild variant="outline" size="sm" className="gap-2 border-accent text-accent hover:bg-accent hover:text-primary">
                <Link to="/admin">
                  <Shield className="w-4 h-4" />
                  Admin
                </Link>
              </Button>
            )}
            {user ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="gap-2 border-accent text-accent hover:bg-accent hover:text-primary"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm" className="gap-2 border-accent text-accent hover:bg-accent hover:text-primary">
                <Link to="/auth">
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <main className="animate-fade-in bg-gradient-subtle">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elevated z-50">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 transition-all duration-300",
                    isActive
                      ? "text-primary scale-110"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <Icon className={cn("w-5 h-5", isActive && "drop-shadow-glow")} />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
