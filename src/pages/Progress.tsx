
import React from "react";
import { Layout } from "@/components/layout/layout";
import { StatsGrid } from "@/components/stats-card";
import { BarChart3, ArrowUp, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from "recharts";

// Sample data for charts
const workoutData = [
  { name: "Mon", workouts: 1, duration: 30 },
  { name: "Tue", workouts: 0, duration: 0 },
  { name: "Wed", workouts: 1, duration: 45 },
  { name: "Thu", workouts: 1, duration: 60 },
  { name: "Fri", workouts: 2, duration: 90 },
  { name: "Sat", workouts: 0, duration: 0 },
  { name: "Sun", workouts: 1, duration: 30 },
];

const performanceData = [
  { name: "Week 1", pushups: 20, pullups: 5, squats: 30 },
  { name: "Week 2", pushups: 22, pullups: 6, squats: 35 },
  { name: "Week 3", pushups: 25, pullups: 8, squats: 40 },
  { name: "Week 4", pushups: 30, pullups: 10, squats: 45 },
];

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
                Weekly Workout Activity
              </CardTitle>
              <CardDescription>Your workout frequency and duration over the last week</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip contentStyle={{ background: "rgba(0,0,0,0.8)", border: "none", borderRadius: "4px", color: "white" }} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="workouts" name="Workout Count" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="duration" name="Duration (min)" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUp className="h-5 w-5" />
                Exercise Performance
              </CardTitle>
              <CardDescription>Track your improvements across different exercises</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip contentStyle={{ background: "rgba(0,0,0,0.8)", border: "none", borderRadius: "4px", color: "white" }} />
                  <Legend />
                  <Line type="monotone" dataKey="pushups" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                  <Line type="monotone" dataKey="pullups" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
                  <Line type="monotone" dataKey="squats" stroke="#ffc658" activeDot={{ r: 8 }} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Monthly Goal Progress
            </CardTitle>
            <CardDescription>Track your progress toward monthly workout goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Workout Frequency</span>
                  <span className="text-sm font-medium">15/20 days</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Strength Training</span>
                  <span className="text-sm font-medium">8/12 sessions</span>
                </div>
                <Progress value={66} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Cardio Sessions</span>
                  <span className="text-sm font-medium">5/8 sessions</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
