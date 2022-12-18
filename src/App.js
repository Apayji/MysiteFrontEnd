import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Comments from "./pages/Comments";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rules" exact element={<Rules />} />
          <Route path="/comments" exact element={<Comments />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
