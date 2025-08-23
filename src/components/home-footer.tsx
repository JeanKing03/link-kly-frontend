"use client"

import { LinkIcon } from "lucide-react"

export function HomeFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-5 w-5" />
            <span className="font-semibold">Linkly</span>
          </div>

          <p className="text-sm text-muted-foreground max-w-md">
            La forma más elegante de acortar y gestionar tus enlaces. Simple, rápido y confiable.
          </p>

          <div className="pt-4 border-t w-full">
            <p className="text-xs text-muted-foreground">© 2024 Linkly. Hecho con ❤️ para simplificar tus enlaces.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
