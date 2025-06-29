# Next.js with MDX

This is a [Next.js](https://nextjs.org) project configured to use MDX for creating rich, interactive content pages.

## What's Been Set Up

✅ **MDX Configuration**: Complete setup with `@next/mdx` for writing JSX in Markdown  
✅ **Custom Components**: Global MDX component overrides with beautiful Tailwind styling  
✅ **Typography Plugin**: Tailwind Typography for beautiful prose styling  
✅ **Example Pages**: Sample MDX pages at `/about` and `/docs`  
✅ **Shared Layout**: Consistent navigation and styling across MDX pages  
✅ **TypeScript Support**: Full TypeScript integration with MDX

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating MDX Pages

### 1. Create a new MDX file

Create a new file in the `app` directory with the `.mdx` extension:

```mdx
// app/my-page/page.mdx
export const metadata = {
  title: 'My Page',
  description: 'This is my awesome MDX page',
}

# Welcome to My Page

This is **markdown** content with JSX support!

## Features

- Write in Markdown
- Use React components
- Add metadata
- Custom styling

```typescript
// You can even add code blocks!
function hello() {
  return "Hello from MDX!";
}
```

Check out this [link](https://nextjs.org/docs/app/guides/mdx) for more info.
```

### 2. Add a layout (optional)

Create a `layout.tsx` file in the same directory:

```tsx
// app/my-page/layout.tsx
import MdxLayout from '../mdx-layout';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MdxLayout>{children}</MdxLayout>;
}
```

## File Structure

```
app/
├── about/
│   ├── page.mdx          # About page content
│   └── layout.tsx        # About page layout
├── docs/
│   ├── page.mdx          # Documentation content
│   └── layout.tsx        # Docs page layout
├── mdx-layout.tsx        # Shared MDX layout component
├── page.tsx              # Homepage
└── layout.tsx            # Root layout

mdx-components.tsx        # Global MDX component overrides
next.config.ts           # Next.js config with MDX support
tailwind.config.ts       # Tailwind config with typography
```

## MDX Features

### Custom Components

All MDX content uses custom styled components defined in `mdx-components.tsx`:

- **Headings**: Styled with proper hierarchy and spacing
- **Paragraphs**: Optimized line height and spacing
- **Lists**: Clean bullet points and numbering
- **Links**: Blue accent color with hover effects
- **Code blocks**: Syntax highlighting with dark theme support
- **Blockquotes**: Left border with italic styling

### Metadata

Export metadata from your MDX files for SEO:

```mdx
export const metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
}
```

### Tailwind Typography

All MDX content is wrapped with Tailwind's `prose` classes for beautiful typography:

- Responsive text sizing
- Optimal line spacing
- Dark mode support
- Consistent vertical rhythm

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [MDX Documentation](https://mdxjs.com/) - learn about MDX syntax and features
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) - learn about the typography plugin

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
