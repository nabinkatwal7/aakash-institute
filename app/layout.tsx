import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const lato = Lato({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Aakash Institute`,
  description: ``,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="relative w-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
