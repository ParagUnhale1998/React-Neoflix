import React from "react";
import Container from "../../components/Container";

import Related from "../details/related/Related";

function Anime() {
  return (
    <div className="py-20 container">
      <Container>
        <Related
          url={`/discover/movie?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja`}
          mediaType={"tv"}
          id={95479}
          title={"Recent Movies"}
        />
        <Related
          url={`/discover/tv?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja`}
          mediaType={"tv"}
          id={95479}
          title={"Week Popular"}
        />
        <Related
          url={`/${"tv"}/${95479}/recommendations`}
          mediaType={"tv"}
          id={95479}
          title={"Favourites"}
        />
        <Related
          url={`/${"tv"}/${1429}/recommendations`}
          mediaType={"tv"}
          id={95479}
          title={"Best"}
        />
        <Related
          url={`/${"tv"}/${63926}/recommendations`}
          mediaType={"tv"}
          id={95479}
          title={"Trending"}
        />
        <Related
          url={`/${"tv"}/${13916}/recommendations`}
          mediaType={"tv"}
          id={95479}
          title={"Advanture"}
        />
        <Related
          url={`/${"tv"}/${61459}/recommendations`}
          mediaType={"tv"}
          id={95479}
          title={"Love"}
        />
        <Related
          url={`/${"tv"}/${88803}/recommendations`}
          mediaType={"tv"}
          id={95479}
          title={"Scientific"}
        />
      </Container>
    </div>
  );
}

export default Anime;
