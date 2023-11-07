
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { useState } from "react"

type ImageSliderProps = {
    imageUrls:string[]
}

const ImageSlider = ({imageUrls}: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0);

    const showNextImage = () => {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index +1 
        })
    }
    const showPrevImage = () => {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index -1 
        })
    }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center pt-20">
    
    <div className="w-[750px] h-full relative ">
        <div className="w-full h-full overflow-hidden flex">
            {imageUrls.map((url) => (
            <img key={url} src={url} alt="image" className="object-cover w-full h-full block"/>
            ))}
        </div>
        <button onClick={showPrevImage} title="left" className=" block absolute top-0 bottom-0 p-4 stroke-white fill-black left-0 img-slider-btn hover:bg-black/20 transition-colors ease-in-out duration-100"><ArrowBigLeft /></button>
        <button onClick={showNextImage} title="right" className=" block absolute top-0 bottom-0 p-4 stroke-white fill-black right-0 img-slider-btn hover:bg-black/20 transition-colors ease-in-out duration-100"><ArrowBigRight /></button>
    </div>
    </main>
  )
};

export default ImageSlider;
