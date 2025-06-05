import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // 🧠 Lock scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // safety reset
    };
  }, [selectedImage]);

  return (
    <>
      <section className="gallery">
        <h1>BETTER BEATS BEST</h1>
        <div className="images">
          {[0, 3, 6].map((start) => (
            <div key={start}>
              {gallery.slice(start, start + 3).map((element, index) => (
                <img
                  key={index}
                  src={element}
                  alt="gallery"
                  onClick={() => setSelectedImage(element)}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="enlarged" />
        </div>
      )}
    </>
  );
};

export default Gallery;
