import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Check, X, Clock } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminBookings = () => {
    const [bookings, setBookings] = useState<any[]>([]);
    const [stats, setStats] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();

        // Subscribe to realtime changes
        const channel = supabase
            .channel('schema-db-changes')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'bookings'
                },
                (payload) => {
                    fetchBookings();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const fetchBookings = async () => {
        try {
            const { data, error } = await supabase
                .from("bookings")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setBookings(data || []);
            calculateStats(data || []);
        } catch (error) {
            console.error("Error fetching bookings:", error);
            toast.error("Failed to load bookings");
        } finally {
            setLoading(false);
        }
    };

    const calculateStats = (data: any[]) => {
        // Process data for charts
        const statusCounts = data.reduce((acc: any, curr: any) => {
            acc[curr.status] = (acc[curr.status] || 0) + 1;
            return acc;
        }, {});

        const chartData = [
            { name: 'Confirmed', value: statusCounts.confirmed || 0, color: '#10b981' }, // green
            { name: 'Pending', value: statusCounts.pending || 0, color: '#f59e0b' },   // amber
            { name: 'Cancelled', value: statusCounts.cancelled || 0, color: '#ef4444' }, // red
        ];
        setStats(chartData);
    }

    const handleStatusUpdate = async (id: string, status: string) => {
        try {
            const { error } = await supabase
                .from("bookings")
                .update({ status })
                .eq("id", id);

            if (error) throw error;
            toast.success(`Booking ${status}`);
            // Realtime subscription will handle refresh
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'confirmed': return <Badge className="bg-green-500">Confirmed</Badge>;
            case 'cancelled': return <Badge variant="destructive">Cancelled</Badge>;
            default: return <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-500">Pending</Badge>;
        }
    };

    return (
        <div className="space-y-8">
            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Booking Status Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats}>
                                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                                    cursor={{ fill: '#333', opacity: 0.2 }}
                                />
                                <Bar dataKey="value" fill="#D4AF37" radius={[4, 4, 0, 0]}>
                                    {stats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4 text-muted-foreground text-sm">
                            <p>Total Bookings: <span className="text-foreground font-bold text-lg">{bookings.length}</span></p>
                            <p>Pending Actions: <span className="text-yellow-500 font-bold text-lg">{bookings.filter(b => b.status === 'pending').length}</span></p>
                            <div className="bg-muted/20 p-4 rounded-lg border border-dashed border-border">
                                The graph on the left updates in real-time as you manage bookings below.
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold font-['Playfair_Display']">Recent Bookings</h2>
                <div className="rounded-md border bg-card overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Service</TableHead>
                                <TableHead>Date & Time</TableHead>
                                <TableHead>Table</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bookings.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                                        No bookings yet.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                bookings.map((booking) => (
                                    <TableRow key={booking.id}>
                                        <TableCell>
                                            <div className="font-medium">{booking.customer_name}</div>
                                            <div className="text-xs text-muted-foreground">{booking.customer_phone}</div>
                                        </TableCell>
                                        <TableCell>{booking.service}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="text-xs">{new Date(booking.booking_date).toLocaleDateString()}</span>
                                                <span className="font-medium text-xs">{booking.booking_time}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">{booking.table_number}</TableCell>
                                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                                        <TableCell className="text-right">
                                            {booking.status === 'pending' && (
                                                <div className="flex justify-end gap-2">
                                                    <Button
                                                        size="sm"
                                                        variant="default"
                                                        className="bg-green-600 hover:bg-green-700 h-8 w-8 p-0"
                                                        onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                                                        title="Confirm"
                                                    >
                                                        <Check className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="destructive"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                                                        title="Reject"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AdminBookings;
