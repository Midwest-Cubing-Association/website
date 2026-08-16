import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Competitions from "./pages/Competitions";
import Delegates from "./pages/Delegates";
import News from "./pages/News";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/competitions">Competitions</Link>{" "}
        <Link to="/delegates">Delegates</Link>{" "}
        <Link to="/news">News</Link>{" "}
        <Link to="/store">Store</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/faq">FAQ</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/delegates" element={<Delegates />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;