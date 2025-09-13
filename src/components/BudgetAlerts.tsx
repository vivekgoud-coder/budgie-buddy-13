import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  X, 
  Bell,
  TrendingUp,
  Calendar
} from "lucide-react";

export const BudgetAlerts = () => {
  const alerts = [
    {
      type: "warning",
      title: "Dining Budget Alert",
      message: "You've spent 85% of your dining budget this month",
      amount: "$680 of $800",
      action: "Review expenses",
      urgent: true
    },
    {
      type: "success",
      title: "Savings Goal",
      message: "Great job! You're ahead on your emergency fund goal",
      amount: "+$200 surplus",
      action: "Keep it up",
      urgent: false
    },
    {
      type: "info",
      title: "Spending Pattern",
      message: "Your weekend spending is 40% higher than weekdays",
      amount: "Avg $95/day",
      action: "View details",
      urgent: false
    },
    {
      type: "warning",
      title: "Predicted Overspend",
      message: "AI predicts you may exceed monthly budget by $150",
      amount: "High confidence",
      action: "Adjust spending",
      urgent: true
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'success':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'border-warning/30 bg-warning/5';
      case 'success':
        return 'border-finance-income/30 bg-finance-income/5';
      default:
        return 'border-info/30 bg-info/5';
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-warning text-white';
      case 'success':
        return 'bg-finance-income text-white';
      default:
        return 'bg-info text-white';
    }
  };

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Smart Alerts
        </CardTitle>
        <Badge variant="outline" className="text-xs">
          {alerts.filter(a => a.urgent).length} urgent
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border ${getAlertColor(alert.type)} ${
              alert.urgent ? 'ring-1 ring-warning/20' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <Badge className={getBadgeColor(alert.type)}>
                  {getAlertIcon(alert.type)}
                </Badge>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    {alert.urgent && (
                      <Badge variant="outline" className="text-xs text-warning border-warning/30">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  <p className="text-xs font-medium">{alert.amount}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" className="text-xs">
                  {alert.action}
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              AI monitoring your spending patterns
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              View All Alerts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};