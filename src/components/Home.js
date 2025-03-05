// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentRoute, setCurrentRoute] = useState();
  // useEffect(() => {
  //   const path = window.location.pathname.toLocaleLowerCase(); // pour récuperer le urls depuis le path
  //   setCurrentRoute(path.slice(1, path.length)); //affecter la variable path dans le useState (CurrentRoute)
  // });
  return (
    <div className="p-1 m-1">
      <nav className="m-1 p-2 border border-success">
        <ul className="nav nav-pills">
          <li>
            <Link
              onClick={() => setCurrentRoute("home")}
              className={
                currentRoute === "home"
                  ? "btn btn-success ms-1"
                  : "btn btn-outline-success ms-1"
              }
              to={"/home"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCurrentRoute("blogs")}
              className={
                currentRoute === "blogs"
                  ? "btn btn-success ms-1"
                  : "btn btn-outline-success ms-1"
              }
              to={"/blogs"}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCurrentRoute("newblogs")}
              className={
                currentRoute === "newblogs"
                  ? "btn btn-success ms-1"
                  : "btn btn-outline-success ms-1"
              }
              to={"/newblogs"}
            >
              new Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div className="card">
        <div className="card-body">
          <h3>Home Comopent </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
