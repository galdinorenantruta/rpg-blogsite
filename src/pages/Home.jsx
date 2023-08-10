import React from "react";
import "../styles/home.css";
import data from "../assets/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container flex flex-col p-10 lg:flex-row lg:gap-10">
      <section className="lg:w-4/5 lg:border-r-2 ">
        {data.map((item, index) => (
          <article key={index} className="lg:flex">
            <Link to={`/post/${item.id}`}>
              <div className="my-8 rounded overflow-hidden border border-emerald-300">
                <div className=" lg:w-64 lg:h-40 lg:flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>

                <p className="text-yellow-400 ml-4 text-sm">{item.caption}</p>
              </div>
            </Link>
            <div className="items-center text-center mt-5 mx-6 whitespace-normal flex-1">
              <h2 className=" my-2 text-4xl font-bold">{item.title}</h2>
              <h3 className="mb-2 text-lg font-bold">{item.subtitle}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>
      <div className=" lg:hidden w-4/5 mx-auto border-b-2 border-gray-500 mt-5"></div>
      <div className=" lg:block lg:w-1/5 lg:sticky lg:top-0 ">
        <aside className="flex lg:inline items-center justify-center gap-5 mt-5 mb-5">
          <div>
            <h2 className="mb-2 text-lg font-bold">Mais populares</h2>
            <ul>
              <li>
                <a href="#">D&D</a>
              </li>

              <li>
                <a href="#">Vampiro</a>
              </li>

              <li>
                <a href="#">3d&T</a>
              </li>

              <li>
                <a href="#">Star Wars</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold">Novidades</h2>
            <ul>
              <li>
                <a href="#">D&D</a>
              </li>

              <li>
                <a href="#">Vampiro</a>
              </li>

              <li>
                <a href="#">3d&T</a>
              </li>

              <li>
                <a href="#">Star Wars</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Home;
