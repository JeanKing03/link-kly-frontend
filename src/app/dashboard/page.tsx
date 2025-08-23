"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth-store";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardStats } from "@/components/dashboard-stats";
import { LinksList } from "@/components/links-list";
import { UrlShortenerForm } from "@/components/url-shortener-form";
import { useLinkStore } from "@/lib/link-store";

export default function DashboardPage() {
  const { user, isLoading } = useAuthStore();
  const { fetchLinks } = useLinkStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
    if (user) {
      fetchLinks();
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Bienvenido, {user?.firstName}</h1>
          <p className="text-muted-foreground">
            Gestiona tus enlaces acortados
          </p>
        </div>

        <DashboardStats />

        <div className="flex justify-center">
          <UrlShortenerForm onAuthRequired={() => {}} />
        </div>

        <LinksList />
      </main>
    </div>
  );
}
