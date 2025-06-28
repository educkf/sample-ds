import Head from 'next/head';
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
      </Head>

      <div className="min-h-screen max-w-7xl mx-auto bg-white">
        <Header />

        {isComponentsPage ? (
          // Layout with sidebar for components pages
          <div className="flex flex-col lg:flex-row">
            <ComponentsSidebar />
            <main className="flex-1 min-w-0">
              <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="prose prose-gray max-w-none">
                  <Component {...pageProps} />
                </div>
              </div>
            </main>
          </div>
        ) : (
          // Default layout for other pages
          <main className="bg-white w-full">
            <div className="w-full mx-auto py-12">
              <div className="prose prose-gray max-w-none">
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 