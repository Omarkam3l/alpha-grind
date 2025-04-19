
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressRing } from "@/components/ui/progress-ring";
import { toast } from "sonner";

interface ProgressData {
  category: string;
  value: number;
}

export function ProgressStats() {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProgressData();
  }, []);

  const fetchProgressData = async () => {
    try {
      const { data, error } = await supabase
        .from('progress')
        .select('category, value')
        .eq('date', new Date().toISOString().split('T')[0]);
      
      if (error) throw error;
      setProgressData(data || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
      toast.error("Failed to load progress data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {['Pushups', 'Running', 'Meditation'].map((category) => {
        const data = progressData.find(p => p.category.toLowerCase() === category.toLowerCase());
        const value = data?.value || 0;
        
        return (
          <Card key={category} className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ProgressRing progress={value} size={100} showPercentage={true} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
