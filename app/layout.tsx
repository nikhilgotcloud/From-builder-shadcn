import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Toaster } from 'sonner'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'

import Header from '@/components/header'
import AllProviders from '@/providers'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Shadcn Form Builder',
  description: 'Shadcn Form Builder',
  openGraph: {
    images: [
      {
        url: 'https://form-builder-three-flame.vercel.app/meta.png',
        width: 600,
        height: 315,
      },
    ],
    type: 'website',
    siteName: 'Shadcn Form Builder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadcn Form Builder',
    description: 'Shadcn Form Builder',
    
    creator: 'nikhil',
  },
  keywords: ['form', 'builder', 'shadcn', 'react'],
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="px-5 lg:px-0">
            <NextTopLoader color="#FF9432" showSpinner={false} />
            <Toaster />
            
            <AllProviders>
              <main>{children}</main>
            </AllProviders>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}