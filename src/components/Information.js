import React from "react";
import PropTypes from "prop-types";
import "./Information.css";

function Information({ year, title, summary, poster, genres, google }) {
  return (
    <div className="movie_info">
      <img src={poster} alt={title} title={title} />
      <a href={google} rel="noreferrer" target="_blank">
        Google It
      </a>
      <div className="movie_info_data">
        <h3 className="movie_info_title">{title}</h3>
        <h5 className="movie_info_year">{year}</h5>
        <ul className="movie_info_genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie_info_genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_info_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Information.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  google: PropTypes.string.isRequired,
};

export default Information;
