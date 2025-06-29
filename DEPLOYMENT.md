# 🚀 Deploying Documentation to Vercel

This guide will help you deploy your Sample Design System documentation site to Vercel.

## 📋 Prerequisites

- ✅ [Vercel Account](https://vercel.com) (free tier available)
- ✅ [GitHub Repository](https://github.com) with your code
- ✅ [Vercel CLI](https://vercel.com/cli) (optional but recommended)

## 🎯 Deployment Options

### Option 1: GitHub Integration (Recommended)

This is the easiest method and provides automatic deployments on every push.

#### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Select your repository `educkf/sample-ds`
4. Choose **"Import"**

#### Step 2: Configure Project
Vercel will automatically detect your project structure. Use these settings:

```
Project Name: sample-design-system-docs
Framework Preset: Next.js
Root Directory: ./  (keep as root)
Build Command: cd docs && npm ci && npm run build
Output Directory: docs/.next
Install Command: cd docs && npm ci
```

#### Step 3: Environment Variables (if needed)
- No environment variables are required for the current setup
- If you add analytics or other integrations later, add them here

#### Step 4: Deploy
Click **"Deploy"** and Vercel will:
- Install dependencies in the docs folder
- Build your Next.js app
- Deploy to a live URL

### Option 2: Vercel CLI Deployment

Install the Vercel CLI and deploy manually:

```bash
# Install Vercel CLI globally
npm i -g vercel

# From your project root directory
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Which scope: (your username)
# - Link to existing project: N
# - Project name: sample-design-system-docs
# - Directory: ./
```

### Option 3: One-Click Deploy

You can create a deploy button for others:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Feduckf%2Fsample-ds&project-name=sample-design-system-docs&repository-name=sample-ds-docs)

## ⚙️ Configuration Files

Your project includes these configuration files for Vercel:

### `vercel.json` (Root)
```json
{
  "name": "sample-design-system-docs",
  "buildCommand": "cd docs && npm ci && npm run build",
  "outputDirectory": "docs/.next",
  "installCommand": "cd docs && npm ci",
  "framework": "nextjs"
}
```

### `docs/next.config.ts`
```typescript
// Optimized for production with security headers
// Image optimization for CDN assets
// Redirects for better SEO
```

### `.vercelignore`
```
# Excludes unnecessary files from deployment
# Only deploys the docs folder and configuration
```

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `docs.yoursite.com`)
4. Follow DNS configuration instructions

Example DNS settings:
```
Type: CNAME
Name: docs
Value: cname.vercel-dns.com
```

## 📊 Build Information

Your docs site will be optimized for:
- ⚡ **Fast Loading**: Next.js optimizations + Vercel Edge Network
- 🔒 **Security**: Custom security headers configured
- 📱 **Mobile Friendly**: Responsive design with Tailwind CSS
- 🎨 **Interactive**: Live component playgrounds with iframe sandboxing
- 🔍 **SEO**: Proper meta tags and structured content

## 🔧 Advanced Configuration

### Build Commands
```bash
# Local development
cd docs && npm run dev

# Production build (what Vercel runs)
cd docs && npm run build

# Type checking
cd docs && npm run type-check

# Linting
cd docs && npm run lint
```

### Performance Monitoring
Vercel automatically provides:
- 📈 **Analytics**: Page views, performance metrics
- ⚡ **Speed Insights**: Core Web Vitals monitoring
- 🚨 **Error Tracking**: Runtime error monitoring

Access these in your Vercel dashboard after deployment.

### Preview Deployments
Every pull request gets a preview URL:
- 🔗 **Preview URL**: `https://sample-design-system-docs-git-[branch]-[username].vercel.app`
- ✅ **Production URL**: `https://sample-design-system-docs.vercel.app`

## 🚨 Troubleshooting

### Build Fails
1. **Check Node.js version**: Ensure Node.js 18+ in Vercel settings
2. **Dependencies**: Run `cd docs && npm ci` locally to test
3. **Build logs**: Check Vercel deployment logs for specific errors

### Missing Components
1. **Import paths**: Ensure all import paths are correct
2. **Component files**: Verify all component files exist in the repository
3. **Markdoc**: Check Markdoc configuration in `next.config.ts`

### Playground Issues
1. **CDN links**: Verify NPM package URLs are accessible
2. **iframe**: Check browser console for iframe loading errors
3. **Components**: Test component loading independently

### Performance Issues
1. **Images**: Optimize images and use Next.js Image component
2. **Bundle size**: Analyze bundle with `npm run analyze`
3. **CDN**: Ensure external resources load from CDN

## 📱 Mobile Optimization

Your docs are automatically optimized for mobile:
- 📱 **Responsive Design**: Tailwind CSS breakpoints
- 👆 **Touch Friendly**: Large click targets
- ⚡ **Fast Loading**: Optimized assets and code splitting
- 🎯 **Progressive Enhancement**: Works without JavaScript

## 🔒 Security Features

Automatic security headers configured:
- 🛡️ **Content Security**: Prevents XSS attacks
- 🔒 **Frame Protection**: Prevents clickjacking
- 🚫 **MIME Sniffing**: Blocks content type confusion
- 🔗 **Referrer Policy**: Controls referrer information

## 📈 SEO Optimization

Built-in SEO features:
- 🏷️ **Meta Tags**: Proper page titles and descriptions
- 🔗 **Open Graph**: Social media sharing optimized
- 🗺️ **Sitemap**: Automatic sitemap generation
- ⚡ **Core Web Vitals**: Optimized for Google ranking factors

## 💡 Next Steps

After deployment:
1. 🔗 **Share your docs**: `https://your-docs-url.vercel.app`
2. 📊 **Monitor performance**: Check Vercel Analytics
3. 🎨 **Customize domain**: Add your own domain name
4. 🔄 **Auto-deploy**: Every push to main deploys automatically

## 🤝 Support

Need help?
- 📚 [Vercel Documentation](https://vercel.com/docs)
- 💬 [GitHub Discussions](https://github.com/educkf/sample-ds/discussions)
- 🐛 [Report Issues](https://github.com/educkf/sample-ds/issues)

---

**Your documentation site will be live at: `https://sample-design-system-docs.vercel.app`** 🎉 