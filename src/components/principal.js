import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import '../styles/principal.css';
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

function Principal() {

  const { t, i18n } = useTranslation();

  const [dataApi, setDataApi] = useState({});
  const [images, setImages] = useState([]);

  const fetchUser = () => {
    const URL1 =
      "https://raw.githubusercontent.com/sfrancop/parcial-1-programacion-con-tecnologias-web/main/src/data.json";
    fetch(URL1)
      .then((data) => data.json())
      .then((data) => {
        setDataApi(data[0]);
      });
  }




  useEffect(() => {
    fetchUser();

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

    fetchImages();

    const lng = navigator.language;
    i18n.changeLanguage(lng);


  }, []);

  return (
    <div className="container">

      <section className="row wrapper">
        <Link to={"/perfil"} className="col-sm-4">
          <img className="info-container__picture" src={dataApi.picture} alt="profile-picture" /></Link>
        <div className="col-sm-8 info-container__description-container">
          <h1>{dataApi.username}</h1>
          <p><b>{dataApi.fisrstName} {dataApi.lastName}</b></p>
          <p>{dataApi.description}</p>
          <a href={dataApi.link} target="_blanck">{dataApi.link}</a>
          <div style={{ marginTop: "30px" }} className="row">
            <p className="col-sm"><b>{dataApi.posts}</b> {t('posts')} </p>
            <p className="col-sm"><b>{dataApi.followers}</b> {t('followers')} </p>
            <p className="col-sm"><b>{dataApi.following}</b> {t('following')} </p>
          </div>
        </div>

      </section>

      <section className="gallery-container">
        {images.length === 12 ? (
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            {images.map((image, index) => {
              return (
                <Col key={index} xs={12} sm={6} md={4}>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target={`#picture${index}`}>
                    <img src={image} className="img-fluid mb-3" />
                  </button>
                </Col>
              );
            })}
          </div>
        ) : (
          <p>Loading images...</p>
        )}
      </section>

      <section>
        {images.map((image, index) => {
          return (
            <div key={index} class="modal modal-xl fade" id={`picture${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img style={{ width: "100%" }} src={image}></img>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}

export default Principal;