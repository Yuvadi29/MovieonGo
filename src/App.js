import React, { useEffect, useState } from 'react';
import './App.css';
import searchicon from './search.svg';
import Card from './Card';

const API = 'http://omdbapi.com?apiKey=bd6a837b';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMovie = async (title) => {
        const res = await fetch(`${API}&s=${title}`);
        const data = await res.json();

        setMovies(data.Search);
        console.log(data)
    }

    useEffect(() => {
        fetchMovie('Superman');
    }, []);


    return (
        <div className='app'>
            <h1>MovieToGo</h1>

            <div className="search">
                <input
                    placeholder='Search Your Movie'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img
                    src={searchicon}
                    alt="searchicon"
                    onClick={() => fetchMovie(search)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <Card movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h3>No Movies Found!!!</h3>
                        </div>
                    )
            }


        </div>
    )
}

export default App;