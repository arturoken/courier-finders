import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "CourierFinders - Rastreo Global de Paquetes",
  description: "CourierFinders es una aplicación web innovadora para el seguimiento de paquetes a nivel mundial en tiempo real. Compatible con las principales empresas de mensajería.",
  keywords: "rastreo de paquetes, seguimiento de envíos, courier global, DHL, FedEx, UPS, USPS",
  openGraph: {
    title: "CourierFinders - Rastreo Global de Paquetes",
    description: "Sigue tus envíos en tiempo real con CourierFinders, compatible con las principales empresas de mensajería a nivel mundial.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CourierFinders Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CourierFinders - Rastreo Global de Paquetes",
    description: "Sigue tus envíos en tiempo real con CourierFinders, compatible con las principales empresas de mensajería a nivel mundial.",
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-red-50 relative`}>
          <div className="fixed inset-0 bg-[url('../public/image-1.png')] blur-sm z-0"></div>
          <main className="relative z-10">{children}</main>
        </body>
    </html>
  )
}