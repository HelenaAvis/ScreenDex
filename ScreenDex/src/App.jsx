import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Shows from './pages/Shows.jsx';

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/shows" element={<Shows />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
