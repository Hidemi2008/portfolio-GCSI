import { useEffect, useState } from 'react'
import './Header.css'

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
]

function Logo() {
    return (
        <a className="header__logo" href="#home" aria-label="NeonVault - home">
            <svg
                className="header__logo-mark"
                width="40"
                height="40"
                viewBox="0 0 44 44"
                aria-hidden="true"
                fill="none"
            >
                <defs>
                    <linearGradient id="header-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00ffee" />
                        <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
                <path
                    d="M22 2 40 12v20L22 42 4 32V12Z"
                    stroke="url(#header-logo-gradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />
                <path d="M22 11 31 23 22 28 13 23Z" fill="url(#header-logo-gradient)" />
                <path
                    d="M13 26.5 22 38l9-11.5-9 5.2Z"
                    fill="url(#header-logo-gradient)"
                    fillOpacity="0.55"
                />
            </svg>
            <span className="header__logo-text">
                <span className="header__logo-neon">Neon</span>
                <span className="header__logo-vault">Vault</span>
            </span>
        </a>
    )
}

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    useEffect(() => {
        if (!isOpen) return undefined

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false)
        }
        const onResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false)
        }

        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('resize', onResize)
        }
    }, [isOpen])

    return (
        <header className={`header${isOpen ? ' header--open' : ''}`}>
            <div className="header__inner">
                <Logo />

                <button
                    type="button"
                    className="header__toggle"
                    aria-expanded={isOpen}
                    aria-controls="header-nav"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span className="header__toggle-label">{isOpen ? 'Close' : 'Menu'}</span>
                    <span className="header__burger" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </span>
                </button>

                <nav id="header-nav" className="header__nav" aria-label="Main navigation">
                    <ul className="header__list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a className="header__link" href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
