import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import Footer from '../components/Footer/Footer';

import '../css/global.css';
import data from '../data/movieDetails.json';

function Detailed() {
    // TODO: replace dummy data with API call to fetch movie/show details
    console.log(data);

    return (
        <>
            <Header />
            <main className="main">
                <Details data={data} />
            </main>
            <Footer />
        </>
    );
}

export default Detailed;
