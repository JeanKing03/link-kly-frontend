"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.querySelector("[data-form-section]");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Shorten your links with
            <span className="text-primary block">elegance and simplicity</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform long URLs into short, memorable links. Manage, track, and
            share your links professionally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToForm} className="text-lg px-8">
              Start for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              No limits • No credit card required
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Super Fast</h3>
              <p className="text-sm text-muted-foreground text-center">
                Shorten links in seconds with our optimized technology
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Secure and Reliable</h3>
              <p className="text-sm text-muted-foreground text-center">
                Your links are protected with top security
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Detailed Analytics</h3>
              <p className="text-sm text-muted-foreground text-center">
                Track clicks and get insights on your links
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
