import Head from 'next/head';
import React from 'react'
import { useRouter } from 'next/router';
import Header from '../components/Header';
import ComponentsSidebar from '../components/ComponentsSidebar';
import '../globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { markdoc } = pageProps;
  const frontmatter = markdoc?.frontmatter || {};
  
  // Check if we're on a components page
  const isComponentsPage = router.asPath.startsWith('/components');

  // Preload design system components
  React.useEffect(() => {
    const componentNames = ['button', 'card', 'alert', 'accordion', 'breadcrumb', 'modal'];
    
    componentNames.forEach(name => {
      // Preload from API route
      fetch(`/api/ds-components/sample-${name}`)
        .then(response => {
          if (response.ok) {
            console.log(`Preloaded sample-${name} from local API`);
          }
        })
        .catch(err => {
          console.log(`Could not preload sample-${name} from local API:`, err.message);
        });
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          {frontmatter.title ? `${frontmatter.title} - Sample Design System` : 'Sample Design System - Documentation'}
        </title>
        <meta
          name="description"
          content={frontmatter.description || 'Comprehensive documentation for the Sample Design System - A modern web component library built with Lit Framework'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preload critical design system components */}
        <link rel="modulepreload" href="/api/ds-components/sample-button" />
        <link rel="modulepreload" href="/api/ds-components/sample-card" />
        <link rel="modulepreload" href="/api/ds-components/sample-alert" />
        <link rel="modulepreload" href="/api/ds-components/sample-accordion" />
      </Head>

      <div className="min-h-screen max-w-7xl mx-auto bg-white">
        <Header />

        {isComponentsPage ? (
          // Layout with sidebar for components pages
          <div className="flex flex-col lg:flex-row">
            <ComponentsSidebar />
            <main className="flex-1 min-w-0">
              <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900">
                  <Component {...pageProps} />
                </div>
              </div>
            </main>
          </div>
        ) : (
          // Default layout for other pages
          <main className="bg-white w-full">
            <div className="w-full mx-auto py-12">
              <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900">
                <Component {...pageProps} />
              </div>
            </div>
          </main>
        )}

        <footer className="border-t border-gray-100 bg-white mt-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
            <div className="text-center text-gray-600">
              <p className="font-medium text-gray-900">Sample Design System</p>
              <p className="mt-2 text-sm">Built with Lit Framework • Documentation powered by Next.js & Markdoc</p>
              <p className="mt-1 text-xs">Interactive components from NPM package: sample-design-system-educkf</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 