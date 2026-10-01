import NFTCard from './components/NFTCard/NFTCard'
import cyberCity from './assets/images/cyber-city.jpg'
import avatar from './assets/images/avatar.jpg'
import './App.css'

function App() {
  return (
    <main className="app">
      <NFTCard
        title="Cyber City"
        description="A futuristic digital NFT inspired by neon skylines."
        price="0.041"
        currency="ETH"
        timeLeft="3 days left"
        image={cyberCity}
        creator="Gabriel"
        avatar={avatar}
      />
    </main>
  )
}

export default App