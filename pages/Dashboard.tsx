import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Award, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userStats = {
    mealsSaved: 152,
    plasticRecycled: 240, // kg
    compostGenerated: 32, // kg
    co2Saved: 89, // kg
    treesEquivalent: 4
  };

  const monthlyGoals = {
    meals: { current: 152, target: 200 },
    plastic: { current: 240, target: 300 },
    compost: { current: 32, target: 50 }
  };

  const recentActivities = [
    { date: "Today", action: "Donated cooked meals", impact: "8 people fed", type: "food" },
    { date: "2 days ago", action: "Recycled PET bottles", impact: "2.5 kg plastic", type: "plastic" },
    { date: "3 days ago", action: "Composted fruit peels", impact: "1.2 kg compost", type: "compost" },
    { date: "1 week ago", action: "Donated packaged food", impact: "15 people fed", type: "food" }
  ];

  const achievements = [
    { name: "Eco Warrior", description: "100+ meals donated", earned: true },
    { name: "Plastic Fighter", description: "200+ kg plastic recycled", earned: true },
    { name: "Compost Master", description: "Create 50 kg compost", earned: false },
    { name: "Monthly Hero", description: "Reach all monthly goals", earned: false }
  ];

  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 100) return "bg-success";
    if (percentage >= 75) return "bg-primary";
    return "bg-accent";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Impact Dashboard</h1>
            <p className="text-muted-foreground">Track your sustainability journey</p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-food to-food/80 text-food-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-food-foreground/80 text-sm font-medium">Meals Saved</p>
                  <p className="text-3xl font-bold">{userStats.mealsSaved}</p>
                  <p className="text-food-foreground/80 text-xs">People fed this month</p>
                </div>
                <div className="w-12 h-12 bg-food-foreground/20 rounded-full flex items-center justify-center">
                  🍱
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 text-sm font-medium">Plastic Recycled</p>
                  <p className="text-3xl font-bold">{userStats.plasticRecycled} kg</p>
                  <p className="text-primary-foreground/80 text-xs">This month</p>
                </div>
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  ♻
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-success to-success/80 text-success-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-success-foreground/80 text-sm font-medium">Compost Generated</p>
                  <p className="text-3xl font-bold">{userStats.compostGenerated} kg</p>
                  <p className="text-success-foreground/80 text-xs">Organic waste converted</p>
                </div>
                <div className="w-12 h-12 bg-success-foreground/20 rounded-full flex items-center justify-center">
                  🌿
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Impact */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Environmental Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-4 p-4 bg-success/10 rounded-lg">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  🌍
                </div>
                <div>
                  <p className="font-semibold">{userStats.co2Saved} kg CO₂ Saved</p>
                  <p className="text-sm text-muted-foreground">Equivalent to planting {userStats.treesEquivalent} trees</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  💧
                </div>
                <div>
                  <p className="font-semibold">1,200 L Water Saved</p>
                  <p className="text-sm text-muted-foreground">Through waste reduction efforts</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Goals */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Monthly Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Meals to Save</span>
                  <span className="text-sm text-muted-foreground">
                    {monthlyGoals.meals.current} / {monthlyGoals.meals.target}
                  </span>
                </div>
                <Progress 
                  value={(monthlyGoals.meals.current / monthlyGoals.meals.target) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Plastic to Recycle (kg)</span>
                  <span className="text-sm text-muted-foreground">
                    {monthlyGoals.plastic.current} / {monthlyGoals.plastic.target}
                  </span>
                </div>
                <Progress 
                  value={(monthlyGoals.plastic.current / monthlyGoals.plastic.target) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Compost to Generate (kg)</span>
                  <span className="text-sm text-muted-foreground">
                    {monthlyGoals.compost.current} / {monthlyGoals.compost.target}
                  </span>
                </div>
                <Progress 
                  value={(monthlyGoals.compost.current / monthlyGoals.compost.target) * 100} 
                  className="h-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Activity */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'food' ? 'bg-food' :
                      activity.type === 'plastic' ? 'bg-primary' : 'bg-success'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.impact}</p>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    achievement.earned 
                      ? 'bg-success/10 border-success/20' 
                      : 'bg-muted/20 border-border'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-success text-success-foreground' : 'bg-muted'
                      }`}>
                        {achievement.earned ? '🏆' : '🔒'}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <Badge variant="secondary" className="bg-success/20 text-success text-xs">
                          Earned
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
