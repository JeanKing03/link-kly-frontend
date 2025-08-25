"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth-store";
import { HomeHeader } from "@/components/home-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HomeFooter } from "@/components/home-footer";
import { AuthModal } from "@/components/auth-modal";
import { UrlShortenerForm } from "@/components/url-shortener-form";

export default function HomePage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/dashboard");
    }
  }, [user, isLoading, router]);

  const handleAuthRequired = () => {
    setIsAuthModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return null; // Redirecting to dashboard
  }

  return (
    <div className="min-h-screen bg-background">
      <HomeHeader onAuthClick={() => setIsAuthModalOpen(true)} />

      <main>
        <HeroSection />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <UrlShortenerForm onAuthRequired={handleAuthRequired} />
            </div>
          </div>
        </section>

        <FeaturesSection />
      </main>

      <HomeFooter />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
