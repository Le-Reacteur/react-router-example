import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div>
        <h1>Article avec l'id {this.props.match.params.articleId}</h1>
      </div>
    );
  }
}

export default Article;
