import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import Container from "../../components/Container";

function Search() {
  const params = useParams();
  const SearchQuery = params.searchQuery;
  const [correctSearchQuery, setCorrectSearchQuery] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (SearchQuery) {
      const correctQuery = decodeURIComponent(SearchQuery).replace(/%20/g, " ");
    //   
    setCorrectSearchQuery(correctQuery);
      setData(null); // Reset data
      setPageNum(1); // Reset page number
    }
  }, [SearchQuery]);

  useEffect(() => {
    if (correctSearchQuery) {
      fetchInitialData();
    }
  }, []);

  useEffect(() => {
    if (correctSearchQuery) {
      fetchInitialData();
    }
  }, [correctSearchQuery]);

  const fetchInitialData = useCallback(() => {
    setLoading(true);
    fetchDataFromApi(
      `/search/multi?query=${correctSearchQuery}&include_adult=false&language=en-US&page=${pageNum}`
    ).then((res) => {
      setData(res);
      setPageNum(2);
      setLoading(false);
    });
  }, [correctSearchQuery]);

  const fetchNextPageData = useCallback(() => {
    const params = {
      query: correctSearchQuery,
      include_adult: false,
      language: "en-US",
      page: pageNum,
    };

    fetchDataFromApi(`/search/multi`, params).then((res) => {
      setData((prevData) => ({
        ...prevData,
        results: [...(prevData?.results || []), ...res.results],
      }));
      setPageNum((prev) => prev + 1);
    });
  }, [correctSearchQuery,pageNum]);

  return (
    <section
      className={`bg-netflixbackground pt-28 w-screen text-netflixWhite ${
        data ? "h-full" : "h-screen"
      }`}
    >
      <Container>
        {!loading && (
          <>
            {data?.results?.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Loading />}
              >
                <div className="items-start gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 main-container">
                  {data.results.map(
                    (item) =>
                      item.media_type !== "person" && (
                        <Card
                          key={item.id}
                          data={item}
                          mediaTypes={item.media_type}
                        />
                      )
                  )}
                </div>
              </InfiniteScroll>
            ) : (
              <Loading />
            )}
          </>
        )}
      </Container>
    </section>
  );
}

export default Search;
