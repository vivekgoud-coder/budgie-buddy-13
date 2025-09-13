import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Plus, Calendar, TrendingUp } from "lucide-react";

export const GoalTracker = () => {
  const goals = [
    {
      name: "Emergency Fund",
      target: 10000,
      current: 7300,
      deadline: "Dec 2024",
      category: "savings",
      onTrack: true
    },
    {
      name: "Vacation Fund",
      target: 3000,
      current: 1800,
      deadline: "Jun 2024",
      category: "travel",
      onTrack: true
    },
    {
      name: "New Car Down Payment",
      target: 5000,
      current: 2100,
      deadline: "Oct 2024",
      category: "purchase",
      onTrack: false
    }
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Financial Goals
        </CardTitle>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-1" />
          Add Goal
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal, index) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{goal.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {goal.deadline}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">${goal.current.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">of ${goal.target.toLocaleString()}</p>
                </div>
              </div>
              
              <Progress value={progress} className="h-3" />
              
              <div className="flex items-center justify-between">
                <Badge 
                  className={goal.onTrack ? 
                    'bg-finance-income text-white' : 
                    'bg-warning text-white'
                  }
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {goal.onTrack ? 'On Track' : 'Behind Schedule'}
                </Badge>
                <span className="text-sm font-medium">
                  {progress.toFixed(1)}% Complete
                </span>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t">
          <div className="text-center space-y-2">
            <p className="text-2xl font-bold text-finance-savings">73%</p>
            <p className="text-sm text-muted-foreground">Average Goal Progress</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};