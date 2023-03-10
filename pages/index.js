import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HeroRemodeling</title>
        <link rel="icon" href="/remodeling.ico" />
      </Head>

      <main>
        <Header title="Hero Remodeling Inc" />
        <p className="details">
          License Number: 985906
        </p>
  <p className="details">
          Get free estimate today, 
    get free design today for indoor or outdoor project, 
    get 100% finance with energy efficient products Call today (818) 470-2749 Simon or (818) 859-5873 Yaniv.
  Best in the west no sub contractors a family business with 20 years experience.
        </p>
  <p className="details">
         Our company will take you from a-z buying all materials needed and provide blue prints design and ideas to make your home a dream. Make the client happy is my top goal.
        </p>
      </main>
  
      <body>
        <img src="remodeling.jpg" width="682" height="388"></img>
      </body>

      <Footer />
    </div>

  )
}
