import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import classes from './feautureProducts.module.scss'

const FeautureProducts = () => {
  let cx = require('classnames');

  let mini_card_items = cx({
    [classes.items_box]: true,
    [classes.mini_card_items]: true
  })
  let normal_card_items = cx({
    [classes.items_box]: true,
    [classes.normal_card_items]: true
  })

  return (
    <Row gutter={[24, 24]} className={classes.wrapper}>
      <Col className={classes.page_header} span={24}>
        <h2>FEATURED ITEMS</h2>
        <Link to="/">View all product</Link>
      </Col>
      <Col span={10} xs={24} sm={12} md={12} lg={12} xl={10}>
        <Link to='/'>
          <div className={normal_card_items}>
            <div className={classes.product_mask} />
            <img src="http://atelier.swiftideas.com/wp-content/uploads/2014/12/Atelier-gift_card_100.jpg" alt="" />
            <div className={classes.product_name}>
              <h3>Gift card</h3>
              <p>Accesories</p>
            </div>
            <div className={classes.product_cost}>
              <p>£100</p>
            </div>
          </div>
        </Link>
      </Col>
      <Col span={14} xs={24} sm={12} md={12} lg={12} xl={14}>
        <Link to='/'>
          <div className={normal_card_items}>
            <div className={classes.product_mask} />
            <img src="http://atelier.swiftideas.com/wp-content/uploads/2014/11/acne-scarf-leo01alt.jpg" alt="" />
            <div className={classes.product_name}>
              <h3>Canada Terrazzo Scarf</h3>
              <p>Accesories</p>
            </div>
            <div className={classes.product_cost}>
              <p>£140</p>
            </div>
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Link to='/'>
          <div className={mini_card_items}>
            <div className={classes.product_mask} />
            <img src="http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-slipper-grey0001_1alt.jpg" alt="" />
            <div className={classes.product_name}>
              <h3>Slip-Ons</h3>
              <p>Footwear</p>
            </div>
            <div className={classes.product_cost}>
              <p>£205</p>
            </div>
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Link to='/'>
          <div className={mini_card_items}>
            <div className={classes.product_mask} />
            <img src="http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-slipper-grey0001_1alt.jpg" alt="" />
            <div className={classes.product_name}>
              <h3>Slip-Ons</h3>
              <p>Footwear</p>
            </div>
            <div className={classes.product_cost}>
              <p>£205</p>
            </div>
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Link to='/'>
          <div className={mini_card_items}>
            <div className={classes.product_mask} />
            <img src="http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-slipper-grey0001_1alt.jpg" alt="" />
            <div className={classes.product_name}>
              <h3>Slip-Ons</h3>
              <p>Footwear</p>
            </div>
            <div className={classes.product_cost}>
              <p>£205</p>
            </div>
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Link to='/'>
          <div className={mini_card_items}>
            <div className={classes.product_mask} />
            <img src="http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-slipper-grey0001_1alt.jpg" alt="" />
            <div className={classes.product_name}>
              <h3>Slip-Ons</h3>
              <p>Footwear</p>
            </div>
            <div className={classes.product_cost}>
              <p>£205</p>
            </div>
          </div>
        </Link>
      </Col>
    </Row>
  )
}
export default FeautureProducts