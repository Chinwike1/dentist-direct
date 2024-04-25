import { create } from 'zustand'

interface AppState {
  isNavExpanded: boolean
}

type AppActions = {
  toggleNavExpanded: () => void
}

type User = {
  name: string | null | undefined
  email: string | null | undefined
  image: string | null | undefined
}

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}))

export const useAppStore = create<AppState & AppActions>()((set, get) => ({
  isNavExpanded: true,
  toggleNavExpanded: () => set({ isNavExpanded: !get().isNavExpanded }),
}))

export const useDemoStore = create((set, get) => ({
  lions: 55,
  addLions: () => set((state) => ({ lions: state.lions + 1 })),
}))
