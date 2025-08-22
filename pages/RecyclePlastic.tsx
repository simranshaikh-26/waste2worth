mport { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Camera, CheckCircle, XCircle, MapPin, Recycle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const RecyclePlastic = () => {
  const [selectedPlastic, setSelectedPlastic] = useState("");
  const [result, setResult] = useState<any>(null);

  const plasticTypes = [
    {
      code: "PET-1",
      name: "PET Bottles",
      recyclable: true,
      description: "Water bottles, soda bottles, food containers",
      tips: "Remove caps and labels, rinse clean"
    },
    {
      code: "HDPE-2", 
      name: "HDPE Containers",
      recyclable: true,
      description: "Milk jugs, detergent bottles, shampoo bottles",
      tips: "Rinse thoroughly, caps can stay on"
    },
    {
      code: "PVC-3",
      name: "PVC Plastic",
      recyclable: false,
      description: "Some packaging, pipes, vinyl",
      tips: "Not recyclable in most areas - check local facilities"
    },
    {
      code: "LDPE-4",
      name: "LDPE Films",
      recyclable: false,
      description: "Plastic bags, food wraps, squeezable bottles",
      tips: "Take bags to store drop-off programs"
    },
    {
      code: "PP-5",
      name: "Polypropylene",
      recyclable: true,
      description: "Yogurt containers, bottle caps, straws",
      tips: "Clean containers before recycling"
    },
    {
      code: "PS-6",
      name: "Polystyrene",
      recyclable: false,
      description: "Foam cups, takeout containers, packing materials",
      tips: "Not recyclable - consider reusable alternatives"
    },
    {
      code: "OTHER-7",
      name: "Mixed Plastics",
      recyclable: false,
      description: "Complex plastics, multi-layer packaging",
      tips: "Usually not recyclable - minimize use"
    }
  ];

  const recyclingCenters = [
    { name: "EcoRecycle Hub", distance: "1.2 km", accepts: "PET, HDPE, PP", hours: "8 AM - 6 PM" },
    { name: "Green Point Center", distance: "2.1 km", accepts: "All recyclables", hours: "9 AM - 5 PM" },
    { name: "City Recycling Depot", distance: "3.5 km", accepts: "PET, HDPE", hours: "24/7 drop-off" }
  ];

  const handlePlasticSelect = (value: string) => {
    setSelectedPlastic(value);
    const plastic = plasticTypes.find(p => p.code === value);
    setResult(plastic);
  };

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
            <h1 className="text-3xl font-bold text-foreground">Recycle Plastic</h1>
            <p className="text-muted-foreground">Identify and properly recycle plastic items</p>
          </div>
        </div>

        {/* Plastic Identification */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-primary" />
              Identify Your Plastic
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Camera className="w-6 h-6" />
                <span>Take Photo</span>
              </Button>
              <div className="space-y-2">
                <label className="text-sm font-medium">Or select plastic type:</label>
                <Select onValueChange={handlePlasticSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose plastic type" />
                  </SelectTrigger>
                  <SelectContent>
                    {plasticTypes.map((plastic) => (
                      <SelectItem key={plastic.code} value={plastic.code}>
                        {plastic.code} - {plastic.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Result Display */}
        {result && (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {result.recyclable ? (
                  <CheckCircle className="w-5 h-5 text-success" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
                {result.recyclable ? "Recyclable" : "Not Recyclable"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{result.name} ({result.code})</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                </div>
                
                <div className={`p-4 rounded-lg border ${
                  result.recyclable 
                    ? "bg-success/10 border-success/20" 
                    : "bg-destructive/10 border-destructive/20"
                }`}>
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{result.tips}</p>
                  </div>
                </div>

                {result.recyclable && (
                  <Badge className="bg-success/20 text-success hover:bg-success/30">
                    ✓ Accepted at local recycling centers
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recycling Centers */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Nearby Recycling Centers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recyclingCenters.map((center, index) => (
                <Card key={index} className="p-4 border border-border">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{center.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {center.distance}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Accepts: {center.accepts}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Hours: {center.hours}
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Get Directions
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mt-6">
          <CardHeader>
            <CardTitle>Plastic Recycling Quick Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Usually Recyclable
                </span>
                <span className="text-muted-foreground">PET-1, HDPE-2, PP-5</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" />
                  Usually Not Recyclable
                </span>
                <span className="text-muted-foreground">PVC-3, LDPE-4, PS-6, Other-7</span>
              </div>
              <div className="mt-2 p-2 bg-muted/20 rounded text-xs">
                <strong>Pro tip:</strong> Look for the recycling symbol with a number inside on plastic items to identify the type.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecyclePlastic;