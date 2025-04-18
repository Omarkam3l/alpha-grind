
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Flame, ChevronRight } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  description: string;
  duration: string;
  intensity: "low" | "medium" | "high";
  className?: string;
}

export function WorkoutCard({
  title,
  description,
  duration,
  intensity,
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
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Intensity:</span>
            <div className="flex">
              {[...Array(intensityFlames[intensity])].map((_, i) => (
                <Flame 
                  key={i}
                  className={`h-4 w-4 ${intensityColors[intensity]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full mt-2" size="sm">
          <span>Start Workout</span>
          <ChevronRight className="h-4 w-4 ml-2" />
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
    },
    {
      title: "Upper Body Power",
      description: "Build strength and definition in your chest, back, and arms",
      duration: "45 min",
      intensity: "medium" as const,
    },
    {
      title: "Core Crusher",
      description: "Strengthen your abs and improve stability",
      duration: "20 min",
      intensity: "medium" as const,
    },
    {
      title: "Recovery Stretch",
      description: "Flexibility routine to improve recovery and prevent injury",
      duration: "25 min",
      intensity: "low" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {workouts.map((workout, index) => (
        <WorkoutCard key={index} {...workout} />
      ))}
    </div>
  );
}
