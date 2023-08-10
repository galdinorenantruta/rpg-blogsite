import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../assets/data";

const PostDetail = () => {
  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === parseInt(id));
  if (!selectedItem) {
    return <div>Artigo não encontrado</div>;
  }
  return (
    <div>
      <article className="container lg:max-w-3xl mx-auto px-4 mt-8 ">
        <Link to="/">
          <div className="p-6 border border-yellow-400 rounded m-4">
            <img id="image" src={selectedItem.image} alt={selectedItem.title} />
            <p className="text-yellow-400">{selectedItem.caption}</p>
          </div>

          <article className="items-center text-center mt-5 mx-6">
            <h1 className="text-3xl my-5">{selectedItem.title}</h1>
            <p className="mb-4">{selectedItem.text}</p>
          </article>
        </Link>
      </article>
    </div>
  );
};

export default PostDetail;
