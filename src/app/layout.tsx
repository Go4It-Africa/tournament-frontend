import '@/styles/globals.css';
import type { Metadata } from 'next';
//import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Go4It Tournaments - Manage your tournaments',
  description: '',
  keywords: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
