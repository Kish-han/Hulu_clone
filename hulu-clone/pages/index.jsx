import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://cdn.iconscout.com/icon/free/png-256/hulu-3521496-2944940.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav/>
      {/* Results */}
    </div>
  )
}
