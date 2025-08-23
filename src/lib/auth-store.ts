import { create } from "zustand";
import { axiosInstance } from "./axios";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  setUser: (user) => set({ user }),

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post(
        "/users/login",
        { email, password },
        { withCredentials: true }
      );
      const { token } = res.data;
      const userRes = await axiosInstance.get("/users/me", {
        headers: { authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      set({ user: userRes.data[0] });
      localStorage.setItem("linkly-user", JSON.stringify(userRes.data));
      set({ isLoading: false });
      return true;
    } catch {
      set({ isLoading: false });
      return false;
    }
  },

  register: async (name, email, password) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/api/users", {
        name,
        email,
        password,
      });
      set({ user: res.data });
      localStorage.setItem("linkly-user", JSON.stringify(res.data));
      set({ isLoading: false });
      return true;
    } catch {
      set({ isLoading: false });
      return false;
    }
  },

  logout: () => {
    set({ user: null });
    localStorage.removeItem("linkly-user");
    axiosInstance
      .post("/api/users/logout", {}, { withCredentials: true })
      .catch(() => {});
  },
}));
