import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Leaf, Recycle, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = {
    mealsSaved: 152,
    plasticRecycled: 240,
    compostGenerated: 32
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8 pb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-foreground flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              Waste2Worth
            </h1>
            <p className="text-muted-foreground mt-2">Transform waste into value for a sustainable future</p>
          </div>
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Impact
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-0 shadow-lg bg-food/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-food">{stats.mealsSaved}</div>
              <div className="text-sm text-muted-foreground">Meals Saved</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-primary/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.plasticRecycled}kg</div>
              <div className="text-sm text-muted-foreground">Plastic Recycled</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-success/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{stats.compostGenerated}kg</div>
              <div className="text-sm text-muted-foreground">Compost Created</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Actions */}
      <div className="container mx-auto px-4">
        <div className="grid gap-6 max-w-2xl mx-auto">
          
          {/* Donate Food */}
          <Link to="/donate-food">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-food to-food/80 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-food-foreground/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Utensils className="w-8 h-8 text-food-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-food-foreground mb-2">Donate Food 🍱</h2>
                    <p className="text-food-foreground/80">Share surplus meals with NGOs and volunteers nearby</p>
                    <Badge className="mt-3 bg-food-foreground/20 text-food-foreground hover:bg-food-foreground/30">
                      One tap to help
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Compost Guide */}
          <Link to="/compost-guide">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-success to-success/80 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-success-foreground/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Leaf className="w-8 h-8 text-success-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-success-foreground mb-2">Compost Guide 🌿</h2>
                    <p className="text-success-foreground/80">AI-powered composting instructions for beginners</p>
                    <Badge className="mt-3 bg-success-foreground/20 text-success-foreground hover:bg-success-foreground/30">
                      Smart guidance
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Recycle Plastic */}
          <Link to="/recycle-plastic">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Recycle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary-foreground mb-2">Recycle Plastic ♻</h2>
                    <p className="text-primary-foreground/80">Identify plastic types and find recycling centers</p>
                    <Badge className="mt-3 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
                      Clear directions
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pb-8">
          <p className="text-muted-foreground mb-4">Every action counts towards a sustainable future</p>
          <Link to="/dashboard">
            <Button className="bg-primary hover:bg-primary-glow transition-all duration-300 gap-2">
              <BarChart3 className="w-4 h-4" />
              View Your Impact Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;