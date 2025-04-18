
import React, { ErrorInfo, Component } from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full bg-card rounded-lg border border-border p-6 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6 mx-auto">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-2">Something Went Wrong</h2>
            
            <p className="text-muted-foreground mb-6 text-center">
              The Alpha Ops Grind app encountered an error. Please try again.
            </p>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full" onClick={this.handleReload}>
                <RefreshCcw className="mr-2 h-4 w-4" />
                Restart Application
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
