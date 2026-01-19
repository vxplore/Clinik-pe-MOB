import { useUIStore } from "../stores/ui.store";
import { useEffect, useState } from "react";

export default function Loader() {
  const isLoading = useUIStore((s) => s.isLoading);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsVisible(true), 0);
      // Slight delay before animation starts for smoother transition
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setTimeout(() => setIsAnimating(false), 0);
      // Keep visible during fade out
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isAnimating ? "bg-black/40 backdrop-blur-sm" : "bg-black/0"
      }`}
      style={{
        pointerEvents: isAnimating ? "auto" : "none",
      }}
    >
      <div
        className={`relative transition-all duration-300 ${
          isAnimating
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-2"
        }`}
      >
        {/* Main loader card */}
        <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 min-w-[200px]">
          {/* Spinner */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-12 h-12">
              {/* Outer ring */}
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              {/* Animated ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
              {/* Inner glow effect */}
              <div className="absolute inset-2 bg-blue-50 rounded-full opacity-20"></div>
            </div>

            {/* Text with subtle animation */}
            {/* <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-gray-700">Loading</span>
              <span className="flex gap-0.5">
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </span>
            </div> */}
          </div>
        </div>

        {/* Subtle glow effect behind card */}
        <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-2xl -z-10 scale-110"></div>
      </div>
    </div>
  );
}
