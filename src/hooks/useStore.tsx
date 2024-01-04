import { create } from "zustand";

export interface IStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const useStore = create<IStore>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set(() => ({ isLoggedIn: status })),
}));

export default useStore;
