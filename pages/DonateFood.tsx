import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowLeft, Camera, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DonateFood = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    foodType: "",
    quantity: "",
    location: "",
    description: "",
    expiryTime: ""
  });
  const { toast } = useToast();

  const nearbyNGOs = [
    { id: 1, name: "Hope Kitchen", distance: "0.8 km", rating: 4.8, estimatedPickup: "15 mins" },
    { id: 2, name: "Food Angels", distance: "1.2 km", rating: 4.9, estimatedPickup: "20 mins" },
    { id: 3, name: "Meal Share", distance: "1.5 km", rating: 4.7, estimatedPickup: "25 mins" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      toast({
        title: "Food donation submitted!",
        description: "Hope Kitchen will pick up your donation in 15 minutes.",
      });
      setStep(3);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
        <div className="max-w-2xl mx-auto pt-8">
          <Card className="text-center p-8 border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-success-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Donation Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Hope Kitchen will arrive at your location in approximately 15 minutes.
              You'll receive an SMS when they're nearby.
            </p>
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">Pickup Details:</p>
                <p>Food: {formData.foodType} ({formData.quantity})</p>
                <p>Location: {formData.location}</p>
                <p>NGO: Hope Kitchen</p>
              </div>
              <Link to="/">
                <Button className="w-full bg-primary hover:bg-primary-glow transition-all duration-300">
                  Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Donate Food</h1>
            <p className="text-muted-foreground">Help reduce food waste by sharing surplus meals</p>
          </div>
        </div>

        {step === 1 ? (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-food rounded-full flex items-center justify-center">
                  <span className="text-food-foreground text-sm font-bold">1</span>
                </div>
                Food Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="foodType">Type of Food</Label>
                  <Select onValueChange={(value) => setFormData({...formData, foodType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select food type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cooked-meals">Cooked Meals</SelectItem>
                      <SelectItem value="packaged-food">Packaged Food</SelectItem>
                      <SelectItem value="fruits-vegetables">Fruits & Vegetables</SelectItem>
                      <SelectItem value="baked-goods">Baked Goods</SelectItem>
                      <SelectItem value="dairy">Dairy Products</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity (serves how many people)</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 10 people"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="expiryTime">Best consumed within</Label>
                  <Select onValueChange={(value) => setFormData({...formData, expiryTime: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-hours">2 hours</SelectItem>
                      <SelectItem value="4-hours">4 hours</SelectItem>
                      <SelectItem value="6-hours">6 hours</SelectItem>
                      <SelectItem value="today">End of today</SelectItem>
                      <SelectItem value="tomorrow">By tomorrow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Pickup Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter your address"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Additional Notes (optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Any special instructions or details about the food"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" className="flex-1">
                    <Camera className="w-4 h-4 mr-2" />
                    Add Photo
                  </Button>
                  <Button type="submit" className="flex-1 bg-food hover:bg-food/90">
                    Find NGOs
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-food rounded-full flex items-center justify-center">
                  <span className="text-food-foreground text-sm font-bold">2</span>
                </div>
                Nearby NGOs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nearbyNGOs.map((ngo) => (
                  <Card key={ngo.id} className="p-4 border border-border hover:shadow-md transition-all cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{ngo.name}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {ngo.distance}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {ngo.estimatedPickup}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {ngo.rating} ⭐
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        Available
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="mt-6">
                <Button type="submit" className="w-full bg-food hover:bg-food/90">
                  Confirm Pickup with Hope Kitchen
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DonateFood;