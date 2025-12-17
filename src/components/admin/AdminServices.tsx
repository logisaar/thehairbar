import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; // Assuming Table component exists, if not I'll use divs or check next
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"; // Assuming Dialog component exists
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, Image as ImageIcon } from "lucide-react";

// Fallback if Table/Dialog don't exist in user context, but I saw radix dependencies.
// I will assume they exist based on package.json, otherwise I might hit error and fix.

const AdminServices = () => {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingService, setEditingService] = useState<any>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        category: "Hair Services",
        description: "",
        duration: "",
        price: "",
        image_url: ""
    });

    const categories = ["Hair Services", "Skin Care", "Facials & Others"];

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const { data, error } = await supabase
                .from("services")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setServices(data || []);
        } catch (error) {
            console.error("Error fetching services:", error);
            toast.error("Failed to load services");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCategoryChange = (value: string) => {
        setFormData(prev => ({ ...prev, category: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingService) {
                const { error } = await supabase
                    .from("services")
                    .update(formData)
                    .eq("id", editingService.id);
                if (error) throw error;
                toast.success("Service updated successfully");
            } else {
                const { error } = await supabase
                    .from("services")
                    .insert([formData]);
                if (error) throw error;
                toast.success("Service added successfully");
            }

            setIsDialogOpen(false);
            setFormData({
                name: "",
                category: "Hair Services",
                description: "",
                duration: "",
                price: "",
                image_url: ""
            });
            setEditingService(null);
            fetchServices();
        } catch (error) {
            console.error("Error saving service:", error);
            toast.error("Failed to save service");
        }
    };

    const handleEdit = (service: any) => {
        setEditingService(service);
        setFormData({
            name: service.name,
            category: service.category,
            description: service.description || "",
            duration: service.duration || "",
            price: service.price,
            image_url: service.image_url || ""
        });
        setIsDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this service?")) return;

        try {
            const { error } = await supabase
                .from("services")
                .delete()
                .eq("id", id);

            if (error) throw error;
            toast.success("Service deleted");
            fetchServices();
        } catch (error) {
            console.error("Error deleting service:", error);
            toast.error("Failed to delete service");
        }
    };

    const handleSeedData = async () => {
        if (!confirm("This will add initial sample data. Continue?")) return;

        // Sample data based on previous Services.tsx
        const sampleData = [
            {
                name: "Classic Hair Cut",
                category: "Hair Services",
                description: "Professional cut & styling",
                duration: "45 mins",
                price: "₹150",
                image_url: "https://images.unsplash.com/photo-1599351431202-6e0c06e7afbb?q=80&w=1000&auto=format&fit=crop"
            },
            // Add more if needed, just one for demo
        ];

        try {
            const { error } = await supabase.from("services").insert(sampleData);
            if (error) throw error;
            toast.success("Sample data added");
            fetchServices();
        } catch (error) {
            toast.error("Failed to seed data");
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold font-['Playfair_Display']">Service Management</h2>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={handleSeedData}>Seed Data</Button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-gradient-gold text-primary hover:shadow-gold-glow">
                                <Plus className="w-4 h-4 mr-2" /> Add Service
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>{editingService ? "Edit Service" : "Add New Service"}</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Service Name</Label>
                                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select value={formData.category} onValueChange={handleCategoryChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Price</Label>
                                    <Input id="price" name="price" value={formData.price} onChange={handleInputChange} placeholder="e.g. ₹500" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="duration">Duration</Label>
                                    <Input id="duration" name="duration" value={formData.duration} onChange={handleInputChange} placeholder="e.g. 30 mins" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Input id="description" name="description" value={formData.description} onChange={handleInputChange} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="image_url">Image URL</Label>
                                    <Input id="image_url" name="image_url" value={formData.image_url} onChange={handleInputChange} placeholder="https://..." />
                                </div>
                                <DialogFooter>
                                    <Button type="submit" className="bg-gradient-gold text-primary">Save Service</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="rounded-md border bg-card overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {services.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                    No services found. Add one to get started.
                                </TableCell>
                            </TableRow>
                        ) : (
                            services.map((service) => (
                                <TableRow key={service.id}>
                                    <TableCell className="font-medium">{service.name}</TableCell>
                                    <TableCell>{service.category}</TableCell>
                                    <TableCell className="text-accent font-bold">{service.price}</TableCell>
                                    <TableCell>{service.duration}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                                                <Pencil className="w-4 h-4 text-muted-foreground hover:text-primary" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                                                <Trash2 className="w-4 h-4 text-destructive hover:text-destructive/80" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminServices;
