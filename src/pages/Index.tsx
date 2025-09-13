import { DashboardHeader } from "@/components/DashboardHeader";
import { FinancialOverview } from "@/components/FinancialOverview";
import { ExpenseCategories } from "@/components/ExpenseCategories";
import { SpendingAnalytics } from "@/components/SpendingAnalytics";
import { GoalTracker } from "@/components/GoalTracker";
import { BudgetAlerts } from "@/components/BudgetAlerts";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto p-6 space-y-8">
        <DashboardHeader />
        <FinancialOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ExpenseCategories />
            <GoalTracker />
          </div>
          <div className="space-y-8">
            <SpendingAnalytics />
            <BudgetAlerts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;