

import Carousel from "react-bootstrap/Carousel";
import NavBar from "../NavBar/NavBar";
import "./Landing.css";
import { Footer } from "../Footer/Footer";


const Landing = () => {

  return (
    <div>
      <NavBar />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://d500.epimg.net/cincodias/imagenes/2020/12/31/lifestyle/1609408585_467254_1609408795_noticia_normal.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d500.epimg.net/cincodias/imagenes/2020/12/31/lifestyle/1609408585_467254_1609408795_noticia_normal.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Footer/>
    </div>
  );
};
export default Landing;
