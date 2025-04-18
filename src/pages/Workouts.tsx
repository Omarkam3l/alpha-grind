
import React, { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { WorkoutGrid } from "@/components/workout-card";
import { WorkoutFilters } from "@/components/workouts/workout-filters";

export default function WorkoutsPage() {
  const [filters, setFilters] = useState({
    duration: undefined,
    intensity: undefined,
    type: undefined,
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Workout Library</h1>
          <p className="text-muted-foreground">
            Choose from our collection of professionally designed workouts
          </p>
        </div>
        
        <WorkoutFilters
          onFilterChange={(newFilters) =>
            setFilters((prev) => ({ ...prev, ...newFilters }))
          }
        />
        
        <WorkoutGrid />
      </div>
    </Layout>
  );
}
