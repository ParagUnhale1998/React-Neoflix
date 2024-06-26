import React from "react";
import Banner from "./banner/Banner";
import DataFetchingComponent from "../../components/DataFetchingComponent";

function Home() {
  return (
    <main className="relative bg-gradient-to-r from-black to-transparent w-screen h-full text-netflixWhite overflow-x-hidden">
      <Banner />
      <div className="top-0 z-0 absolute bg-gradient-to-t from-netflixbackground via-transparent to-transparent bg-opacity-70 opacity-layer w-screen h-screen"></div>

      <section className="flex flex-col justify-start sm:justify-center items-start sm:items-center gap-4 bg-netflixbackground px-4 sm:px-0 py-10 w-screen text-netflixWhite">
        <DataFetchingComponent
          title="Trending"
          initialEndpoint="day"
          tabOptions={["day", "week"]}
          urlGenerator={(endpoint) => `/trending/movie/${endpoint}`}
        />
        <DataFetchingComponent
          title="Popular"
          initialEndpoint="tv"
          tabOptions={["tv", "movie"]}
          urlGenerator={(endpoint) => `/${endpoint}/popular`}
        />
        <DataFetchingComponent
          title="Recent Animes"
          initialEndpoint="movie"
          tabOptions={["movie", "tv"]}
          urlGenerator={(endpoint) => `/discover/${endpoint}?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja`}
        />
        <DataFetchingComponent
          title="Top Rated"
          initialEndpoint="movie"
          tabOptions={["movie", "tv"]}
          urlGenerator={(endpoint) => `/${endpoint}/top_rated`}
        />

      </section>
    </main>
  );
}

export default Home;
