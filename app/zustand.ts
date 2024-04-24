import { create } from 'zustand'

interface AppState {
  isNavExpanded: boolean
}

type AppActions = {
  toggleNavExpanded: () => void
}

export const useAppStore = create<AppState & AppActions>()((set, get) => ({
  isNavExpanded: true,
  toggleNavExpanded: () => set({ isNavExpanded: !get().isNavExpanded }),
}))
