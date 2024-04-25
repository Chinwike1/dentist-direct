import { create } from 'zustand'

type User = {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
  id?: string | null | undefined
  emailVerified?: any
}

interface AppState {
  isNavExpanded: boolean
  user: User
}

type AppActions = {
  toggleNavExpanded: () => void
  setUser: (user: User | undefined) => void
}

// type User = {
//   user: {
//     name: string | null | undefined
//     email: string | null | undefined
//     image?: string | null | undefined
//     id: string | null | undefined
//     emailVerified?: any
//   }
// }

// export const useUserStore = create<User>((set) => ({

// }))

export const useAppStore = create<AppState & AppActions>()((set, get) => ({
  isNavExpanded: true,
  toggleNavExpanded: () => set({ isNavExpanded: !get().isNavExpanded }),
  user: {
    name: undefined,
    email: undefined,
    image: undefined,
    id: undefined,
    emailVerified: null,
  },
  setUser: (userData: User | undefined) => set({ user: userData }),
}))

// This was a test. IGNORE
// export const useDemoStore = create((set, get) => ({
//   lions: 55,
//   addLions: () => set((state) => ({ lions: state.lions + 1 })),
// }))
