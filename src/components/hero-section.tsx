"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.querySelector("[data-form-section]")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Acorta tus enlaces con
            <span className="text-primary block">elegancia y simplicidad</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforma URLs largas en enlaces cortos y memorables. Gestiona, rastrea y comparte tus enlaces de manera
            profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToForm} className="text-lg px-8">
              Comenzar Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">Sin límites • Sin tarjeta de crédito</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Súper Rápido</h3>
              <p className="text-sm text-muted-foreground text-center">
                Acorta enlaces en segundos con nuestra tecnología optimizada
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Seguro y Confiable</h3>
              <p className="text-sm text-muted-foreground text-center">
                Tus enlaces están protegidos con la máxima seguridad
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Análisis Detallado</h3>
              <p className="text-sm text-muted-foreground text-center">
                Rastrea clics y obtén insights sobre tus enlaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
