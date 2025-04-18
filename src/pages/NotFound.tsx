
import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="relative">
          <h1 className="text-9xl font-black text-primary/5">404</h1>
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
            NOT FOUND
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground mt-6 mb-8 text-center max-w-md">
          The page you are looking for does not exist. Back to the grind.
        </p>
        
        <Button asChild>
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Dashboard
          </a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
