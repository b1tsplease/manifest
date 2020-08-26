import Head from 'next/head'
import Header from '../components/Header'
import InfoBullets from '../components/InfoBullets'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        {/* This is required by Zilla React. */}
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <InfoBullets />
    </div>
  )
}
