
import React from "react";
import { Layout } from "@/components/layout/layout";
import { Timer } from "@/components/timer";
import { Clock, Plus, Save, ListMusic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TimerPage() {
  const presets = [
    { name: "Quick HIIT", minutes: 25 },
    { name: "Tabata", minutes: 4 },
    { name: "Power Lifting", minutes: 45 },
    { name: "Stretching", minutes: 15 }
  ];
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Timer</h1>
          <p className="text-muted-foreground">
            Track your workout durations with customizable timers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <Tabs defaultValue="timer" className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Workout Timer
                  </CardTitle>
                  <TabsList>
                    <TabsTrigger value="timer">Timer</TabsTrigger>
                    <TabsTrigger value="stopwatch">Stopwatch</TabsTrigger>
                    <TabsTrigger value="intervals">Intervals</TabsTrigger>
                  </TabsList>
                </div>
                <CardDescription>Time your workouts for optimal performance</CardDescription>
              </CardHeader>
              
              <CardContent>
                <TabsContent value="timer" className="mt-0">
                  <div className="flex flex-col items-center py-8">
                    <Timer initialMinutes={25} className="w-full shadow-none border-0" />
                  </div>
                </TabsContent>
                
                <TabsContent value="stopwatch" className="mt-0">
                  <div className="flex items-center justify-center py-16">
                    <p className="text-muted-foreground">Stopwatch functionality coming soon</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="intervals" className="mt-0">
                  <div className="flex items-center justify-center py-16">
                    <p className="text-muted-foreground">Interval timer coming soon</p>
                  </div>
                </TabsContent>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save Timer
                </Button>
                <Button size="sm">
                  <ListMusic className="h-4 w-4 mr-2" />
                  Add Music
                </Button>
              </CardFooter>
            </Tabs>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Timer Presets</CardTitle>
                <CardDescription>Quick access to common timers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {presets.map((preset, i) => (
                    <Button key={i} variant="outline" size="sm" className="w-full justify-start">
                      {preset.name}
                      <span className="ml-auto text-xs text-muted-foreground">{preset.minutes} min</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Preset
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-base">Pro Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Using structured rest periods between sets can lead to more efficient workouts and better recovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
