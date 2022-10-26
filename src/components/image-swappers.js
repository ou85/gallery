import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { images, photoExt, itemData, randomPhotos } from "./photos";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  justifyContent: "center",
  maxWidth: "95%",
  maxHeight: "95%",
});

export class ImageSwapper5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  tick() {
    if (this.state.currentIndex < itemData.length - 1) {
      this.setState((state) => ({
        currentIndex: state.currentIndex + 1,
      }));
    } else {
      this.state.currentIndex = 0;
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 15 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log(this.state.currentIndex);
  }

  render() {
    return (
      <div>
        <Img
          alt="complex"
          src={`${
            itemData[this.state.currentIndex].img
          }?w=800&h=600&fit=crop&auto=format`}
        />
      </div>
    );
  }
}

// 12 works with array

export class ImageSwapper6 extends React.Component {
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
    this.interval = setInterval(() => this.tick(), 6 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log(this.state.currentIndex);
  }

  render() {
    return (
      <div>
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

// swapper for the big pic

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
        <Link to="/">
          <Img
            alt="complex"
            src={`${
              photoExt[this.state.currentIndex]
            }?w=800&h=600&fit=crop&auto=format`}
          />
        </Link>
      </div>
    );
  }
}

export function ImageSwapper8() {
  const defaultPic =
    "https://picsum.photos/1920/1080?w=300&h=200&fit=crop&auto=format";
  const [currentImage, setCurrentImage] = useState(defaultPic);

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

export function ImageSwapper10() {
  const defaultPic =
    "https://picsum.photos/1920/1080?w=900&h=600&fit=crop&auto=format";
  const [currentImage, setCurrentImage] = useState(defaultPic);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(photoExt[Math.floor(Math.random() * photoExt.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Link to="/">
        <Img
          // src={currentImage}
          src={`${currentImage}?w=900&h=600&fit=crop&auto=format`}
        />
      </Link>
      {console.log(currentImage)}
    </div>
  );
}

export function ImageSwapper12() {
  const defaultPic =
    "https://picsum.photos/1920/1080?w=300&h=200&fit=crop&auto=format";
  const [currentImage, setCurrentImage] = useState(defaultPic);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(photoExt[Math.floor(Math.random() * photoExt.length)]);
    }, 10 * 1000);

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

// return `https://images.unsplash.com/random?w=800&q=95`;
