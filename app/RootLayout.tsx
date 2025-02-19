"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { UserProvider } from './UserContext';

library.add(faPhone, faLock);

export default function RootLayout({
  children,
  inter,
}: {
  children: React.ReactNode;
  inter: { className: string };
}) {
  const pathname = usePathname(); // Get the current route

  // Conditionally render header and footer if the pathname is not '/account'
  const shouldShowHeaderFooter = pathname !== '/account';

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {shouldShowHeaderFooter && (
            <>
              <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <Link href="/" className="text-gray-800 dark:text-gray-200 text-xl font-bold">
                    Radiate Recruiting Resources
                  </Link>
                  <div className="hidden lg:flex space-x-6">
                    <Link href="https://www.dhs.gov/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Protected by DHS.gov
                    </Link>
                  </div>
                  <div className="lg:hidden flex items-center space-x-4">
                    <Link href="tel:+12057949970" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.dhs.gov/" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <FontAwesomeIcon icon={faLock} className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </header>
            </>
          )}

          {/* Main Content */}
          <main className={shouldShowHeaderFooter ? "pt-20 z-0" : ""}>{children}</main>

          {shouldShowHeaderFooter && (
            <footer className="bg-gray-100 dark:bg-gray-800 py-8">
              <div className="text-center py-4 text-gray-600 dark:text-gray-400">
                &copy; Radiate Resources. All rights reserved.
              </div>
            </footer>
          )}
        </UserProvider>
      </body>
    </html>
  );
}