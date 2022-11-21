import React from 'react';

const Card = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://img.icons8.com/arcade/64/null/no-image.png'} alt={Title} />
            </div>

            <div>
                <span>{Type}</span>
                <h2>{Title}</h2>
            </div>

        </div>
    )
}

export default Card;