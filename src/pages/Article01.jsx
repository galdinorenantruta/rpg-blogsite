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
      <article className="mt-8 p-7">
        <Link to="/">
          <div className="w-3/4">
            <img
              className="p-4 mx-auto"
              id="image"
              src={selectedItem.image}
              alt={selectedItem.title}
            />
          </div>

          <div>
            <h1>{selectedItem.title}</h1>
            <p>{selectedItem.text}</p>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default Article01;
