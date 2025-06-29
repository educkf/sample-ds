import MdxLayout from '../mdx-layout';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MdxLayout>{children}</MdxLayout>;
} 