import NFTCard from '../NFTCard/NFTCard'
import './CardList.css'

function CardList({ items }) {
  return (
    <ul className="card-list">
      {items.map((nft, index) => (
        <li
          key={nft.id}
          className="card-list__item animate__animated animate__fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <NFTCard
            title={nft.title}
            description={nft.description}
            price={nft.price}
            timeLeft={nft.timeLeft}
            image={nft.image}
            creator={nft.creator}
            avatar={nft.avatar}
          />
        </li>
      ))}
    </ul>
  )
}

export default CardList