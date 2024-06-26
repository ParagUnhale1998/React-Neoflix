import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3NWE3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FI"

const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(`${BASE_URL}${url}`, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.error('Error fetching data: ', err.response ? err.response.data : err.message);
        throw err;
    }
};
/*
https://api.themoviedb.org/3/tv/popular

https://api.themoviedb.org/3/movie/top_rated
https://api.themoviedb.org/3/tv/popular
https://api.themoviedb.org/3/discover/movie?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja
https://api.themoviedb.org/3/discover/movie?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja
https://api.themoviedb.org/3/movie/top_rated
https://api.themoviedb.org/3/trending/movie/day
tps://api.themoviedb.org/3/tv/top_rated
https://api.themoviedb.org/3/discover/tv?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja
https://api.themoviedb.org/3/movie/popular
https://api.themoviedb.org/3/trending/movie/week
https://api.themoviedb.org/3/discover/tv?sort_by=Default
https://api.themoviedb.org/3/discover/movie?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja
ttps://api.themoviedb.org/3/discover/tv?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja
https://api.themoviedb.org/3/discover/movie
https://api.themoviedb.org/3/tv/95479/recommendations
https://api.themoviedb.org/3/tv/13916/recommendations

https://api.themoviedb.org/3/tv/1429/recommendations

https://api.themoviedb.org/3/tv/63926/recommendations

https://api.themoviedb.org/3/tv/95479/recommendations
https://api.themoviedb.org/3/tv/61459/recommendations
https://api.themoviedb.org/3/tv/88803/recommendations
https://api.themoviedb.org/3/tv/1429/recommendations*/