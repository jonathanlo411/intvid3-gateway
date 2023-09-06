import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import favicon from './favicon.ico'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interactive Video Portal',
  description: 'This is for maintain a mounting tech debt.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
