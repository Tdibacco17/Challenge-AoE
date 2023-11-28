import './globals.css'
import { roboto } from '@/utils/fonts'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Desafio React',
  description: 'Desafio React',
  applicationName: 'Desafio React',
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'light',
  themeColor: '#FFFFFF',
  authors: {
    name: 'Tomás Di Bacco',
    url: 'https://www.linkedin.com/in/tomas-di-bacco/'
  },
  icons: {
    icon: '/favicon.ico'
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="copyright" content="© Copyright Santa Pipa 2023 - Todos los derechos reservados" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body className={roboto.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
