import './carousel.scss'
import { Button } from 'antd';
import Slider from "react-slick";

const MainCarousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
    ],
    autoplay: true,
    arrows: false,
    fade: true
  };
  return (
    <div className='carousel__wrapper'>
      <Slider {...settings}>
        <div className='carousel__item'>
          <div className='carousel__item--child'>
            <img className='carousel__img' src="http://atelier.swiftideas.com/wp-content/uploads/2015/04/slider_bkg_look.jpg" alt="" />
            <h2 className='carousel__title'>Inside Atelier: A Sneak Peek</h2>
            <h2 className='carousel__text'>Into Our Amazing Shop</h2>
            <Button type='primary' className='carousel__btn'>Learn more</Button>
          </div>
        </div>
        <div className='carousel__item'>
          <div className='carousel__item'>
            <div className='carousel__item--child'>
              <img className='carousel__img' src="http://atelier.swiftideas.com/wp-content/uploads/2015/04/slider_bkg_look.jpg" alt="" />
              <h2 className='carousel__title'>Inside Atelier: A Sneak Peek</h2>
              <h2 className='carousel__text'>Into Our Amazing Shop</h2>
              <Button type='primary' className='carousel__btn'>Learn more</Button>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  )
}


export default MainCarousel