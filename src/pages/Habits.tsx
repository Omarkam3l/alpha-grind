
import React from "react";
import { Layout } from "@/components/layout/layout";
import { HabitTracker } from "@/components/habit-tracker";
import { FlameKindling, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HabitsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Habits</h1>
            <p className="text-muted-foreground">
              Build consistency with daily habits that support your fitness goals
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Habit
          </Button>
        </div>
        
        <Card className="border-2 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlameKindling className="h-5 w-5 text-amber-500" />
              Daily Habit Tracker
            </CardTitle>
            <CardDescription>Track your daily habits to build consistency</CardDescription>
          </CardHeader>
          <CardContent>
            <HabitTracker />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Habit Streaks</CardTitle>
              <CardDescription>Your longest active streaks</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
              <div className="text-muted-foreground text-center">
                <FlameKindling className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <p>Start building habits to see your streaks here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Habit Insights</CardTitle>
              <CardDescription>Analysis of your habit performance</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
              <div className="text-muted-foreground text-center">
                <p>Complete more habits to unlock insights</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
