import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about_div">
      <div className="about_container">
        <span>
          The Top 20 Movies information from <b>YTS API</b>
        </span>
        <a href="https://yts.mx/" rel="noreferrer" target="_blank">
          The Official Home of YIFY Movies Torrent Download - YTS
        </a>
      </div>
      <div className="about_container">
        <span>
          Movie App with <b>Nomad Coders</b>
        </span>
        <a href="https://nomadcoders.co/" rel="noreferrer" target="_blank">
          노마드 코더 Nomad Coders - Colon Startups
        </a>
        <br />
        <a
          href="https://www.youtube.com/c/%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders"
          rel="noreferrer"
          target="_blank"
        >
          노마드 코더 Nomad Coders - Youtube
        </a>
      </div>
    </div>
  );
}

export default About;
