import React from 'react'
import Slider from 'react-slick';
import Projects from './Projects';
import SpotifyImg from '../../assets/Spotify.jpg'
import LivlinanImg from '../../assets/LivlinanImg.png'
import AfnImg from '../../assets/AfnImg.png'
import TTImg from '../../assets/TTImg.png'



const Carouseldata = [

  {
      img: SpotifyImg,
      url: "/spotify",
      text: "Spotify",
      
  },

  {
      img: LivlinanImg,
      url: "/livlinan",
      text: "Livlinan",
  },

  {
      img: AfnImg,
      url: "/spotify",
      text: "AFN",
  },

  {
      img: TTImg,
      url: "/livlinan",
      text: "Tiny Treasures",
  }

]

const SliderComp = () => {
    let SliderProject = "";
    SliderProject = Carouseldata.map((item, i) => <Projects item = {item} key={i}/>)

    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    <Slider {...settings}>
        {SliderProject}
    </Slider>
  )
}

export default SliderComp