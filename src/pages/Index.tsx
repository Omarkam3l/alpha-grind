
import React, { useState, useEffect } from "react";
import { Layout } from "@/components/layout/layout";
import { StatsGrid } from "@/components/stats-card";
import { HabitTracker } from "@/components/habit-tracker";
import { Timer } from "@/components/timer";
import { RandomQuoteCard } from "@/components/quote-card";
import { WorkoutGrid } from "@/components/workout-card";
import { Dumbbell, Trophy, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardingModal } from "@/components/onboarding-modal";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  useEffect(() => {
    // Check if this is the user's first visit
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
      localStorage.setItem("hasSeenOnboarding", "true");
    }
  }, []);

  return (
    <Layout>
      <OnboardingModal open={showOnboarding} onOpenChange={setShowOnboarding} />
      
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative mb-10 overflow-hidden rounded-lg bg-gradient-to-r from-secondary to-black p-8">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl font-bold mb-2">Welcome to Alpha Ops Grind</h1>
            <p className="text-lg opacity-90 mb-6">
              Push beyond your limits. Track your progress. Achieve greatness.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                <Dumbbell className="mr-2 h-5 w-5" />
                Start Workout
              </Button>
              <Button variant="outline" size="lg">
                <Trophy className="mr-2 h-5 w-5" />
                View Progress
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/30 blur-xl" />
        </section>
        
        {/* Stats Overview */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <Button variant="ghost" className="flex items-center text-sm">
              Full Details
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <StatsGrid />
        </section>
        
        {/* Today's Workouts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Workouts</h2>
          <WorkoutGrid />
        </section>
        
        {/* Two-column layout for tracker and timer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <HabitTracker />
          </div>
          <div className="space-y-6">
            <Timer className="animate-slide-in" />
            <RandomQuoteCard className="animate-slide-in [animation-delay:200ms]" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
