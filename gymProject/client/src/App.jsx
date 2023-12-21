import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";

function App() {
  document.addEventListener("scroll", () => {
    console.log("scrolled");
  });
  return (
    <span className="global-bg">
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </span>
  );
}

export default App;
