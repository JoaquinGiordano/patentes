'use client';

import { useEffect } from 'react';
import { GlobalContextProvider } from '../context/Global.context';
import './globals.css';

export const metadata = {
  title: 'Patentes',
  description: 'Juego de Patentes',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <html lang="es">
      <body className={`bg-gradient-radial h-screen from-blue-600 to-blue-900`}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
