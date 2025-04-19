
import { useState } from "react";
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
  
  const handleSubmit = async (category: string) => {
    try {
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
              disabled={!values[category as keyof typeof values]}
            >
              Save
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
