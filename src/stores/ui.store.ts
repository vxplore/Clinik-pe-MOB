import { create } from "zustand";

interface UIState {
  isLoading: boolean;
  error: string | null;

  showLoader: () => void;
  hideLoader: () => void;

  setError: (message: string) => void;
  clearError: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  error: null,

  showLoader: () => set({ isLoading: true }),
  hideLoader: () => set({ isLoading: false }),

  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),
}));
