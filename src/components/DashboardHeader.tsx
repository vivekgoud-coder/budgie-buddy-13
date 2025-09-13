import { Card } from "@/components/ui/card";
import { TrendingUp, Brain, Target, AlertTriangle } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-finance-savings bg-clip-text text-transparent">
          AI Financial Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Smart expense tracking with predictive analytics and automated insights
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-finance-income/10 to-finance-income/5 border-finance-income/20 shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-finance-income/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-finance-income" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Balance</p>
              <p className="text-2xl font-bold text-finance-income">$12,450</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-finance-expense/10 to-finance-expense/5 border-finance-expense/20 shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-finance-expense/10 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-finance-expense" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Monthly Expenses</p>
              <p className="text-2xl font-bold text-finance-expense">$2,340</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-finance-investment/10 to-finance-investment/5 border-finance-investment/20 shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-finance-investment/10 rounded-lg">
              <Brain className="h-5 w-5 text-finance-investment" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">AI Predictions</p>
              <p className="text-2xl font-bold text-finance-investment">+8.5%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-finance-savings/10 to-finance-savings/5 border-finance-savings/20 shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-finance-savings/10 rounded-lg">
              <Target className="h-5 w-5 text-finance-savings" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Goals Progress</p>
              <p className="text-2xl font-bold text-finance-savings">73%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};