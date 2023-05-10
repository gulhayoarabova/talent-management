import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BMW from "../images/bmw-logo-683.png";
import Merc from "../images/merc.png";
import Audi from "../images/audi.png";
import Porsche from "../images/porsche.png";
import Lambo from "../images/lamborghini.png";

import classes from "../styles/Slider.module.scss";
import Image from "next/image";

const sliderImg = [
  {
    id: 1,
    img: BMW,
  },
  {
    id: 2,
    img: Porsche,
  },
  {
    id: 3,
    img: Audi,
  },
  {
    id: 4,
    img: Porsche,
  },
  {
    id: 5,
    img: Lambo,
  },
  {
    id: 6,
    img: BMW,
  },
  {
    id: 7,
    img: Audi,
  },
  {
    id: 8,
    img: Porsche,
  },
];
console.log(sliderImg);
const Sliderr = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <div className={classes.slide_wrapper}>
      <Slider {...settings}>
        {sliderImg.map(( el,id) => (
          <div key={id}>
            <Image src={el.img} alt="" className={classes.slider_img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderr;
