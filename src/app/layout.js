import { Inter } from 'next/font/google'
import '@/styling/style.scss'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body className={inter.className}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout
