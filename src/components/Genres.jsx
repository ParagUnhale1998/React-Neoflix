import React from 'react'
import { MOVIE_GENRES, TV_GENRES } from '../constants/api.constants';

function Genres({data,type}) {
    console.log('data',data)
    const genres = type === "movie" ? MOVIE_GENRES : TV_GENRES;

    return (
        <div className="flex justify-center items-center gap-2 genres">
        {data?.map((g) => {
            const genre = genres.find(genre => genre.id === g);
            if (!genre) return null;
            return (
                <div key={g} className="bg-netflixRed p-1 font-semibold text-white text-xs genre">
                    {genre.name}
                </div>
            );
        })}
    </div>
    );
}

export default Genres