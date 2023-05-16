import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "87vh" }}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
