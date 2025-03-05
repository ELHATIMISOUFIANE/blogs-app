import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import AuthentificationPage from "./pages/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import NewBlogs from "./components/NewBlogs";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Auth" element={<AuthentificationPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/NewBlogs" element={<NewBlogs />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
