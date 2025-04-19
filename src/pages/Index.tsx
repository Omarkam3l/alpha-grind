
import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout/layout";
import { HabitTracker } from "@/components/habit-tracker";
import { Timer } from "@/components/timer";
import { RandomQuoteCard } from "@/components/quote-card";
import { WorkoutGrid } from "@/components/workout-card";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { ProgressStats } from "@/components/progress/ProgressStats";
import { ProgressInput } from "@/components/progress/ProgressInput";

const Index = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [statsKey, setStatsKey] = useState(0);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
      } else {
        setSession(session);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setSession(session);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleProgressUpdate = () => {
    setStatsKey(prev => prev + 1);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative mb-10 overflow-hidden rounded-lg bg-gradient-to-r from-secondary to-black p-8">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl font-bold mb-2">Welcome to Alpha Ops Grind</h1>
            <p className="text-lg opacity-90 mb-6">
              Push beyond your limits. Track your progress. Achieve greatness.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/30 blur-xl" />
        </section>

        {/* Progress Section */}
        <section className="mb-8 space-y-6">
          <h2 className="text-2xl font-bold">Today's Progress</h2>
          <ProgressStats key={statsKey} />
          <ProgressInput onUpdate={handleProgressUpdate} />
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
