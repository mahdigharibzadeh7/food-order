import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Food from "./Components/Food";
import food from "./helpers/food";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Main />
      <div className="lg:flex">
        {food.map((f) => {
          return (
            <div key={f.imgSrc}>
              <Food imgSrc={f.imgSrc} foodName={f.name} foodPrice={f.price} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
