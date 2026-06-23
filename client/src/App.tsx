import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import JournalAiEraEasternIntelligence from "./pages/JournalAiEraEasternIntelligence";
import JournalSoundSessionClientNotes from "./pages/JournalSoundSessionClientNotes";
import JournalNew from "./pages/JournalTechniquesCompassion";
import JournalTimeBasedQimenStrategy from "./pages/JournalTimeBasedQimenStrategy";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route
        path={"/journal-ai-era-eastern-intelligence"}
        component={JournalAiEraEasternIntelligence}
      />
      <Route
        path={"/journal-sound-session-client-notes"}
        component={JournalSoundSessionClientNotes}
      />
      <Route
        path={"/journal-techniques-compassion"}
        component={JournalNew}
      />
      <Route
        path={"/journal-time-based-qimen-strategy"}
        component={JournalTimeBasedQimenStrategy}
      />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
