import '@/styling/style.scss'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'
import Head from 'next/head'

export const metadata = {
  title: 'JonnyGoesPro | Webdevelopment & Webdesign',
  description: "Let's collaborate and turn your digital dreams into reality. Join hands with a webdeveloper and webdesigner based in Salzburg, Austria. Together, we'll create a powerful online presence and achieve your goals."
}

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/images/favicon/site.webmanifest' />
      </Head>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout
