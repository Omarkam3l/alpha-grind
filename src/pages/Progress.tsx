
import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/layout";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsGrid } from "@/components/stats-card";
import { toast } from "sonner";

export default function ProgressPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
      } else {
        setSession(session);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setSession(session);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Your Progress</h1>
        <StatsGrid />
        
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Pushups</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Running</span>
                <span>60%</span>
              </div>
              <Progress value={60} />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Meditation</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
