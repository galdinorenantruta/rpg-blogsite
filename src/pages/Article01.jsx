import React from "react";
import "../styles/article.css";
import { useParams, Link } from "react-router-dom";
import data from "../assets/data";

const Article01 = () => {
  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Artigo não encontrado</div>;
  }
  return (
    <div>
      <content>
        <Link to="/">
          <img id="image" src={selectedItem.image} alt={selectedItem.title} />
          <article>
            <h1>{selectedItem.title}</h1>
            <p>{selectedItem.text}</p>
          </article>
        </Link>
      </content>
    </div>
  );
};

export default Article01;
