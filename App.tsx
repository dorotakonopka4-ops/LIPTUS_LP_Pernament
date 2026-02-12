import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HomeVariantB from "./pages/HomeVariantB";
import { getABTestVariant, getVariantFromURL, setABTestVariant } from "./lib/abtest";
import { useEffect, useState } from "react";

function Router() {
  const [variant, setVariant] = useState<'A' | 'B' | null>(null);

  useEffect(() => {
    // Check URL parameter first (for testing)
    const urlVariant = getVariantFromURL();
    if (urlVariant) {
      setABTestVariant(urlVariant);
      setVariant(urlVariant);
    } else {
      // Get or assign variant
      const assignedVariant = getABTestVariant();
      setVariant(assignedVariant);
    }
  }, []);

  // Show nothing until variant is determined
  if (!variant) {
    return <div className="min-h-screen bg-background" />;
  }

  const HomePage = variant === 'B' ? HomeVariantB : Home;

  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      {/* Testing routes */}
      <Route path={"/variant-a"} component={Home} />
      <Route path={"/variant-b"} component={HomeVariantB} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
