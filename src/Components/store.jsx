import { create } from 'zustand'

export const useStore = create(set => ({
  data: 'Runwell Studio',
  setData: newData => set({ data: newData }),
}))
