import CardList from './components/CardList/CardList'
import nfts from './data/nfts'
import './App.css'

function App() {
  return (
    <main className="app">
      <CardList items={nfts} />
    </main>
  )
}

export default App