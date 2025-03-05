import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import NewBlogs from "./components/NewBlogs";

function App() {
  const [currentRoute, setCurrentRoute] = useState();

  useEffect(() => {
    const path = window.location.pathname.toLocaleLowerCase(); // pour récuperer le urls depuis le path
    setCurrentRoute(path.slice(1, path.length)); //affecter la variable path dans le useState (CurrentRoute)
  });
  return (
    <BrowserRouter>
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
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/NewBlogs" element={<NewBlogs />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
