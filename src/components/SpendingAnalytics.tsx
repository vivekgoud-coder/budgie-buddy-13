import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, Calendar, Brain } from "lucide-react";

export const SpendingAnalytics = () => {
  const monthlyData = [
    { month: 'Jan', spending: 2100, predicted: 2200 },
    { month: 'Feb', spending: 2300, predicted: 2400 },
    { month: 'Mar', spending: 2200, predicted: 2300 },
    { month: 'Apr', spending: 2500, predicted: 2600 },
    { month: 'May', spending: 2340, predicted: 2450 },
    { month: 'Jun', spending: 0, predicted: 2500 },
    { month: 'Jul', spending: 0, predicted: 2450 },
  ];

  const weeklyTrend = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 32 },
    { day: 'Wed', amount: 78 },
    { day: 'Thu', amount: 65 },
    { day: 'Fri', amount: 120 },
    { day: 'Sat', amount: 95 },
    { day: 'Sun', amount: 38 },
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Predictive Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Monthly Spending Forecast
            </h4>
            <Badge className="bg-finance-investment text-white">
              <Brain className="h-3 w-3 mr-1" />
              AI Prediction
            </Badge>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="spending" 
                  stroke="hsl(var(--finance-expense))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--finance-expense))", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="hsl(var(--finance-investment))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "hsl(var(--finance-investment))", strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Weekly Spending Pattern</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyTrend}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-2xl font-bold text-finance-investment">$2,500</p>
            <p className="text-sm text-muted-foreground">Predicted Next Month</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-2xl font-bold text-finance-income">92%</p>
            <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};