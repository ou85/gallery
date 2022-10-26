import React, { useEffect, useState } from "react";
import { images } from "./photos";

// export default function ImageSwapper() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (currentIndex === images.length - 1) {
//         setCurrentIndex(0);
//       } else {
//         setCurrentIndex(currentIndex + 1);
//       }
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);
//   console.log(currentIndex);
//   return (
//     <div>
//       <img src={images[currentIndex]} />
//     </div>
//   );
// }

///////////////////////////////////////////////
// export default function ImageSwapper() {
const ImageSwapper = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://picsum.photos/900/600"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={`${currentImage}?w=800&h=600&fit=crop&auto=format`} />
    </div>
  );
};
export default ImageSwapper;
//////////////////////////////////////////////
