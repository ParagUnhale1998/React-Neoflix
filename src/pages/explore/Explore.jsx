// import React, { useEffect, useState } from "react";
import React, { useEffect, useState, useCallback } from "react";
import Container from "../../components/Container";
import { useLocation } from "react-router-dom";
import DropDown from "../../components/DropDown";
import {
  MOVIE_GENRES,
  SORT_BY_DATA,
  TV_GENRES,
} from "../../constants/api.constants";
import useFetch from "../../hooks/useFetchData";
import Card from "../../components/Card";
import { fetchDataFromApi } from "../../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";

const Explore = () => {
  const location = useLocation();
  const mediaType = location.pathname.split("/").filter(Boolean)[1];
  
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState(SORT_BY_DATA[0].value);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [key, setKey] = useState(mediaType); // Use mediaType as key for DropDown

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  
  const fetchInitialData = useCallback(() => {
    setLoading(true);
    fetchDataFromApi(`/discover/${mediaType}`).then(
      (res) => {
        setData(res);
        console.log(pageNum)
        setPageNum(2);
        setLoading(false);
      }
    );
  }, [mediaType]);

  const fetchGenreData = useCallback(
    (genreId) => {
      setLoading(true);
      fetchDataFromApi(`/discover/${mediaType}`, {
        with_genres: genreId,
        sort_by: sortBy,
      }).then((res) => {
        console.log(res)
        setData(res);
        setPageNum(2);
        setLoading(false);
      });
    },

    [sortBy,selectedGenre]
  );

  const fetchNextPageData = useCallback(() => {
    const params = {
      page: pageNum,
      sort_by: sortBy,
      with_genres: selectedGenre
    };

    fetchDataFromApi(`/discover/${mediaType}`, params).then((res) => {
      setData((prevData) => ({
        ...prevData,
        results: [...(prevData?.results || []), ...res.results],
      }));
      setPageNum((prev) => prev + 1);
    });
  }, [pageNum]);

    // Reset sortBy and selectedGenre when mediaType changes
    useEffect(() => {
      setSortBy(SORT_BY_DATA[0].value);
      setSelectedGenre(null);
      setPageNum(1);
      setKey(mediaType); 
      fetchInitialData();
    }, [mediaType]);

    
  useEffect(() => {
    if (selectedGenre) {
      fetchGenreData(selectedGenre);
    }else if(sortBy){
      fetchGenreData(selectedGenre);
    } 
    else {
      fetchInitialData();
    }
  }, [sortBy, selectedGenre]);

  const convertGenresToOptions = (genres) =>
    genres?.map((genre) => ({
      value: genre.id,
      label: genre.name,
    })) || [];

  const handleGenreChange = (selectedOption) => {
    console.log(selectedOption.value)
    setSelectedGenre(selectedOption.value);
  }
  const handleSortChange = (selectedOption) =>{
    console.log(selectedOption.value)
    setSortBy(selectedOption.value);}

  const Loader = () => {
    return (
      <div className="flex justify-center items-center my-2 w-full">
        <img
          className="w-28"
          src="https://media3.giphy.com/media/FgH5xSNjGHZsiYPWAX/giphy.gif?cid=6c09b9523ta5vy9bxchut3l4buumvpzbmx5ht06hcn6s2rz9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          alt=""
        />
      </div>
    );
  };
  return (
    <section
      className={`bg-netflixbackground pt-28 w-screen text-netflixWhite ${
        data ? "h-full" : "h-screen"
      }`}
    >
      <Container>
        <div className="flex flex-wrap justify-between items-center mb-2 page-heading">
          <div className="page-title">
            <h3 className="font-bold text-2xl">
              {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
            </h3>
          </div>
          <div className="flex flex-wrap justify-start md:justify-center items-center gap-1 sm:gap-2 page-filter">
            <DropDown
            key={key}
              options={
                mediaType === "tv"
                  ? convertGenresToOptions(TV_GENRES)
                  : convertGenresToOptions(MOVIE_GENRES)
              }
              onChange={handleGenreChange}
              placeholder="Categories"
              mediaType={mediaType}
            />
            <DropDown
            key={mediaType}
              options={SORT_BY_DATA}
              placeholder="Sort By"
              onChange={handleSortChange}
              mediaType={mediaType}

            />
          </div>
        </div>

        {loading && <Loading />}

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
                        <Card key={item.id} data={item} mediaTypes={mediaType} />
                      )
                  )}
                </div>
              </InfiniteScroll>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default Explore;

// import Container from "../../components/Container";
// import { useLocation, useParams } from "react-router-dom";
// import DropDown from "../../components/DropDown";
// import {
//   MOVIE_GENRES,
//   SORT_BY_DATA,
//   TV_GENRES,
// } from "../../constants/api.constants";
// import useFetch from "../../hooks/useFetchData";
// import Card from "../../components/Card";
// import { fetchDataFromApi } from "../../utils/api";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "../../components/Loading";

// function Explore() {
//   const location = useLocation();
//   const pathSegments = location.pathname.split("/").filter(Boolean);
//   const mediaType = pathSegments[1];
//   const [data, setData] = useState(null);
//   const [pageNum, setPageNum] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [genre, setGenre] = useState(null);
//   const [sortby, setSortby] = useState(null);
//   const genresUrl = `/genre/${mediaType}/list`;
//   const exploreUrl = `/discover/${mediaType}`;
//   const [filters, setFilters] = useState({});
//   const [sortBy, setSortBy] = useState(SORT_BY_DATA[0].value);

//   const { data: genresData } = useFetch(`/genre/${mediaType}/list`);
//   const [selectedGenre, setSelectedGenre] = useState(null);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   useEffect(() => {
//     if (selectedGenre) {
//       fetchGenreData(selectedGenre.value);
//     } else {
//       fetchInitialData();
//     }
//     console.log(mediaType)
//   }, [sortBy, selectedGenre,mediaType]);

//   const fetchInitialData = () => {
//     setLoading(true);
//     fetchDataFromApi(`/discover/${mediaType}`, { sort_by: sortBy }).then((res) => {
//       setData(res);
//       setPageNum((prev) => prev + 1);
//       setLoading(false);
//     });
//   };

//   // const fetchNextPageData = () => {
//   //   fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters).then(
//   //     (res) => {
//   //       if (data?.results) {
//   //         setData({
//   //           ...data,
//   //           results: [...data?.results, ...res.results],
//   //         });
//   //       } else {
//   //         setData(res);
//   //       }
//   //       setPageNum((prev) => prev + 1);
//   //     }
//   //   );
//   // };

//   const fetchGenreData = (genreId) => {
//     setLoading(true);
//     fetchDataFromApi(`/discover/${mediaType}`, { with_genres: genreId, sort_by: sortBy }).then((res) => {
//       setData(res);
//       setPageNum(2); // Since we fetched page 1 already
//       setLoading(false);
//     });
//   };

//   const fetchNextPageData = () => {
//     const params = selectedGenre
//       ? { with_genres: selectedGenre.value, page: pageNum, sort_by: sortBy }
//       : { page: pageNum, sort_by: sortBy };

//     if (selectedGenre) {
//       fetchDataFromApi(`/discover/${mediaType}`, params).then(
//         (res) => {
//           if (data?.results) {
//             setData({
//               ...data,
//               results: [...data?.results, ...res.results],
//             });
//           } else {
//             setData(res);
//           }
//           setPageNum((prev) => prev + 1);
//         }
//       );
//     } else {
//       fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`).then(
//         (res) => {
//           if (data?.results) {
//             setData({
//               ...data,
//               results: [...data?.results, ...res.results],
//             });
//           } else {
//             setData(res);
//           }
//           setPageNum((prev) => prev + 1);
//         }
//       );
//     }
//   };

//   // useEffect(() => {
//   //   filters = {};
//   //   setData(null);
//   //   setPageNum(1);
//   //   setSortby(null);
//   //   setGenre(null);
//   //   fetchInitialData();
//   // }, [mediaType]);

//   const convertGenresToOptions = (genres) => {
//     return genres.map((genre) => ({
//       value: genre.id,
//       label: genre.name,
//     }));
//   };
//   const handleGenreChange = (selectedOption) => {
//     setSelectedGenre(selectedOption);
//   };

//   const handleSortChange = (selectedOption) => {
//     setSortBy(selectedOption.value);
//   };
//   const renderData = () => data?.results?.map((item) => <Card data={item} />);
//   const renderSkeletons = () =>
//     Array.from({ length: 20 }).map((_, index) => (
//       <div
//         key={index}
//         className="relative border-1 w-full h-full cursor-pointer group"
//       >
//         <div className="bg-gray-500 rounded-md w-full h-[400px] animate-pulse"></div>
//       </div>
//     ));

//   return (
//     <section
//       className={`${
//         data ? "h-full" : "h-screen"
//       } bg-netflixbackground pt-28 w-screen  text-netflixWhite`}
//     >
//       <Container>
//         <div className="flex flex-wrap justify-between items-center mb-2 page-heading">
//           <div className="page-title">
//             <h3 className="font-bold text-2xl">
//               {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
//             </h3>
//           </div>
//           <div className="flex flex-wrap justify-start md:justify-center items-center gap-1 sm:gap-2 page-filter">
//             <DropDown
//               options={
//                 mediaType === "tv"
//                   ? convertGenresToOptions(TV_GENRES)
//                   : convertGenresToOptions(MOVIE_GENRES)
//               }
//               onChange={handleGenreChange}
//               placeholder="Categories"
//             />
//             <DropDown options={SORT_BY_DATA} placeholder="Sort By" onChange={handleSortChange}/>
//           </div>
//         </div>

//         {loading && <Loading />}

//         {!loading && (
//           <>
//             {data?.results?.length > 0 ? (
//               <InfiniteScroll
//                 className="content"
//                 dataLength={data?.results?.length || []}
//                 next={fetchNextPageData}
//                 hasMore={pageNum <= data?.total_pages}
//                 loader={
//                   <div className="flex justify-center items-center my-2 w-full">
//                     <img
//                       className="w-28"
//                       src="https://media3.giphy.com/media/FgH5xSNjGHZsiYPWAX/giphy.gif?cid=6c09b9523ta5vy9bxchut3l4buumvpzbmx5ht06hcn6s2rz9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
//                       alt=""
//                     />
//                   </div>
//                   // <Loading/>
//                 }
//               >
//                 <div className="items-start gap-4 grid grid-cols-4 pb-10 main-container">
//                   {data?.results?.map((item, index) => {
//                     if (item.media_type === "person") return;
//                     return <Card key={item.id} data={item} />;
//                   })}
//                 </div>
//               </InfiniteScroll>
//             ) : (
//               <span className="resultNotFound">Sorry, Results not found!</span>
//             )}
//           </>
//         )}
//         {/* {loading || !data || data.length === 0
//             ? renderSkeletons()
//             : renderData()} */}
//       </Container>
//     </section>
//   );
// }

// export default Explore;
// =============================================================================
/*import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { useLocation, useParams } from "react-router-dom";
import DropDown from "../../components/DropDown";
import {
  MOVIE_GENRES,
  SORT_BY_DATA,
  TV_GENRES,
} from "../../constants/api.constants";
import useFetch from "../../hooks/useFetchData";
import Card from "../../components/Card";

let filters = {};

function Explore() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const mediaType = pathSegments[1];
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
   const [genre, setGenre] = useState(null);
    const [sortby, setSortby] = useState(null);
  const genresUrl = `/genre/${mediaType}/list`;
  const exploreUrl = `/discover/${mediaType}`;

  const {
    data: genresData,
    loading: genresLoading,
    error: genresError,
  } = useFetch(genresUrl);
  const {
    data: exploreData,
    loading: exploreLoading,
    error: exploreError,
  } = useFetch(exploreUrl);

  useEffect(() => {

  }, []);



  const convertGenresToOptions = (genres) => {
    return genres.map((genre) => ({
      value: genre.id,
      label: genre.name,
    }));
  };

  const renderData = () =>
    exploreData?.results?.map((item) => <Card data={item} />);
  const renderSkeletons = () =>
    Array.from({ length: 20 }).map((_, index) => (
      <div
        key={index}
        className="relative border-1 w-full h-full cursor-pointer group"
      >
        <div className="bg-gray-500 rounded-md w-full h-[400px] animate-pulse"></div>
      </div>
    ));

  return (
    <section
      className={`${
        exploreData ? "h-full" : "h-screen"
      } bg-netflixbackground pt-28 w-screen  text-netflixWhite`}
    >
      <Container>
        <div className="flex flex-wrap justify-between items-center page-heading">
          <div className="page-title">
            <h3 className="font-bold text-2xl">
              {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
            </h3>
          </div>
          <div className="flex flex-wrap justify-start md:justify-center items-center gap-1 sm:gap-2 page-filter">
            <DropDown
              options={
                mediaType === "tv"
                  ? convertGenresToOptions(TV_GENRES)
                  : convertGenresToOptions(MOVIE_GENRES)
              }
              placeholder="Categories"
            />
            <DropDown options={SORT_BY_DATA} placeholder="Sort By" />
          </div>
        </div>
        <div className="items-start gap-4 space-y-2 grid grid-cols-4 pb-10 main-container">
          {exploreLoading || !exploreData || exploreData.length === 0
            ? renderSkeletons()
            : renderData()}
        </div>
      </Container>
    </section>
  );
}

export default Explore;
*/
