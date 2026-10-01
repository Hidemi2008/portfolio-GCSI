import './NFTCard.css'

function NFTCard({
    title,
    description,
    price,
    currency = 'ETH',
    timeLeft,
    image,
    imageAlt,
    creator,
    avatar,
}) {
    return (
        <article className="nft-card">
            <div className="nft-card__media">
                <img
                    className="nft-card__image"
                    src={image}
                    alt={imageAlt || `NFT artwork: ${title}`}
                />
                <div className="nft-card__overlay" aria-hidden="true">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </div>
            </div>

            <div className="nft-card__body">
                <h2 className="nft-card__title">{title}</h2>
                <p className="nft-card__description">{description}</p>

                <div className="nft-card__info">
                    <p className="nft-card__price">
                        <svg width="11" height="18" viewBox="0 0 11 18" aria-hidden="true" fill="currentColor">
                            <path d="M5.5 0 0 9.2l5.5 3.3L11 9.2 5.5 0Zm0 13.8L0 10.5 5.5 18 11 10.5l-5.5 3.3Z" />
                        </svg>
                        <span>{price} {currency}</span>
                    </p>

                    <p className="nft-card__time">
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="currentColor">
                            <path d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0Zm0 16.2A7.2 7.2 0 1 1 9 1.8a7.2 7.2 0 0 1 0 14.4Zm.9-11.7H8.1v5.4l4.5 2.7.9-1.5-3.6-2.1V4.5Z" />
                        </svg>
                        <span>{timeLeft}</span>
                    </p>
                </div>

                <hr className="nft-card__divider" />

                <footer className="nft-card__creator">
                    <img className="nft-card__avatar" src={avatar} alt={`Avatar de ${creator}`} />
                    <p>
                        Creation of <span className="nft-card__creator-name">{creator}</span>
                    </p>
                </footer>
            </div>
        </article>
    )
}

export default NFTCard