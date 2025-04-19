
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Dumbbell, Calendar, BarChart3, FlameKindling, ArrowRight } from "lucide-react";

interface OnboardingStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OnboardingStep = ({ icon, title, description }: OnboardingStepProps) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="rounded-full bg-primary/10 p-2 text-primary">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to Alpha Ops Grind</DialogTitle>
          <DialogDescription>
            Your personal fitness companion for crushing your workout goals
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <OnboardingStep
            icon={<Dumbbell className="h-5 w-5" />}
            title="Track Your Workouts"
            description="Log your daily workouts and monitor your training intensity over time."
          />
          
          <OnboardingStep
            icon={<FlameKindling className="h-5 w-5" />}
            title="Build Consistent Habits"
            description="Use the habit tracker to build a streak of daily fitness habits."
          />
          
          <OnboardingStep
            icon={<BarChart3 className="h-5 w-5" />}
            title="Monitor Progress"
            description="Visualize your improvement with detailed progress charts and metrics."
          />
          
          <OnboardingStep
            icon={<Calendar className="h-5 w-5" />}
            title="Plan Your Schedule"
            description="Organize your workout routine with the built-in calendar."
          />
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} className="w-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
