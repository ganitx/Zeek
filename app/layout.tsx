import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Main | Portfolio',
} 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
        className={`relative bg-zinc-950 text-white min-w-full`}
      >
        {children}
      </body>
    </html>
  );
}
