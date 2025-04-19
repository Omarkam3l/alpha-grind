
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface ProgressInputProps {
  onUpdate: () => void;
}

export function ProgressInput({ onUpdate }: ProgressInputProps) {
  const [values, setValues] = useState({
    Pushups: '',
    Running: '',
    Meditation: ''
  });
  const [userId, setUserId] = useState<string | null>(null);
  
  useEffect(() => {
    // Get the current user's ID when the component mounts
    const getUserId = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id) {
        setUserId(session.user.id);
      }
    };
    
    getUserId();
  }, []);
  
  const handleSubmit = async (category: string) => {
    try {
      if (!userId) {
        toast.error("You must be logged in to update progress");
        return;
      }
      
      const value = parseInt(values[category as keyof typeof values]);
      if (isNaN(value) || value < 0 || value > 100) {
        toast.error("Please enter a valid number between 0 and 100");
        return;
      }

      const { error } = await supabase
        .from('progress')
        .upsert({
          category,
          value,
          date: new Date().toISOString().split('T')[0],
          user_id: userId
        }, {
          onConflict: 'user_id,date,category'
        });

      if (error) throw error;
      
      setValues(prev => ({ ...prev, [category]: '' }));
      onUpdate();
      toast.success(`${category} progress updated!`);
    } catch (error) {
      console.error('Error updating progress:', error);
      toast.error("Failed to update progress");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.keys(values).map((category) => (
          <div key={category} className="flex items-center gap-4">
            <Input
              type="number"
              min="0"
              max="100"
              placeholder={`Enter ${category} progress (0-100)`}
              value={values[category as keyof typeof values]}
              onChange={(e) => setValues(prev => ({ 
                ...prev, 
                [category]: e.target.value 
              }))}
              className="flex-1"
            />
            <Button 
              onClick={() => handleSubmit(category)}
              disabled={!values[category as keyof typeof values] || !userId}
            >
              Save
            </Button>
          </div>
        ))}
        {!userId && (
          <div className="text-sm text-amber-600 dark:text-amber-400">
            Please log in to save your progress.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
