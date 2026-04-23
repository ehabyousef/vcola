import { create } from "zustand";

interface state {
  ready: boolean;
  isReady: () => void;
}

export const useStore = create<state>((set) => ({
  ready: false,
  isReady: () => set({ ready: true }),
}));
