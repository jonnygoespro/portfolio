import { Inter } from 'next/font/google'
import '@/styling/style.scss'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JonnyGoesPro | Webdesign & Webdevelopment',
  description: "Let's collaborate and turn your digital dreams into reality. Join hands with a webdeveloper and webdesigner based in Salzburg, Austria. Together, we'll create a powerful online presence and achieve your goals."
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
