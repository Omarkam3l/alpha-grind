
import React from "react";
import { Layout } from "@/components/layout/layout";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { CalendarDays, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  const events = [
    { date: new Date(2025, 3, 20), title: "Upper Body Strength", type: "strength", time: "6:00 AM" },
    { date: new Date(2025, 3, 22), title: "HIIT Cardio", type: "hiit", time: "5:30 PM" },
    { date: new Date(2025, 3, 25), title: "Yoga & Recovery", type: "yoga", time: "7:00 AM" },
    { date: new Date(2025, 3, 27), title: "Lower Body Focus", type: "strength", time: "6:00 PM" }
  ];
  
  const todaysEvents = events.filter(
    event => event.date.toDateString() === (date?.toDateString() || "")
  );
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Calendar</h1>
            <p className="text-muted-foreground">
              Schedule and plan your workouts in advance
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule Workout
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Workout Calendar
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardDescription>Plan and view your scheduled workouts</CardDescription>
            </CardHeader>
            <CardContent>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {date ? date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : "Select a Date"}
                </CardTitle>
                <CardDescription>
                  {todaysEvents.length 
                    ? `${todaysEvents.length} workout${todaysEvents.length > 1 ? 's' : ''} scheduled` 
                    : "No workouts scheduled"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {todaysEvents.length > 0 ? (
                  <div className="space-y-4">
                    {todaysEvents.map((event, i) => (
                      <div key={i} className="flex items-center p-3 rounded-md bg-muted">
                        <div className="mr-4 h-2 w-2 rounded-full bg-primary"></div>
                        <div>
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-sm text-muted-foreground mb-4">No workouts scheduled for this day</p>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Workout
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Upcoming Workouts</CardTitle>
                <CardDescription>Your next scheduled sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {events.slice(0, 3).map((event, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span>{event.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
