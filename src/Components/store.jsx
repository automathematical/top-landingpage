import create from 'zustand'

export const useStore = create((set) => ({
  data: 'More coming soon!',
  setData: (newData) => set({ data: newData }),
}))
