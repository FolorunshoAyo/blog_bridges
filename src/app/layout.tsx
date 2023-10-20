import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RightTopBox from '@/components/RightTopBox'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlogBridges - Where the world cross paths.',
  description: 'BlogBridges is a platform that bridges the gap between content creators, writers from around the world with enthusiastic readers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RightTopBox />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
