import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: "87vh" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
