import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Tawja</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="container mx-auto px-4">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
