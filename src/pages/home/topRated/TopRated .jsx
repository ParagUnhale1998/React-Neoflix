import React from 'react'
import DataFetchingComponent from '../../../components/DataFetchingComponent';

function TopRated () {
    return (
        <DataFetchingComponent
            title="Top Rated"
            initialEndpoint="movie"
            tabOptions={["Movies", "TV Shows"]}
            urlGenerator={(endpoint) => `/${endpoint}/top_rated`}
        />
    );
}

export default TopRated 