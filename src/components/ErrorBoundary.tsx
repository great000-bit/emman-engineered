import { Component, ErrorInfo, ReactNode } from "react";
import { RefreshCw } from "lucide-react";
import { HeroCTAAnchor, HeroCTAButton } from "@/components/shared/HeroCTA";
import KeyboardVisual from "@/components/shared/KeyboardVisual";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Catches unexpected render/runtime errors anywhere in the component tree below it and
 * shows a branded fallback instead of a blank white screen. This only catches errors
 * during React's render/lifecycle/constructor phases — it cannot catch errors in event
 * handlers, async code, or errors thrown outside React (those should use their own
 * try/catch), and it does not catch errors in itself.
 *
 * Wraps the whole app in App.tsx, outside the router, so a crash in any single route
 * still gets this fallback rather than taking down the entire page.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary] caught a render error:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
        <KeyboardVisual />

        {/* No Header/Footer here — a render crash anywhere in the tree could mean those
            are unsafe to render too, so this fallback is deliberately self-contained. */}
        <div className="relative z-10 flex items-center gap-2 px-4 sm:px-6 pt-6">
          <img
            src="/favicon.png"
            alt="Creative Emman Limited logo"
            width={32}
            height={32}
            decoding="async"
            className="w-8 h-8 object-contain"
          />
          <span className="font-brand text-sm font-bold text-primary-foreground tracking-tight">
            Creative<span className="text-accent">Emman</span>
          </span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <span className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Error</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
            Something went wrong
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/60 max-w-md mb-10">
            The page could not load properly. Please return home or refresh the page.
          </p>
          <div className="flex flex-row gap-3 items-center">
            <HeroCTAAnchor href="/" label="Go Home" />
            <HeroCTAButton
              label="Reload Page"
              icon={RefreshCw}
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
