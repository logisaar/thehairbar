import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate("/auth");
                return;
            }
            setUser(session.user);
            setLoading(false);
        };

        getUser();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        toast.success("Logged out successfully");
        navigate("/");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 animate-fade-in bg-background">
            <div className="max-w-3xl mx-auto">
                <Card className="shadow-2xl border-2 border-accent/20 overflow-hidden relative">
                    <div className="absolute top-0 w-full h-32 bg-gradient-primary"></div>

                    <CardHeader className="text-center pt-16 relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="p-1 rounded-full bg-gradient-gold shadow-gold-glow">
                                <Avatar className="h-32 w-32 border-4 border-background">
                                    <AvatarImage src={user?.user_metadata?.avatar_url} className="object-cover" />
                                    <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-['Playfair_Display']">
                                        {user?.email?.[0]?.toUpperCase() || <User className="h-12 w-12" />}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <CardTitle className="text-4xl font-['Playfair_Display'] text-accent mb-2">
                            {user?.user_metadata?.full_name || "Valued Member"}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                            {user?.email}
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-8 p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Membership Details</h3>
                                <div className="bg-secondary/50 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                                    <p className="text-xs text-muted-foreground mb-1">Member Since</p>
                                    <p className="text-foreground font-medium font-['Playfair_Display'] text-lg">
                                        {new Date(user?.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Account Status</h3>
                                <div className="bg-secondary/50 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                                    <p className="text-xs text-muted-foreground mb-1">Last Visit</p>
                                    <p className="text-foreground font-medium font-['Playfair_Display'] text-lg">
                                        {new Date(user?.last_sign_in_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border">
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                className="w-full border-destructive/50 text-destructive hover:bg-destructive hover:text-white transition-all duration-300 py-6 text-lg"
                            >
                                <LogOut className="w-5 h-5 mr-3" />
                                Sign Out of Your Account
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
