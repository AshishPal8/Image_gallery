import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
      }&q=${term}&image_type=photo&pretty=true`
    )
      .then((resolve) => resolve.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]);
  return (
    <div className="container mx-auto w-[80%]">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center font-bold mx-auto mt-32">
          No Images Found 🥹
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center font-bold mx-auto mt-32">
          Loading....
        </h1>
      ) : (
        <div className="flex flex-wrap gap-5 max-h-auto w-full">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
