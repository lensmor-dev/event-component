import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <main className="w-full max-w-6xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold">
            Design Tokens System
          </h1>
          <p className="text-lg text-muted-foreground">
            基于 Design Tokens 的现代化设计系统
          </p>
        </div>

        {/* 颜色系统展示 */}
        <Card>
          <CardHeader>
            <CardTitle>颜色系统</CardTitle>
            <CardDescription>完整的色阶体系 (50-950)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Neutral */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Neutral 中性色</h3>
              <div className="flex gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="flex-1 space-y-1">
                    <div
                      className={`h-16 rounded-lg bg-neutral-${shade} border border-border`}
                    />
                    <div className="text-xs text-center text-muted-foreground">{shade}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Primary 主品牌色</h3>
              <div className="flex gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="flex-1 space-y-1">
                    <div
                      className={`h-16 rounded-lg bg-primary-${shade} border border-border`}
                    />
                    <div className="text-xs text-center text-muted-foreground">{shade}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Success 成功色</h3>
              <div className="flex gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="flex-1 space-y-1">
                    <div
                      className={`h-16 rounded-lg bg-success-${shade} border border-border`}
                    />
                    <div className="text-xs text-center text-muted-foreground">{shade}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Danger 危险色</h3>
              <div className="flex gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="flex-1 space-y-1">
                    <div
                      className={`h-16 rounded-lg bg-danger-${shade} border border-border`}
                    />
                    <div className="text-xs text-center text-muted-foreground">{shade}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Warning 警告色</h3>
              <div className="flex gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="flex-1 space-y-1">
                    <div
                      className={`h-16 rounded-lg bg-warning-${shade} border border-border`}
                    />
                    <div className="text-xs text-center text-muted-foreground">{shade}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 组件展示 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>按钮组件</CardTitle>
              <CardDescription>各种按钮样式和变体</CardDescription>
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
              <CardTitle>输入组件</CardTitle>
              <CardDescription>文本输入框示例</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Enter your password" />
            </CardContent>
          </Card>
        </div>

        {/* 语义化颜色 */}
        <Card>
          <CardHeader>
            <CardTitle>语义化颜色</CardTitle>
            <CardDescription>自动响应深色/浅色主题</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-medium">
                  Primary
                </div>
                <div className="text-xs text-center text-muted-foreground">primary / primary-foreground</div>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center font-medium">
                  Secondary
                </div>
                <div className="text-xs text-center text-muted-foreground">secondary / secondary-foreground</div>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-success text-success-foreground flex items-center justify-center font-medium">
                  Success
                </div>
                <div className="text-xs text-center text-muted-foreground">success / success-foreground</div>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-destructive text-destructive-foreground flex items-center justify-center font-medium">
                  Destructive
                </div>
                <div className="text-xs text-center text-muted-foreground">destructive / destructive-foreground</div>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-warning text-warning-foreground flex items-center justify-center font-medium">
                  Warning
                </div>
                <div className="text-xs text-center text-muted-foreground">warning / warning-foreground</div>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-muted text-muted-foreground flex items-center justify-center font-medium">
                  Muted
                </div>
                <div className="text-xs text-center text-muted-foreground">muted / muted-foreground</div>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-medium">
                  Accent
                </div>
                <div className="text-xs text-center text-muted-foreground">accent / accent-foreground</div>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-card text-card-foreground border border-border flex items-center justify-center font-medium">
                  Card
                </div>
                <div className="text-xs text-center text-muted-foreground">card / card-foreground</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 字体系统 */}
        <Card>
          <CardHeader>
            <CardTitle>字体系统</CardTitle>
            <CardDescription>标题与正文样式</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h1>H1 标题 (48px)</h1>
              <h2>H2 标题 (36px)</h2>
              <h3>H3 标题 (30px)</h3>
              <h4>H4 标题 (24px)</h4>
              <h5>H5 标题 (20px)</h5>
              <h6>H6 标题 (18px)</h6>
            </div>
            <div className="space-y-2">
              <p className="text-base">正文 Base (16px) - 这是默认的正文大小</p>
              <p className="text-sm text-muted-foreground">正文 Small (14px) - 这是较小的文本</p>
              <p className="text-xs text-muted-foreground">正文 XSmall (12px) - 这是最小的文本</p>
            </div>
          </CardContent>
        </Card>

        {/* 提示 */}
        <div className="text-center text-sm text-muted-foreground">
          <p>💡 提示：在浏览器中切换深色/浅色主题，观察颜色自动变化</p>
        </div>
      </main>
    </div>
  );
}
