import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  UtensilsCrossed, 
  Car, 
  Home, 
  ShoppingBag, 
  Gamepad2, 
  Heart,
  MoreHorizontal,
  Sparkles
} from "lucide-react";

export const ExpenseCategories = () => {
  const categories = [
    { 
      name: "Dining & Food", 
      amount: 680, 
      percentage: 29, 
      icon: UtensilsCrossed, 
      color: "bg-orange-500",
      trend: "+15%"
    },
    { 
      name: "Transportation", 
      amount: 520, 
      percentage: 22, 
      icon: Car, 
      color: "bg-blue-500",
      trend: "-5%"
    },
    { 
      name: "Housing", 
      amount: 450, 
      percentage: 19, 
      icon: Home, 
      color: "bg-green-500",
      trend: "0%"
    },
    { 
      name: "Shopping", 
      amount: 380, 
      percentage: 16, 
      icon: ShoppingBag, 
      color: "bg-purple-500",
      trend: "+8%"
    },
    { 
      name: "Entertainment", 
      amount: 210, 
      percentage: 9, 
      icon: Gamepad2, 
      color: "bg-pink-500",
      trend: "+25%"
    },
    { 
      name: "Healthcare", 
      amount: 100, 
      percentage: 5, 
      icon: Heart, 
      color: "bg-red-500",
      trend: "-10%"
    }
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Expense Categories
        </CardTitle>
        <Button variant="outline" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${category.color} text-white`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{category.name}</p>
                  <p className="text-sm text-muted-foreground">{category.percentage}% of spending</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">${category.amount}</p>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    category.trend.startsWith('+') ? 'text-finance-expense border-finance-expense/30' :
                    category.trend.startsWith('-') ? 'text-finance-income border-finance-income/30' :
                    'text-muted-foreground'
                  }`}
                >
                  {category.trend}
                </Badge>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};