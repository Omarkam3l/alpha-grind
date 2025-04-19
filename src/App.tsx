
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "./pages/Index";
import WorkoutsPage from "./pages/Workouts";
import ProgressPage from "./pages/Progress";
import HabitsPage from "./pages/Habits";
import GoalsPage from "./pages/Goals";
import TimerPage from "./pages/TimerPage";
import CalendarPage from "./pages/Calendar";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="min-h-screen bg-background text-foreground antialiased">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/workouts" element={<WorkoutsPage />} />
                  <Route path="/progress" element={<ProgressPage />} />
                  <Route path="/habits" element={<HabitsPage />} />
                  <Route path="/goals" element={<GoalsPage />} />
                  <Route path="/timer" element={<TimerPage />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/settings" element={<Settings />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
