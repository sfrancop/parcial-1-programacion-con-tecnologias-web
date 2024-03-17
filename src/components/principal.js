import Item from "./item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "./formulario";
import { useEffect, useState } from "react";
import '../styles/principal.css';
import { Link } from "react-router-dom";

function Principal(props) {

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
          const response = await fetch(`https://picsum.photos/350`);
          const data = await response;
          newImages.push(data.url);
        }
        setImages(newImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    //fetchImages();


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
          <div style={{marginTop: "30px"}} className="row">
            <p className="col-sm"><b>{dataApi.posts}</b> posts </p>
            <p className="col-sm"><b>{dataApi.followers}</b> followers </p>
            <p className="col-sm"><b>{dataApi.following}</b> following </p>
          </div>
        </div>

      </section>

      <section className="gallery-container">
        {images.length === 12 ? (
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            {images.map((image, index) => {
              return (
                <Col key={index} xs={12} sm={6} md={4}>
                  <img src={image} className="img-fluid mb-3" />
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

export default Principal;