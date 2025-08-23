import { create } from "zustand";
import { axiosInstance } from "./axios";
import { error } from "console";

export interface Link {
  _id: string;
  shortCode: string;
  originalUrl: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  clicks: number;
}

interface LinkState {
  links: Link[];
  isLoading: boolean;
  fetchLinks: () => Promise<void>;
  createLink: ({
    originalUrl,
    optionalCode,
  }: {
    originalUrl: string;
    optionalCode: string;
  }) => Promise<Link | null>;
  deleteLink: (id: string) => Promise<boolean>;
  setLinks: (links: Link[]) => void;
  existsShortCode: (shortCode: string) => Promise<boolean>;
}

export const useLinkStore = create<LinkState>((set, get) => ({
  links: [],
  isLoading: false,

  setLinks: (links) => set({ links }),

  fetchLinks: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/links", {
        withCredentials: true,
      });
      set({ links: res.data.links, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  createLink: async ({ originalUrl, optionalCode = null }) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/links", {
        originalUrl,
        optionalCode,
      });
      set({ links: [res.data, ...get().links], isLoading: false });
      return res.data;
    } catch {
      set({ isLoading: false });
      return null;
    }
  },

  deleteLink: async (id) => {
    set({ isLoading: true });
    try {
      await axiosInstance.delete(`/links/${id}`, { withCredentials: true });
      set({ links: get().links.filter((l) => l._id !== id), isLoading: false });
      return true;
    } catch {
      set({ isLoading: false });
      return false;
    }
  },

  existsShortCode: async (shortCode) => {
    try {
      const res = await axiosInstance.get(`/links/optional/${shortCode}`);
      return res.data.exists;
    } catch (error) {
      return error;
    }
  },
}));
