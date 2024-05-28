import { User } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface AppState {
  user: User
  isNavExpanded: boolean
}

type AppActions = {
  setUser: (user: User | undefined) => void
  toggleNavExpanded: () => void
}

export const useAppStore = create<AppState & AppActions>()(
  devtools(
    persist(
      (set, get) => ({
        user: {
          name: undefined,
          email: undefined,
          image: undefined,
          id: undefined,
          emailVerified: null,
        },
        isNavExpanded: false,
        setUser: (userData: User | undefined) => set({ user: userData }),
        toggleNavExpanded: () => set({ isNavExpanded: !get().isNavExpanded }),
      }),
      {
        name: 'appStore',
        storage: createJSONStorage(() => localStorage),
        // specify items saved in LS with the partialize api
        partialize: (state) => ({ isNavExpanded: state.isNavExpanded }),
      },
    ),
  ),
)

// type User = {
//   user: {
//     name: string | null | undefined
//     email: string | null | undefined
//     image?: string | null | undefined
//     id: string | null | undefined
//     emailVerified?: any
//   }
// }
