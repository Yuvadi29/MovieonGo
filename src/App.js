import React, { useEffect } from 'react';
import './App.css';
import search from './search.svg';
import Card from './Card';

const API = 'http://omdbapi.com?apiKey=bd6a837b';
const m1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {

    const fetchMovie = async (title) => {
        const res = await fetch(`${API}&s=${title}`);
        const data = await res.json();

        console.log(data.Search);
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
                    value="Superman"
                    onChange={() => { }}
                />
                <img
                    src={search}
                    alt="searchicon"
                    onClick={() => { }}
                />
            </div>

            <div className="container">
                <Card m1 = {m1}/>
            </div>
        </div>
    )
}

export default App;