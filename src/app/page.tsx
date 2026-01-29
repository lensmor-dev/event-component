import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 dark:bg-zinc-950">
      <main className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Next.js + Shadcn UI
          </h1>
          <p className="text-muted-foreground">
            A modern React application with Tailwind CSS and Shadcn UI components
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
              <CardDescription>Various button styles and variants</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Component</CardTitle>
              <CardDescription>Text input field example</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Enter your password" />
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>
                Start building your application with these powerful tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This project is configured with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Next.js 16 with App Router</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS 4</li>
                <li>Shadcn UI (New York style)</li>
                <li>Lucide React icons</li>
              </ul>
              <div className="flex gap-2 pt-4">
                <Button>Start Building</Button>
                <Button variant="outline">View Documentation</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
