"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/auth-store";
import { LogOut, LinkIcon } from "lucide-react";
import Link from "next/link";

export function DashboardHeader() {
  const { user, logout } = useAuthStore();

  if (!user) {
  }

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <LinkIcon className="h-6 w-6" />
          <span className="font-bold text-xl">Linkly</span>
        </Link>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            Hola, {user?.firstName}
          </span>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </header>
  );
}
