import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/header/navbar";
import Competitions from "./components/body/competitons";
import Matches from "./components/body/matches";
import Title from "./components/body/title";
import Search from "./components/body/search";
import Card from "./components/body/card";
import Footer from "./components/footer/footer";
import Navigation from "./components/body/navigation";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <hr className="border-[1px] border-solid border-[#fff] w-full mt-4 opacity-5" />
      <div className="container mx-auto">
        <Competitions />
        <Matches />
        <Title />
        <Search />
        <Card />
        <Navigation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
