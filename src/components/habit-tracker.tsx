
import React, { useState } from "react";
import { Check, Plus, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Habit = {
  id: string;
  name: string;
  completed: boolean[];
  streak: number;
};

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Workout", completed: [true, true, false, true, true, false, true], streak: 1 },
    { id: "2", name: "Meditation", completed: [true, true, true, true, false, true, false], streak: 0 },
    { id: "3", name: "Cold Shower", completed: [false, true, true, true, true, true, false], streak: 0 },
  ]);
  const [newHabit, setNewHabit] = useState("");
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const handleAddHabit = () => {
    if (newHabit.trim() === "") return;
    
    const habit: Habit = {
      id: Date.now().toString(),
      name: newHabit,
      completed: new Array(7).fill(false),
      streak: 0
    };
    
    setHabits([...habits, habit]);
    setNewHabit("");
    setIsAddingHabit(false);
  };

  const toggleHabit = (habitId: string, dayIndex: number) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const newCompleted = [...habit.completed];
        newCompleted[dayIndex] = !newCompleted[dayIndex];
        
        // Calculate streak
        let streak = 0;
        for (let i = dayIndex; i >= 0 && newCompleted[i]; i--) {
          streak++;
        }
        
        return { ...habit, completed: newCompleted, streak };
      }
      return habit;
    }));
  };

  const removeHabit = (habitId: string) => {
    setHabits(habits.filter(habit => habit.id !== habitId));
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span>Alpha Habits</span>
          <Button 
            size="sm" 
            variant="ghost"
            onClick={() => setIsAddingHabit(!isAddingHabit)}
          >
            {isAddingHabit ? (
              <X className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {isAddingHabit && (
          <div className="flex gap-2 mb-4">
            <Input 
              placeholder="New habit" 
              value={newHabit} 
              onChange={(e) => setNewHabit(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddHabit}>Add</Button>
          </div>
        )}
        
        <div className="space-y-4">
          <div className="grid grid-cols-[1fr_repeat(7,30px)_40px] gap-1 items-center text-center text-sm font-semibold text-muted-foreground">
            <div className="text-left">Habit</div>
            {days.map((day, i) => (
              <div key={i}>{day}</div>
            ))}
            <div>🔥</div>
          </div>
          
          {habits.map(habit => (
            <div key={habit.id} className="grid grid-cols-[1fr_repeat(7,30px)_40px] gap-1 items-center">
              <div className="text-sm font-medium truncate">{habit.name}</div>
              
              {habit.completed.map((isCompleted, dayIndex) => (
                <Button
                  key={dayIndex}
                  size="sm"
                  variant={isCompleted ? "default" : "outline"}
                  className="w-7 h-7 p-0"
                  onClick={() => toggleHabit(habit.id, dayIndex)}
                >
                  {isCompleted && <Check className="h-3 w-3" />}
                </Button>
              ))}
              
              <div className="text-center font-bold">
                {habit.streak > 0 && habit.streak}
              </div>
              
              <Button
                size="sm"
                variant="ghost"
                className="ml-2 h-7 w-7 p-0"
                onClick={() => removeHabit(habit.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
          
          {habits.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No habits added yet. Click + to add one.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
