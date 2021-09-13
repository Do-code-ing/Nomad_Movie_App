import React from "react";
import Information from "../components/Information";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { title, year, poster, genres, summary, google } =
        this.props.location.state;
      return (
        <section className="info_container">
          <Information
            title={title}
            year={year}
            poster={poster}
            genres={genres}
            summary={summary}
            google={google}
          />
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
