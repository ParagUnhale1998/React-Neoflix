import React, { useCallback, useEffect, useState } from "react";
import Container from "./Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // const navigate = useNavigate();
  const location = useLocation();

  const mediaType = location.pathname;

  useEffect(() => {
    console.log(mediaType);
  }, [mediaType]);
  const navList = [
    { name: "Home", url: "/home", id: 0 },
    { name: "TV", url: "/explore/tv", id: 1 },
    { name: "Movies", url: "/explore/movie", id: 2 },
    { name: "Anime", url: "/explore/anime", id: 3 },
  ];

  // Run only when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Memoize the controlNavbar function to optimize performance
  const controlNavbar = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY > 5) {
      if (scrollY > lastScrollY) {
        setShow("hide"); // Scroll down
      } else {
        setShow("show"); // Scroll up
      }
    } else {
      setShow("top"); // At the top of the page
    }

    setLastScrollY(scrollY); // Update last scroll position
    console.log(scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/explore/search/${query}`);
      setQuery('')
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header
      className={`z-50 fixed top-0 transform  border-netflixGray-700 border-b-[1px] w-screen transition-all duration-300 overflow-x-hidden ease-in-out
    ${
      show === "top"
        ? " translate-y-[0]"
        : show === "show"
        ? "bg-netflixbackground bg-opacity-50 backdrop-filter backdrop-blur-[3.5px] "
        : "translate-y-[-70px]"
    }`}
    >
      <nav className="relative flex flex-col justify-center items-center w-full">
        <Container>
          <div className="flex justify-start items-center gap-4 nav-tab-container">
            <div className="logo-container">
              <Link to="/home">
                {/* <img
                  className="w-32 h-[60px]"
                  src={"assets/logo.png" || "../assets/logo.png" || ''} 
                  alt=""
                /> */}
                <h1 className="font-bold text-3xl text-netflixRed uppercase tracking-wider">NeoFLix</h1>
              </Link>
            </div>
            <div className="sm:flex justify-between items-center hidden w-full tabs-container">
              <ul className="flex justify-center items-center gap-4">
                {navList.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={` ${
                        mediaType === item.url
                          ? "text-netflixRed"
                          : "text-white"
                      } py-3 font-semibold text-lg  hover:text-netflixRed 2`}
                    >
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
              <div className="search-container text-white">
                <div className="flex justify-between items-center hover:bg-netflixbackground hover:bg-opacity-50 rounded-md input-container">
                  <input
                    type="text"
                    className="bg-transparent px-2 py-4 border-none w-full cursor-pointer outline-none"
                    placeholder="Search...."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />

                  <button
                    onClick={handleSearch}
                    className="hover:bg-netflixWhite px-3 p-2 rounded-full text-netflixWhite hover:text-netflixBlack"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;

/*  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Function to control header visibility based on scroll position
  const controlNavbar = () => {
    const scrollY = window.scrollY;

    if (scrollY > 5) {
      if (scrollY > lastScrollY) {
        setShow("hide"); // Scroll down
      } else {
        setShow("show"); // Scroll up
      }
    } else {
      setShow("top"); // At the top of the page
    }

    setLastScrollY(scrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);*/
