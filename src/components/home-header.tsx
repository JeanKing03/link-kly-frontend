"use client";

import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";

interface HomeHeaderProps {
  onAuthClick: () => void;
}

export function HomeHeader({ onAuthClick }: HomeHeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LinkIcon className="h-6 w-6" />
          <span className="font-bold text-xl">Linkly</span>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={onAuthClick}>
            Sign In
          </Button>
          <Button onClick={onAuthClick}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
