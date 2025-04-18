
import React from "react";
import { Layout } from "@/components/layout/layout";
import { StatsGrid } from "@/components/stats-card";
import { BarChart3, ArrowUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProgressPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Progress Tracking</h1>
          <p className="text-muted-foreground">
            Monitor your fitness journey and track improvements over time
          </p>
        </div>
        
        <StatsGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Monthly Progress
              </CardTitle>
              <CardDescription>Your workout consistency over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-muted-foreground text-center p-8">
                <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-2">Progress Charts Coming Soon</h3>
                <p>Your workout data will be visualized here as you complete more workouts</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUp className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
              <CardDescription>Track your improvements across different exercises</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-muted-foreground text-center p-8">
                <ArrowUp className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-2">Performance Data Coming Soon</h3>
                <p>Your strength and endurance progress will be tracked here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
