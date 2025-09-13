import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export const FinancialOverview = () => {
  const monthlyBudget = 3000;
  const currentSpending = 2340;
  const budgetUsed = (currentSpending / monthlyBudget) * 100;

  const insights = [
    { text: "Dining out increased by 25% this month", type: "warning" },
    { text: "You're on track to save $400 extra", type: "success" },
    { text: "Transportation costs are optimized", type: "info" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Monthly Budget Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Budget Used</span>
            <span className="font-medium">${currentSpending} / ${monthlyBudget}</span>
          </div>
          <Progress value={budgetUsed} className="h-3" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{budgetUsed.toFixed(1)}% used</span>
            <span className="text-finance-income">${monthlyBudget - currentSpending} remaining</span>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-2">
              <Badge 
                variant={insight.type === 'success' ? 'default' : 'secondary'}
                className={`mt-0.5 ${
                  insight.type === 'success' ? 'bg-finance-income text-white' :
                  insight.type === 'warning' ? 'bg-warning text-white' :
                  'bg-info text-white'
                }`}
              >
                {insight.type === 'success' && <TrendingUp className="h-3 w-3" />}
                {insight.type === 'warning' && <TrendingDown className="h-3 w-3" />}
                {insight.type === 'info' && <DollarSign className="h-3 w-3" />}
              </Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {insight.text}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};