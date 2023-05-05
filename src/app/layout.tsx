import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Techys- Keep Your World Moving',
  description: 'Mobile phone, computer, tablet, and console repair shop in Nottingham, England',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <br/>
      <br/>
      {children}
      </body>
    </html>
  )
}
