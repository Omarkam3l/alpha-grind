
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressRing } from "./ui/progress-ring";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}: StatCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription className="flex items-center mt-1">
          {trend === "up" && (
            <ArrowUp className="h-4 w-4 text-emerald-500 mr-1" />
          )}
          {trend === "down" && (
            <ArrowDown className="h-4 w-4 text-rose-500 mr-1" />
          )}
          {trendValue && (
            <span className={trend === "up" ? "text-emerald-500" : trend === "down" ? "text-rose-500" : ""}>
              {trendValue}
            </span>
          )}
          {description && (
            <span className="ml-1">{description}</span>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <StatCard
        title="Weekly Workouts"
        value="5/7"
        description="days completed"
        icon={<ProgressRing progress={71} size={50} strokeWidth={5} showPercentage={false} />}
        trend="up"
        trendValue="+2"
      />
      
      <StatCard
        title="Current Streak"
        value="12"
        description="consecutive days"
        icon={<TrendingUp className="h-5 w-5 text-accent" />}
        trend="up"
        trendValue="+3"
      />
      
      <StatCard
        title="Total Workouts"
        value="148"
        trend="neutral"
        description="total sessions"
      />
    </div>
  );
}
