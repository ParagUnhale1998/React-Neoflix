  import React, { useState } from "react";
  import useFetch from "../hooks/useFetchData";
  import Container from "./Container";
  import SwitchTabs from "./SwitchTabs";
  import Carousel from "./Carousel";

  const DataFetchingComponent = ({
    title,
    initialEndpoint,
    tabOptions,
    urlGenerator,
  }) => {
    const [endpoint, setEndpoint] = useState(initialEndpoint);
    const { data, loading } = useFetch(urlGenerator(endpoint));

    const onTabChange = (tab) => {
      setEndpoint(tab.toLowerCase());

    };
  
    
    return (
      <Container>
        <div className="flex justify-between items-center my-2 container">
          <h2 className="my-4 w-full font-bold text-2xl sm:text-3xl underline underline-offset-2 capitalize tracking-wider">
            {title} {endpoint}
          </h2>
          <SwitchTabs data={tabOptions} onTabChange={onTabChange} />
        </div>
        <Carousel  data={data?.results} loading={loading} mediaTypes={endpoint} />
      </Container>
    );
  };

  export default DataFetchingComponent;

  /*  const onTabChange = (tab) => {
      setEndpoint(
        tabOptions[0] === tab ? initialEndpoint : tabOptions[1].toLowerCase()
      );
    };*/