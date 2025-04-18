
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Flame, ChevronRight, Timer, CalendarDays, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkoutCardProps {
  title: string;
  description: string;
  duration: string;
  intensity: "low" | "medium" | "high";
  type?: string;
  className?: string;
}

export function WorkoutCard({
  title,
  description,
  duration,
  intensity,
  type = "strength",
  className,
}: WorkoutCardProps) {
  const intensityColors = {
    low: "text-green-500",
    medium: "text-yellow-500",
    high: "text-red-500",
  };

  const intensityFlames = {
    low: 1,
    medium: 2,
    high: 3,
  };

  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-300", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex gap-1">
            {[...Array(intensityFlames[intensity])].map((_, i) => (
              <Flame 
                key={i}
                className={cn("h-4 w-4", intensityColors[intensity])}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
            <span className="capitalize">{type}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" className="w-full">
          <Timer className="h-4 w-4 mr-2" />
          Quick Start
        </Button>
        <Button className="w-full" size="sm">
          <CalendarDays className="h-4 w-4 mr-2" />
          Schedule
        </Button>
      </CardFooter>
    </Card>
  );
}

export function WorkoutGrid() {
  const workouts = [
    {
      title: "HIIT Cardio Blast",
      description: "High intensity interval training to maximize calorie burn",
      duration: "30 min",
      intensity: "high" as const,
      type: "hiit",
    },
    {
      title: "Upper Body Power",
      description: "Build strength and definition in your chest, back, and arms",
      duration: "45 min",
      intensity: "medium" as const,
      type: "strength",
    },
    {
      title: "Core Crusher",
      description: "Strengthen your abs and improve stability",
      duration: "20 min",
      intensity: "medium" as const,
      type: "strength",
    },
    {
      title: "Recovery Stretch",
      description: "Flexibility routine to improve recovery and prevent injury",
      duration: "25 min",
      intensity: "low" as const,
      type: "yoga",
    },
    {
      title: "Cardio Endurance",
      description: "Build stamina and improve cardiovascular health",
      duration: "40 min",
      intensity: "medium" as const,
      type: "cardio",
    },
    {
      title: "Full Body HIIT",
      description: "Total body workout combining strength and cardio",
      duration: "35 min",
      intensity: "high" as const,
      type: "hiit",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {workouts.map((workout, index) => (
        <WorkoutCard 
          key={index} 
          {...workout}
          className="animate-fade-in [animation-delay:var(--delay)]"
          style={{ ['--delay' as any]: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
}
