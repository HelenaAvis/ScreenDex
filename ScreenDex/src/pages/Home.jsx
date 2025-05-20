import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../css/global.css';

function Home() {
    return (
        <>
            <Header />
            <main className="main">
                <h1 className="text--heading">Welcome to The ScreenDex!</h1>
                <p className="text--subheading">Your one-stop destination for all things Movies and TV shows.</p>
                <p className="text--body">Discover more about your favorite Movies and TV shows.</p>
            </main>
            <Footer />
        </>
    );
}

export default Home;
