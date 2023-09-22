import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

// export default function Document() {
//   return (
//     <Html>
//       <Head />
//       <body className="container mx-auto px-4">
//         <Header />
//         <Main />
//         <NextScript />
//         <Footer />
//       </body>
//     </Html>
//   )
// }


 
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="container mx-auto px-4">
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}