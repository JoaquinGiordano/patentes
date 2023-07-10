import './globals.css';

export const metadata = {
  title: 'Patentes',
  description: 'Juego de Patentes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`bg-gradient-radial from-blue-600 to-blue-900`}>
        {children}
      </body>
    </html>
  );
}
