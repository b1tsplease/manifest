import Head from 'next/head'
import Content from '../components/Content'
import Header from '../components/Header'
import Hero from '../components/Hero'
import InfoBullets from '../components/InfoBullets'
import ReadManifest from '../components/ReadManifest'
import Supporters from '../components/Supporters'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Internet pela Educação</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <Content>
        <Hero />
        <InfoBullets />
        <ReadManifest />
        <Supporters />
      </Content>
    </div>
  )
}
