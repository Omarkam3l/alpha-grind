
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Clock, Dumbbell, Flame } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WorkoutFiltersProps {
  onFilterChange: (filter: {
    duration?: string;
    intensity?: "low" | "medium" | "high";
    type?: string;
  }) => void;
}

export function WorkoutFilters({ onFilterChange }: WorkoutFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select
        onValueChange={(value) =>
          onFilterChange({ duration: value === "all" ? undefined : value })
        }
      >
        <SelectTrigger className="w-[180px]">
          <Clock className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Durations</SelectItem>
          <SelectItem value="0-15">0-15 minutes</SelectItem>
          <SelectItem value="15-30">15-30 minutes</SelectItem>
          <SelectItem value="30-45">30-45 minutes</SelectItem>
          <SelectItem value="45+">45+ minutes</SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) =>
          onFilterChange({
            intensity: value === "all" ? undefined : (value as "low" | "medium" | "high"),
          })
        }
      >
        <SelectTrigger className="w-[180px]">
          <Flame className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Intensity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Intensities</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) =>
          onFilterChange({ type: value === "all" ? undefined : value })
        }
      >
        <SelectTrigger className="w-[180px]">
          <Dumbbell className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="strength">Strength</SelectItem>
          <SelectItem value="cardio">Cardio</SelectItem>
          <SelectItem value="hiit">HIIT</SelectItem>
          <SelectItem value="yoga">Yoga</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
