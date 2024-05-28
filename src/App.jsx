import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import CustomModal from "./components/CustomModal";

const App = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home />} />
            <Route path="topics" element={<Topics />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
