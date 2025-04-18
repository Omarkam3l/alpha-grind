
import React from "react";
import { Layout } from "@/components/layout/layout";
import { Target, Plus, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function GoalsPage() {
  const goals = [
    {
      title: "Complete 20 Workouts",
      description: "Finish 20 full workout sessions",
      progress: 65,
      deadline: "May 15, 2025"
    },
    {
      title: "Run 100 Miles",
      description: "Reach 100 total miles running",
      progress: 42,
      deadline: "June 30, 2025"
    },
    {
      title: "Maintain 7-Day Streak",
      description: "Exercise consistently for a full week",
      progress: 85,
      deadline: "April 25, 2025"
    }
  ];
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Goals</h1>
            <p className="text-muted-foreground">
              Set targets and track your progress towards achieving them
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Goal
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <Card key={index} className="animate-fade-in" style={{ ['--delay' as any]: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  {goal.title}
                </CardTitle>
                <CardDescription>{goal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                Deadline: {goal.deadline}
              </CardFooter>
            </Card>
          ))}
          
          <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
            <Trophy className="h-10 w-10 text-muted-foreground mb-4" />
            <h3 className="font-medium mb-2">Create New Goal</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Set a new fitness target to work towards
            </p>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add Goal
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
