import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Lightbulb, CheckCircle, XCircle, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const CompostGuide = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hi! I'm your AI Composting Assistant 🌱 Tell me what food waste you have, and I'll guide you on how to compost it properly!"
    }
  ]);

  const compostableItems = [
    { name: "Fruit peels", compostable: true, tips: "Cut into small pieces for faster decomposition" },
    { name: "Vegetable scraps", compostable: true, tips: "Great for composting! Mix with dry materials" },
    { name: "Coffee grounds", compostable: true, tips: "Excellent nitrogen source, use in moderation" },
    { name: "Eggshells", compostable: true, tips: "Crush them first to speed up breakdown" },
    { name: "Meat scraps", compostable: false, tips: "Avoid - attracts pests and creates odors" },
    { name: "Dairy products", compostable: false, tips: "Skip these - they don't break down well" }
  ];

  const quickTips = [
    "Layer green (nitrogen) and brown (carbon) materials",
    "Keep your compost moist but not soggy",
    "Turn your pile every 2-3 weeks for air circulation",
    "Compost is ready when it's dark and crumbly (3-6 months)"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: input
    };

    // Simple AI simulation based on input
    let botResponse = "";
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("banana") || lowerInput.includes("peel")) {
      botResponse = "🍌 Banana peels are PERFECT for composting! ✅\n\nTips:\n• Cut into small pieces (2-3 cm)\n• Mix with dry leaves or paper\n• They're rich in potassium - great for your future plants!\n• Will decompose in 2-4 weeks in active compost";
    } else if (lowerInput.includes("onion")) {
      botResponse = "🧅 Onion skins are compostable! ✅\n\nTips:\n• Remove any stickers first\n• Chop them up for faster breakdown\n• Mix with carbon-rich materials like dry leaves\n• May take 6-8 weeks to fully decompose";
    } else if (lowerInput.includes("meat") || lowerInput.includes("fish")) {
      botResponse = "🚫 Meat and fish should NOT go in home compost!\n\nWhy avoid:\n• Attracts rats and other pests\n• Creates bad odors\n• Can harbor harmful bacteria\n• Better alternatives: municipal composting or proper disposal";
    } else if (lowerInput.includes("dairy") || lowerInput.includes("cheese") || lowerInput.includes("milk")) {
      botResponse = "🚫 Dairy products are not suitable for home composting!\n\nWhy avoid:\n• Creates strong odors\n• Attracts pests\n• Doesn't break down well\n• Can disrupt compost balance";
    } else {
      botResponse = "I can help you identify if that's compostable! For most fruit and vegetable waste: ✅ Compostable\n\nGeneral rule:\n• Fruits & vegetables: YES\n• Coffee grounds & tea bags: YES\n• Meat, dairy, oils: NO\n• Paper & cardboard: YES (if uncoated)\n\nTell me specific items for detailed advice!";
    }

    const botMessage = {
      id: messages.length + 2,
      type: "bot",
      content: botResponse
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
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
            <h1 className="text-3xl font-bold text-foreground">Compost Guide</h1>
            <p className="text-muted-foreground">Learn to turn waste into garden gold</p>
          </div>
        </div>

        {/* Chat Interface */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-success" />
              AI Composting Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 overflow-y-auto space-y-4 mb-4 p-4 bg-muted/20 rounded-lg">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={flex ${message.type === "user" ? "justify-end" : "justify-start"}}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-success/10 text-foreground border border-success/20"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Ask about any food waste... (e.g., 'banana peels', 'meat scraps')"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-success hover:bg-success/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <div className="grid gap-4 mb-6">
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="w-5 h-5 text-success" />
                Common Compostable Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {compostableItems.filter(item => item.compostable).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-success/5 rounded-lg border border-success/20">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.tips}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <XCircle className="w-5 h-5 text-destructive" />
                Avoid These Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {compostableItems.filter(item => !item.compostable).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.tips}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="w-5 h-5 text-accent" />
                Pro Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {quickTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">{tip}</p>
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

export default CompostGuide;