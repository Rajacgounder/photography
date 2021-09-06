import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { SRLWrapper } from "simple-react-lightbox";
import { data } from "./Data";
import LazyImage from "./LazyImage";
import "./gallery.css";

function Gallery() {
  return (
    <div>
      <Header />
      <h1>GALLERY</h1>
      <SRLWrapper>
        <div className="container_image1 masonry">
          {data.map((image) => (
            <div key={image.id}>
              <a href={`/images/${image.imageName}`}>
                <div className="item">
                  <LazyImage
                    effect="blur"
                    src={`/images/${image.imageName}`}
                    alt=""
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
      <Footer />
    </div>
  );
}

export default Gallery;
