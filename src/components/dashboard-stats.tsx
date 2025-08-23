"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLinkStore } from "@/lib/link-store";
import { LinkIcon, MousePointer, Calendar } from "lucide-react";

export function DashboardStats() {
  const { links } = useLinkStore();

  const totalLinks = links.length;
  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);
  const recentLinks = links.filter((link) => {
    const linkDate = new Date(link.createdAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return linkDate > weekAgo;
  }).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total de Enlaces
          </CardTitle>
          <LinkIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalLinks}</div>
          <p className="text-xs text-muted-foreground">Enlaces creados</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Clics</CardTitle>
          <MousePointer className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalClicks}</div>
          <p className="text-xs text-muted-foreground">Clics totales</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{recentLinks}</div>
          <p className="text-xs text-muted-foreground">Enlaces nuevos</p>
        </CardContent>
      </Card>
    </div>
  );
}
