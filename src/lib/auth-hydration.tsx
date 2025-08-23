"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/lib/auth-store";
import { axiosInstance } from "@/lib/axios";

export function AuthHydration() {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axiosInstance.get("/users/me", {});
        if (res.data && res.data[0]) {
          setUser(res.data[0]);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    }
    fetchUser();
  }, [setUser]);

  return null;
}
