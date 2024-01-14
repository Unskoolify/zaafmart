import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Daisy from '@/components/Daisy'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zaafmart',
  description: 'Online Shopping Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Daisy/> */}
      <Header/>
        {children}</body>

    </html>
  )
}
