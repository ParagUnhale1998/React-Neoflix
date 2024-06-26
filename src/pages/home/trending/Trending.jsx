import React from 'react'
import DataFetchingComponent from '../../../components/DataFetchingComponent'

function Trending() {
  return (
    <DataFetchingComponent
            title="Trending"
            initialEndpoint="day"
            tabOptions={["Day", "Week"]}
            urlGenerator={(endpoint) => `/trending/movie/${endpoint}`}
        />
  )
}

export default Trending