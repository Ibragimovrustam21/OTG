import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import ProductCard from '../ProductCard';
import { useQuery } from 'react-query';
import { getCategories } from '../../../../api/Categories';
import Slider from "react-slick";

// interface
import { ICategories } from '../../../../interface';
// style
import './trendProducts.scss'

const TrendProducts = () => {
  const { data: response, isLoading, isSuccess, isError } = useQuery(
    'trend-products',
    getCategories
  )
  let settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  };
  return (
    <Row className='trend__products--wrapper' gutter={[16, 16]}>
      <Col className='page_header' span={24} >
        <h2>Trending this week</h2>
        <Link to="/">View all product</Link>
      </Col>
      <div className='carousel'>
        <Slider {...settings}>
          {
            isSuccess && response.data.map((item: ICategories) => {
              const { img, cost, rate, product_name } = item.images[1]
              return (
                <div className='carousel__item' key={item.id}>
                  <ProductCard img={img} id={item.id} rate={rate} cost={cost} product_name={product_name} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </Row >
  )
}
export default TrendProducts