import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Courier Finders",
  description: " CourierFinders es una innovadora aplicación web dedicada a la búsqueda y seguimiento de paquetes a nivel mundial. Con CourierFinders, los usuarios pueden rastrear sus envíos en tiempo real, independientemente del servicio de mensajería o la ubicación geográfica. Ya sea que estés esperando un paquete importante desde el otro lado del mundo o enviando un regalo a un ser querido, CourierFinders te ofrece una solución integral y confiable. Características Principales: Rastreo en Tiempo Real: Obtén actualizaciones instantáneas sobre la ubicación y el estado de tus paquetes, desde el momento en que son enviados hasta que llegan a su destino final. Cobertura Global: Compatible con las principales empresas de mensajería y servicios postales a nivel mundial, incluyendo DHL, FedEx, UPS, USPS, y muchas más. Notificaciones Personalizadas: Recibe alertas por correo electrónico o SMS sobre cualquier cambio en el estado de tu paquete, para que siempre estés informado. Interfaz Intuitiva: Una plataforma fácil de usar que permite a los usuarios ingresar números de seguimiento y obtener información detallada de manera rápida y eficiente. Historial de Seguimiento: Accede a un registro completo de todos tus envíos anteriores, lo que facilita la gestión y el seguimiento de múltiples paquetes. Seguridad y Privacidad: Tus datos están protegidos con los más altos estándares de seguridad, garantizando que tu información personal y de envío permanezca confidencial. ¿Por Qué Elegir CourierFinders? Fiabilidad: Confía en una plataforma que te proporciona información precisa y actualizada sobre tus envíos. Conveniencia: Simplifica la gestión de tus paquetes con una solución todo en uno, eliminando la necesidad de utilizar múltiples sitios web de seguimiento. Soporte al Cliente: Nuestro equipo de atención al cliente está disponible 24/7 para ayudarte con cualquier duda o inconveniente que puedas tener. Con CourierFinders, la búsqueda y seguimiento de paquetes nunca ha sido tan fácil y eficiente. Únete a miles de usuarios satisfechos y experimenta la tranquilidad de saber exactamente dónde están tus envíos en todo momento. Beneficios de Usar CourierFinders para el Seguimiento de Paquetes Optimización de Tiempo: Ahorra tiempo rastreando todos tus envíos desde una sola plataforma. Compatibilidad Multilingüe: Disponible en varios idiomas para facilitar su uso a nivel global. Integración con eCommerce: Ideal para tiendas en línea que necesitan gestionar múltiples envíos. Cómo Funciona CourierFinders Ingresa tu Número de Seguimiento: Introduce el número de seguimiento proporcionado por tu servicio de mensajería. Obtén Información Instantánea: Visualiza la ubicación actual y el estado de tu paquete en tiempo real. Recibe Notificaciones: Configura alertas para recibir actualizaciones sobre cualquier cambio en el estado de tu envío.", }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head><link rel="svg" href="/icon.svg" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
