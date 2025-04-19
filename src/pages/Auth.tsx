
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [error, setError] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already signed in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/progress");
      }
      setCheckingSession(false);
    };
    
    checkSession();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setConfirmationMessage("");
    
    const { error } = await supabase.auth.signUp({ email, password });
    
    if (error) {
      setError(error.message);
      toast.error(error.message);
    } else {
      setConfirmationMessage("Signup successful! Please check your email for confirmation.");
      toast.success("Signup successful! Please check your email.");
    }
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setConfirmationMessage("");
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      setError(error.message);
      toast.error(error.message);
    } else {
      setConfirmationMessage("Login successful!");
      toast.success("Welcome back!");
      navigate("/progress");
    }
    setLoading(false);
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Checking session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Progress Tracker</CardTitle>
          <CardDescription>Sign in or create an account to start tracking your progress</CardDescription>
        </CardHeader>
        <CardContent>
          {confirmationMessage && (
            <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>{confirmationMessage}</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Button onClick={handleSignIn} disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Sign In
              </Button>
              <Button onClick={handleSignUp} variant="outline" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <p className="text-xs text-muted-foreground">
            For demo purposes, you might want to disable email confirmation in the Supabase dashboard.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
