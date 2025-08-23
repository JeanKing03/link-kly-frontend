"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLinkStore } from "@/lib/link-store";
import { Copy, ExternalLink, Trash2, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function LinksList() {
  const { links, deleteLink } = useLinkStore();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (url: string, id: string) => {
    const shortUrl = `${window.location.origin}/${url}`;
    await navigator.clipboard.writeText(shortUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este enlace?")) {
      deleteLink(id);
    }
  };

  if (links.length === 0) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle>No tienes enlaces aún</CardTitle>
          <CardDescription>
            Crea tu primer enlace acortado usando el formulario de arriba
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Tus Enlaces</h2>
        <Badge variant="secondary">{links.length} enlaces</Badge>
      </div>

      <div className="grid gap-4">
        {links
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((link) => (
            <Card key={link._id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between space-x-4">
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium truncate">Enlace</h3>
                      <Badge variant="outline">{link.clicks} clics</Badge>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">
                          Corto:
                        </span>
                        <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                          {link.shortCode}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            copyToClipboard(link.shortCode, link._id)
                          }
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                        {copiedId === link._id && (
                          <span className="text-xs text-green-600">
                            ¡Copiado!
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">
                          Original:
                        </span>
                        <span className="text-sm truncate max-w-md">
                          {link.originalUrl}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Creado: {formatDate(link.createdAt)}</span>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() =>
                          copyToClipboard(link.shortCode, link._id)
                        }
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar enlace
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a
                          href={link.shortCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Abrir enlace
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(link._id)}
                        className="text-destructive focus:text-destructive"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
