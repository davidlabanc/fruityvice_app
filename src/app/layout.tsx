"use client"
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const listText = `text-white px-5 uppercase text-lg transition-opacity duration-200 hover:opacity-100 font-bold tracking-headerText`

  return (
    <html lang="en" className="min-h-screen">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-inter font-normal bg-gradient-to-b from-bgSecondary to-bgPrimary min-h-screen min-w-screen">
        <div className="bg-bgPrimary h-20 flex items-center justify-between px-7 fixed top-0 left-0 right-0 z-10">
          <div className="min-w-mainHeader"></div>
          <div className="flex">
            <Link href='/' className={`${listText} ${pathname === '/' ? 'opacity-100' : 'opacity-50'}`}>Search</Link>
            <Link href='/list' className={`${listText} ${pathname === '/list' ? 'opacity-100' : 'opacity-50'}`}>List</Link>
            <div className={`${listText}  ${/\/detail\/[a-zA-Z]+/.test(pathname) ? 'opacity-100' : 'opacity-50'} cursor-default hover:opacity-50`}>Detail</div>
          </div>
          <div className="min-w-mainHeader">
            <Link href='/list/favourite' className={`[&, svg]:hover:text-white transition-all duration-200 ${pathname === '/list/favourite' ? 'text-white' : 'text-purple-900'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>
          </div>
        </div>
        <main className="w-3/4 mx-auto mt-20 flex justify-center h-full min-h-screen md:w-5/6 lg:w-4/5">
          {children}
        </main>
      </body>
    </html>
  );
}