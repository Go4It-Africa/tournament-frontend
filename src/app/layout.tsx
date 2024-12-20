import '@/styles/globals.css';
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionProviderWrapper from './_utils/sessionProviderWrapper';
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
    <SessionProviderWrapper>
      <html lang='en' suppressHydrationWarning={true}>
        <body suppressHydrationWarning={true}>
          <main className='w-full'>{children}</main>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}
