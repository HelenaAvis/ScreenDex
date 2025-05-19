import Header from '../components/Header';
import Footer from '../components/Footer';

function Shows() {
    return (
        <>
            <Header />
            <main className="main">
                <h1 className="text--heading">TV Shows</h1>
                <p className="text--body">Discover your favorite TV shows.</p>
            </main>
            <Footer />
        </>
    );
}

export default Shows;
