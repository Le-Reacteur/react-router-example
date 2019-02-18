import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">Lien vers About</Link>
        <br />
        <Link to="/article/5bf53c80ad3fb30014389133">Lien vers un article</Link>
      </div>
    );
  }
}

export default Home;
