import Head from 'next/head'
import Slider from '../components/slider/slider'
import Steps from '../components/steps/steps'
import Faq from '../components/faq/faq'
import Form from '../components/form/form'
import Maps from '../components/maps/maps'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tawja</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Slider/>
      <Steps/>
      <Faq/>
      <Maps/>
      {/* <Form/> */}
    </>
  )
}
