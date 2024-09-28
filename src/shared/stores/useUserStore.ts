import { Routes } from '@/shared/enums';
import { create } from 'zustand';

interface IUserStore {
  setToken: (token: string | null) => void;
  setUser: (data: null) => void;
  token: string | null;
  logout: () => void;
  user: null;
}

export const useUserStore = create<IUserStore>((set) => ({
  logout: () => {
    localStorage.removeItem('accessToken');
    window.location.href = Routes.LOGIN;
    set(() => ({ token: null }));
  },
  setToken: (token) => {
    !!token && localStorage.setItem('accessToken', token);
    set(() => ({ token }));
  },
  setUser: (user) => set(() => ({ user })),
  token: null,
  user: null,
}));
