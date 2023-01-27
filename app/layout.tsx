import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image src={'/logo.png'} alt="logo" width={60} height={60} className="mx-auto" />
        <Link href={'/'}>
          <h1 className="text-2xl text-white font-bold mt-4">Devin&apos;s Blog</h1>
        </Link>
        <p className="text-slate-300">👋 Welcome to my plant blog 🌱</p>
      </div>
    </header>
  );

  const footer = (
    <footer className="border-t border-slate-200 mt-6 py-6 text-center text-slate-400 text-sm">
      <p>Developed by Devin | Blog posts generated via ChatGPT</p>
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
        </div>
      </body>
    </html>
  );
}
