import "./App.css"

import house1 from "./images/house-1.jpg"
import house2 from "./images/house-2.jpg"
import house3 from "./images/house-3.jpg"
import house4 from "./images/house-4.jpg"
import house5 from "./images/house-5.jpg"
import house6 from "./images/house-6.jpg"

import { ImageSlider } from "./components"

const IMAGES = [house1, house2, house3, house4, house5, house6]

function App() {

  return (
    <main className="flex flex-col justify-center items-center max-w-[1200px] w-full h-[500px]">
      <ImageSlider imageUrls={IMAGES}/>
    </main>
  );
}

export default App;
