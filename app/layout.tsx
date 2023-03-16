import Image from 'next/image';
import Link from 'next/link';
import { AnalyticsWrapper } from '../components/analytics';
import '../styles/globals.css';

export const metadata = {
  title: `${process.env.SITE_NAME}${process.env.NODE_ENV === 'production' ? '' : ' - test'}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      <div className="text-center bg-gradient-to-b from-green-800 to-green-900 p-8 my-6 rounded-md">
        {/* <Image src={'/logo.png'} alt="logo" width={60} height={60} className="mx-auto" /> */}
        <Link href={'/'}>
          <h1 className="text-2xl text-white font-bold mt-4">/</h1>
        </Link>
        <p className="text-slate-300">👋 Welcome to my plant blog 🌱</p>
      </div>
    </header>
  );

  const footer = (
    <footer className="border-t border-slate-200 mt-6 py-6 text-center text-slate-400 text-sm">
      <p>
        Developed by{' '}
        <Link href="https://devincunningham.com" className="hover:underline">
          Devin
        </Link>{' '}
        | Blog posts generated via ChatGPT
      </p>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  );
}
