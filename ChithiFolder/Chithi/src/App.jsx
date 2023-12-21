import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Profile from "./Profile/Profile";
import Navbar from "./Navbar/Navbar";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <script type="module" src="./VinellaJS/ActiveHandler.js"></script>
    </>
  );
}

export default App;
