import './globals.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify - Web Player: Music for everyone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-zinc-900 text-zinc-50')}>
        {children}
      </body>
    </html>
  )
}
