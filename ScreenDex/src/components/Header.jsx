import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <h1 className="header__logo">The ScreenDex</h1>
            </Link>
            <nav className="header__nav">
                <Link to="/movies" className="header__nav-link">
                    Movies
                </Link>
                <Link to="/shows" className="header__nav-link">
                    Shows
                </Link>
            </nav>
        </header>
    );
}

export default Header;
