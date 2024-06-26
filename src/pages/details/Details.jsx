import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetchData";
import DetailsBanner from "./detail-banner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideosSection";
import Related from "./related/Related";
import Container from "../../components/Container";

function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, laoding: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const loadingSkeleton = () => {
    return (
      <Container>
        <div className="relative flex justify-start items-center gap-10 w-full h-screen main-container">
          <div className="bg-gray-500 rounded-md w-[30%] h-[70vh] animate-pulse"></div>
          <div className="bg-gray-500 rounded-md w-[50%] h-[70vh] animate-pulse"></div>
        </div>
      </Container>
    );
  };

  return (
    <div>
      {!loading ? (
        <div>
          <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
          {credits?.cast && <Cast data={credits?.cast.length > 0 ? credits?.cast : credits?.crew} loading={creditsLoading} />}
          <VideosSection data={data} loading={loading} />
          <Related
            url={`/${mediaType}/${id}/similar`}
            mediaType={mediaType}
            id={id}
            title={mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"}
          />
          <Related
            url={`/${mediaType}/${id}/recommendations`}
            mediaType={mediaType}
            id={id}
            title={"Recommendations"}
          />
        </div>
      ) : (
        loadingSkeleton()
      )}
    </div>
  );
}

export default Details;
