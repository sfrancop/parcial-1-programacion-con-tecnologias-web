import Item from "./item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "./formulario";
import { useEffect, useState } from "react";

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

  const fetchImages = () => {
    const URL2 =
    "https://picsum.photos/350";
      fetch(URL2)
        .then((data) => {
          setImages(images.push(data.url));
        });
  }


  useEffect(() => {
    fetchUser();
    for(let i = 0; i < 12; i++){
      fetchImages();
    }


  }, []);

  return (
    <div className="container">

      <section className="info-container">
        <img src="https://media.licdn.com/dms/image/D4E03AQGykjGV4y553w/profile-displayphoto-shrink_800_800/0/1703073087373?e=1715817600&v=beta&t=FMGOLhkl8n0cYYeDY9HkeBryidV2LIUknqPleLLiL3w" alt="profile-picture" width="300px" />
        <div>
          <h1>{dataApi.username}</h1>
          <p><b>{dataApi.fisrstName} {dataApi.lastName}</b></p>
          <p>{dataApi.description}</p>
        </div>
      </section>

      <section className="gallery-container">
        <h2>Gallery</h2>
        <Row>
          {images.map((image, index) => {
            return (
              <Col key={index} xs={12} md={4}>
                <img src={image}/>
              </Col>
            );
          })}
        </Row>
      </section>


    </div>
  );
}

export default Principal;