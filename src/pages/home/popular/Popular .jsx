import React from 'react'
import DataFetchingComponent from '../../../components/DataFetchingComponent';

function Popular () {
    return (
        <DataFetchingComponent
            title="What's Popular"
            initialEndpoint="movie"
            tabOptions={["Movies", "TV Shows"]}
            urlGenerator={(endpoint) => `/${endpoint}/popular`}
        />
    );
}

export default Popular 