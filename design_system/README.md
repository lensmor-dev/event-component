# Design Tokens 设计系统

本项目的设计系统基于 Design Tokens 构建，支持浅色/深色双主题。

## 📁 文件结构

```
design_system/
├── $metadata.json          # Token 加载顺序配置
├── $themes.json            # 主题配置
├── Primitives/
│   └── Mode 1.json         # 基础设计 tokens (原始值)
└── Tokens/
    ├── Light.json          # 浅色主题 (语义化 tokens)
    └── Dark.json           # 深色主题 (语义化 tokens)
```

## 🎨 设计系统架构

### 双层架构

1. **Primitives (基础层)** - `Primitives/Mode 1.json`
   - 定义所有原始设计值（颜色、字体、间距等）
   - 不包含语义化命名，仅提供基础色阶

2. **Tokens (语义层)** - `Tokens/Light.json` & `Tokens/Dark.json`
   - 通过引用 Primitives 定义语义化 tokens
   - 使用 `{Neutral.500}` 语法引用基础层
   - 支持不同主题的配置

## 🎯 使用方式

### 在 Tailwind CSS 中使用

Design Tokens 已集成到 `globals.css` 中，可以直接在 Tailwind 类名中使用：

#### 颜色系统

```tsx
// 基础色阶 (50-950)
<div className="bg-neutral-100 text-neutral-900" />
<div className="bg-primary-500 text-white" />
<div className="bg-success-600 hover:bg-success-700" />
<div className="bg-danger-500 text-danger-50" />
<div className="bg-warning-400" />

// 语义化颜色
<div className="bg-background text-foreground" />
<div className="bg-card text-card-foreground" />
<div className="bg-primary text-primary-foreground" />
<div className="bg-destructive text-destructive-foreground" />
<div className="border border-border" />
```

#### 字号与字重

```tsx
// 字号
<h1 className="text-5xl" />  // 48px
<h2 className="text-4xl" />  // 36px
<h3 className="text-3xl" />  // 30px
<p className="text-base" />  // 16px
<small className="text-sm" /> // 14px
<span className="text-xs" />  // 12px

// 字重
<p className="font-regular" />    // 400
<p className="font-medium" />     // 500
<p className="font-semibold" />   // 600
<p className="font-bold" />       // 700
<p className="font-extrabold" />  // 800
```

#### 圆角

```tsx
<div className="rounded-xs" />   // 2px
<div className="rounded-sm" />   // 4px
<div className="rounded-md" />   // 6px
<div className="rounded-lg" />   // 8px
<div className="rounded-xl" />   // 12px
<div className="rounded-2xl" />  // 16px
<div className="rounded-3xl" />  // 24px
<div className="rounded-full" /> // 9999px
```

### 在 CSS 中使用

```css
/* 使用基础色阶 */
.custom-element {
  background: rgb(var(--neutral-100));
  color: rgb(var(--primary-500));
  border: 1px solid rgb(var(--neutral-200));
}

/* 使用语义化 tokens */
.card {
  background: rgb(var(--card));
  color: rgb(var(--card-foreground));
  border: 1px solid rgb(var(--border));
  border-radius: var(--radius-lg);
}

/* 响应深色模式 */
.custom-button {
  background: rgb(var(--primary));
  color: rgb(var(--primary-foreground));
}

.dark .custom-button {
  /* 自动应用深色主题变量 */
}
```

### 在 JavaScript/TypeScript 中使用

```typescript
// 读取 CSS 变量
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-500');

// 动态设置主题
document.documentElement.classList.toggle('dark');
```

## 🎨 颜色系统

### 色阶体系

每个颜色组包含 11 个色阶 (50-950)：

| 颜色组 | 用途 | 色阶范围 |
|--------|------|----------|
| **Neutral** | 中性色/灰色 | 最浅 #fafafa → 最深 #16161f |
| **Primary** | 主品牌色/紫蓝色 | 最浅 #ebecff → 最深 #2c317a |
| **Success** | 成功状态/绿色 | 最浅 #edf8f2 → 最深 #02331b |
| **Danger** | 危险/错误/红色 | 最浅 #fdeeee → 最深 #520c0c |
| **Warning** | 警告/橙色 | 最浅 #fdf5ec → 最深 #472307 |

### 语义化颜色映射

#### Light 主题

| 语义 Token | 映射值 | 用途 |
|-----------|--------|------|
| `--background` | white | 页面背景 |
| `--foreground` | neutral-950 | 主要文字 |
| `--primary` | primary-500 | 主色按钮、链接 |
| `--secondary` | neutral-100 | 次要按钮 |
| `--muted` | neutral-50 | 次要背景 |
| `--border` | neutral-200 | 边框 |
| `--destructive` | danger-500 | 危险操作 |
| `--success` | success-500 | 成功状态 |
| `--warning` | warning-500 | 警告状态 |

#### Dark 主题

| 语义 Token | 映射值 | 用途 |
|-----------|--------|------|
| `--background` | neutral-950 | 页面背景 |
| `--foreground` | neutral-50 | 主要文字 |
| `--primary` | primary-500 | 主色按钮、链接 |
| `--secondary` | neutral-800 | 次要按钮 |
| `--muted` | neutral-900 | 次要背景 |
| `--border` | neutral-700 | 边框 |

## 📝 字体系统

### 字体家族

- **系统字体**: Inter (已配置，回退到系统 sans-serif)

### 字号预设

```
xs:   12px  // 辅助文本
sm:   14px  // 正文小号
base: 16px  // 正文
lg:   18px  // 小标题
xl:   20px  // H5
2xl:  24px  // H4
3xl:  30px  // H3
4xl:  36px  // H2
5xl:  48px  // H1
```

## 🔧 维护与更新

### 更新 Design Tokens

1. 修改 `design_system/Primitives/Mode 1.json` 更新基础色值
2. 修改 `design_system/Tokens/Light.json` 或 `Dark.json` 更新语义映射
3. 手动同步到 `src/app/globals.css` 中的 CSS 变量

### 添加新颜色

1. 在 `Primitives/Mode 1.json` 中添加新色阶：
```json
{
  "NewColor": {
    "500": { "value": "#hexcode", "type": "color" }
  }
}
```

2. 在 `Tokens/Light.json` 和 `Dark.json` 中引用：
```json
{
  "Foreground": {
    "NewColor": {
      "default": { "value": "{NewColor.500}", "type": "color" }
    }
  }
}
```

3. 在 `globals.css` 中添加 CSS 变量：
```css
:root {
  --newcolor-500: R G B;
}

@theme inline {
  --color-newcolor-500: rgb(var(--newcolor-500));
}
```

## 🌗 主题切换

### 切换深色模式

```typescript
// 添加 dark 类到 html 元素
document.documentElement.classList.add('dark');

// 移除 dark 类切换回浅色
document.documentElement.classList.remove('dark');

// 切换
document.documentElement.classList.toggle('dark');
```

### Next.js 中使用 next-themes

```bash
npm install next-themes
```

```tsx
// app/providers.tsx
'use client';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// 组件中使用
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      切换主题
    </button>
  );
}
```

## 📚 最佳实践

1. **优先使用语义化 tokens**
   ```tsx
   // ✅ 推荐
   <div className="bg-background text-foreground" />

   // ❌ 不推荐（除非需要特定色阶）
   <div className="bg-white text-neutral-950" />
   ```

2. **保持一致的间距系统**
   ```tsx
   // 使用预定义的间距
   <div className="p-4 m-6 gap-3" />
   ```

3. **使用语义化状态颜色**
   ```tsx
   <button className="bg-destructive text-destructive-foreground">删除</button>
   <div className="bg-success text-success-foreground">成功</div>
   <div className="bg-warning text-warning-foreground">警告</div>
   ```

4. **响应式设计**
   ```tsx
   <div className="text-sm md:text-base lg:text-lg" />
   ```

## 🎯 示例组件

```tsx
// Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-600',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-danger-600',
        outline: 'border border-border bg-background hover:bg-accent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-neutral-200',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export function Button({ variant, size, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size })} {...props} />;
}
```

## 📖 参考资源

- [Tailwind CSS v4 文档](https://tailwindcss.com/)
- [Design Tokens 规范](https://design-tokens.github.io/community-group/format/)
- [shadcn/ui](https://ui.shadcn.com/) - 参考实现
