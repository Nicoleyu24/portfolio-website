import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio Website
          </h1>
          <ThemeToggle />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Light Blue Theme
                <Badge variant="secondary">Light Mode</Badge>
              </CardTitle>
              <CardDescription>
                Clean and energetic light theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This portfolio uses a creative and energetic theme with light blue tones for light mode.
              </p>
              <Button className="w-full">Primary Action</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Dark Purple Theme
                <Badge variant="secondary">Dark Mode</Badge>
              </CardTitle>
              <CardDescription>
                Rich and vibrant dark theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Switch to dark mode to see the stunning purple color scheme that brings your portfolio to life.
              </p>
              <Button variant="outline" className="w-full">Secondary Action</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                Beautiful gradients and accents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary" />
                  <span className="text-sm">Primary Blue/Purple</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent" />
                  <span className="text-sm">Accent Colors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary" />
                  <span className="text-sm">Secondary Tones</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}