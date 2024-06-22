import logo from './logo.svg';
import Star from './Component/Star';
import ImageSlider from './image_slider/Slider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Star numStar={10}/> */}

        <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> 
      </header>
    </div>
  );
}

export default App;
