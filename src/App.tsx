import { useState } from "react";
import "./App.css";
import imageUrl from "./assets/fuck-you-removebg-preview.png";

function App() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="container">
      {!showImage ? (
        <button onClick={() => setShowImage(true)} className="open-btn">
          Pa testing 
        </button>
      ) : (
        <img src={imageUrl} alt="Replaced" className="fade-in-wiggle " />
      )}
    </div>
  );
}

export default App;
