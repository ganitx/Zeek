import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CoD Game',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={`bg-zinc-950
        text-white mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  );
}
