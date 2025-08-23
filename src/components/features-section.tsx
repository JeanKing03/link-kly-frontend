"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link2, BarChart3, Palette, Globe, Lock, Smartphone } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Link2,
      title: "Enlaces Personalizados",
      description: "Crea enlaces con códigos personalizados que reflejen tu marca",
      badge: "Popular",
    },
    {
      icon: BarChart3,
      title: "Estadísticas en Tiempo Real",
      description: "Monitorea clics, ubicaciones y rendimiento de tus enlaces",
      badge: null,
    },
    {
      icon: Palette,
      title: "Interfaz Minimalista",
      description: "Diseño limpio y elegante que se enfoca en la funcionalidad",
      badge: null,
    },
    {
      icon: Globe,
      title: "Acceso Global",
      description: "Tus enlaces funcionan en cualquier parte del mundo, 24/7",
      badge: null,
    },
    {
      icon: Lock,
      title: "Privacidad Garantizada",
      description: "Tus datos están seguros y nunca compartimos tu información",
      badge: null,
    },
    {
      icon: Smartphone,
      title: "Totalmente Responsive",
      description: "Funciona perfectamente en móviles, tablets y escritorio",
      badge: null,
    },
  ]

  return (
    <section className="py-20 bg-background" data-form-section>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Todo lo que necesitas para gestionar enlaces</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas profesionales en una interfaz simple y elegante
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative">
              {feature.badge && <Badge className="absolute -top-2 -right-2 z-10">{feature.badge}</Badge>}
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
