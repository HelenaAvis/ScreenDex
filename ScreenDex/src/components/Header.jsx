function Header() {
    return (
        <header className="header">
            <h1 className="header__logo">The ScreenDex</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a className="header__nav-link">Movies</a>
                    </li>
                    <li className="header__nav-item">
                        <a className="header__nav-link">TV Shows</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
