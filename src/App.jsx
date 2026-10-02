import Header from './components/Header/Header'
import CardList from './components/CardList/CardList'
import nfts from './data/nfts'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main id="home" className="app">
        <section className="app__hero">
          <h1 className="app__title">
            Discover <span className="app__title-accent">neon</span> digital art
          </h1>
          <p className="app__subtitle">
            A curated collection of AI-generated NFTs, glowing with cyberpunk
            cities, lone samurais and ancient dragons made of code.
          </p>
        </section>

        <section id="collections" className="app__collections" aria-label="NFT collection">
          <CardList items={nfts} />
        </section>

        <section id="about" className="app__about">
          <h2 className="app__about-title">About NeonVault</h2>
          <p className="app__about-text">
            NeonVault is a portfolio project built with React and Vite. Every
            artwork and the logo were generated with Leonardo AI, and the cards
            are animated with Animate.css.
          </p>
        </section>
      </main>
    </>
  )
}

export default App
