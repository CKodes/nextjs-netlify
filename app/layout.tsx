import type { Metadata } from 'next'
import { Viga } from 'next/font/google'
import './globals.css'
import { NavbarSgds, FooterSgds } from '@/components/sgds/coreComponents'

const viga = Viga({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NextJS x Netlify',
  description: 'A NextJS project hosted on Netlify',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={viga.className}>
        <div id="root">
          <NavbarSgds />
          {children}
          <FooterSgds />
        </div>
      </body>
    </html>
  )
}
