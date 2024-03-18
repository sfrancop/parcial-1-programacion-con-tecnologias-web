import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import '../styles/principal.css';
import ProfileHeader from "./profile-header";
import ImageModal from "./image-modal";
import ClickableImage from "./clickable-image";

export default function Principal() {

  const [images, setImages] = useState([]);




  const fetchImages = async () => {
    try {
      const newImages = [];
      for (let i = 0; i < 12; i++) {
        const response = await fetch(`https://picsum.photos/800`);
        const data = await response;
        newImages.push(data.url);
      }
      setImages(newImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container">

      <ProfileHeader/>


      <section className="gallery-container">
        {images.length === 12 ? (
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            {images.map((image, index) => {
              return (
                <Col key={index} xs={12} sm={6} md={4}>
                  <ClickableImage index={index} image={image} />
                </Col>
              );
            })}
          </div>
        ) : (
          <p>Loading images...</p>
        )}
      </section>

    </div>
  );
}