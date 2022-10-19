import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { images, photoExt } from "./photos";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  justifyContent: "center",
  maxWidth: "95%",
  maxHeight: "95%",
});

export function ImageSwapper8() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Img
        alt="complex"
        src={`${currentImage}?w=300&h=200&fit=crop&auto=format`}
        sx={{
          height: 200,
          width: 300,
        }}
      />
    </>
  );
}

// 12 works with array

export function ImageSwapper12() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={`${currentImage}?w=800&h=600&fit=crop&auto=format`} />
      <h2>Swapper 12</h2>
      <p>{currentImage}</p>
    </div>
  );
}

export class ImageSwapper7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  tick() {
    if (this.state.currentIndex < photoExt.length - 1) {
      this.setState((state) => ({
        currentIndex: state.currentIndex + 1,
      }));
    } else {
      this.state.currentIndex = 0;
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 7 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log(this.state.currentIndex);
  }

  render() {
    //   return (
    //     <div>
    //       <h2>Swapper 7</h2>
    //       <p>{this.state.currentIndex}</p>
    //       <img
    //         src={`${
    //           photoExt[this.state.currentIndex]
    //         }?w=800&h=600&fit=crop&auto=format`}
    //       />
    //     </div>
    //   );
    // }

    return (
      <div>
        {/* <h2>Swapper 7</h2>
        <p>{photoExt[this.state.currentIndex]}</p> */}
        <Img
          alt="complex"
          src={`${
            photoExt[this.state.currentIndex]
          }?w=900&h=600&fit=crop&auto=format`}
        />
      </div>
    );
  }
}
