import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import PCarousel from '../../components/page_components/Main/Carousel/Carousel'
import FeautureProducts from '../../components/page_components/Main/FeautureProducts'
import classes from './main.module.scss'
import CategoryProducts from '../../components/page_components/Main/CategoryProducts'
import TrendProducts from '../../components/page_components/Main/TrendProducts'

const Main = () => {
  return (
    <div className={classes.wrapper}>
      <PCarousel />
      <CategoryProducts />
      <TrendProducts />
      <Row>
        <Col className={classes.banner} span={24}>
          <div className={classes.product_mask} />
          <h2 className={classes.banner__text}>Welcome to the very best in globally sourced
            premium goods. We offer free shipping,
            free returns and a secure shopping experience.</h2>
          <Link className={classes.banner__link} to='/products'>
            Start shopping
          </Link>
        </Col>
      </Row>
      <Row className={classes.advantages_block}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} className={classes.advantages_box}>
          <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0C14.5523 0 15 0.447715 15 1V2H20V8H17.9813L20.7271 15.5439C20.9033 15.9948 21 16.4856 21 16.999C21 19.2082 19.2091 20.999 17 20.999C15.1365 20.999 13.5707 19.7247 13.1263 18H8.87398C8.42994 19.7252 6.86384 21 5 21C3.05551 21 1.43508 19.6125 1.07474 17.7736C0.435964 17.4396 0 16.7707 0 16V6C0 5.44772 0.447715 5 1 5H8C8.55228 5 9 5.44772 9 6V11C9 11.5523 9.44772 12 10 12H12C12.5523 12 13 11.5523 13 11V2H10V0H14ZM5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15ZM17 14.999C15.8954 14.999 15 15.8944 15 16.999C15 18.1036 15.8954 18.999 17 18.999C18.1046 18.999 19 18.1036 19 16.999C19 16.7587 18.9576 16.5282 18.8799 16.3148L18.8635 16.2714C18.5725 15.5266 17.8479 14.999 17 14.999ZM15.853 8H15V11C15 12.6569 13.6569 14 12 14H10C8.34315 14 7 12.6569 7 11H2V14.3542C2.73294 13.5238 3.80531 13 5 13C6.86384 13 8.42994 14.2748 8.87398 16H13.1258C13.5695 14.2743 15.1358 12.999 17 12.999C17.2368 12.999 17.4688 13.0196 17.6943 13.0591L15.853 8ZM7 7H2V9H7V7ZM18 4H15V6H18V4Z" fill="white" />
          </svg>
          <h3>Fast Delivery</h3>
          <p>Lorem ipsum dolor sit amet isse potenti.
            Vesquam ante aliquet lacusemper elit.
            Cras neque nulla, convallis non commodo et, euismod nonsese.
          </p>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} className={classes.advantages_box}>
          <svg viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0L17.217 1.826C17.674 1.928 18 2.333 18 2.802V12.789C18 14.795 16.997 16.669 15.328 17.781L9 22L2.672 17.781C1.002 16.668 0 14.795 0 12.79V2.802C0 2.333 0.326 1.928 0.783 1.826L9 0ZM9 2.049L2 3.604V12.789C2 14.126 2.668 15.375 3.781 16.117L9 19.597L14.219 16.117C15.332 15.375 16 14.127 16 12.79V3.604L9 2.05V2.049ZM13.452 7.222L14.867 8.636L8.503 15L4.26 10.757L5.674 9.343L8.502 12.171L13.452 7.221V7.222Z" fill="white" />
          </svg>

          <h3>Fast Delivery</h3>
          <p>Lorem ipsum dolor sit amet isse potenti.
            Vesquam ante aliquet lacusemper elit.
            Cras neque nulla, convallis non commodo et, euismod nonsese.
          </p>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} className={classes.advantages_box}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11C11.657 11 13 12.343 13 14C13 14.85 12.647 15.616 12.08 16.162L10.17 18H13V20H7V18.276L10.693 14.721C10.883 14.538 11 14.283 11 14C11 13.448 10.552 13 10 13C9.448 13 9 13.448 9 14H7C7 12.343 8.343 11 10 11ZM16 11V15H18V11H20V20H18V17H14V11H16ZM2 10C2 12.527 3.171 14.78 5 16.246V18.662C2.011 16.933 0 13.702 0 10H2ZM10 0C15.185 0 19.449 3.947 19.95 9H17.938C17.446 5.054 14.08 2 10 2C7.25 2 4.824 3.387 3.385 5.5H6V7.5H0V1.5H2V4C3.824 1.57 6.729 0 10 0Z" fill="white" />
          </svg>

          <h3>Fast Delivery</h3>
          <p>Lorem ipsum dolor sit amet isse potenti.
            Vesquam ante aliquet lacusemper elit.
            Cras neque nulla, convallis non commodo et, euismod nonsese.
          </p>
        </Col>
      </Row>
      <FeautureProducts />
    </div>
  )
}
export default Main