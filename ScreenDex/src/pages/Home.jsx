import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Header />
            <main className="main">
                <h1 className="text--heading">Welcome to The ScreenDex</h1>
                <p className="text--body">Discover more about your favorite Movies and TV shows.</p>
            </main>
            <Footer />
        </>
    );
}

export default Home;
