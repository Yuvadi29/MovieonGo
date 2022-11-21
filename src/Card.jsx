import React from 'react';

const Card = ({ m1 }) => {
    return (
        <div className="movie">
            <div>
                <p>{m1.Year}</p>
            </div>

            <div>
                <img src={m1.Poster !== 'N/A' ? m1.Poster : 'https://via/placeholder.com/400'} alt={m1.Title} />
            </div>

            <div>
                <span>{m1.Type}</span>
                <h2>{m1.Title}</h2>
            </div>

        </div>
  )
}

export default Card;