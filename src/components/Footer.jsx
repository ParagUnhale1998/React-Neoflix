import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="relative border-netflixGray-700 bg-netflixbackground py-2 border-t-[1px] w-screen transition-all duration-300 overflow-x-hidden ease-in">
      <div className="relative flex flex-col justify-center items-center">
        <Container>
          <div className="flex justify-center sm:justify-between items-center text-netflixWhite">
            <div className="logo-container">
              <Link to="/">
                {/* <img className="w-32" src="assets/logo.png" alt="" /> */}
                <h1 className="font-bold text-3xl text-netflixRed uppercase tracking-wider">NeoFLix</h1>

              </Link>
            </div>
            <div className="flex justify-center items-center gap-3 font-semibold text-center text-sm">
              © {date}
              <Link
                className="text-center underline"
                to={"https://in.linkedin.com/in/parag-unhale"}
                target="_blank"
              >
                Parag Unhale
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
