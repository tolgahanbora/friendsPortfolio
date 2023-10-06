
import './globals.css'
import { Inter } from 'next/font/google'

import Nav from './components/nav'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Can Polat UX & UI Designer',
  description: "Hey, I'm Can Polat, an experienced UX & UI Designer. Prioritizing user experience, I blend aesthetics with functionality. Feel free to explore my portfolio to get in touch with me and view my projects."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  )
}
