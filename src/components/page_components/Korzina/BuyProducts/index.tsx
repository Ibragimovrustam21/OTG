import { Col, Image, Rate, Row } from 'antd'
import { IPostProduct } from '../../../../interface'
import classes from './buyProducts.module.scss'

export const BuyProducts = ({ id, product_name, rate, cost, img, count }: IPostProduct) => {
  return (
    <Row className={classes.buy_products_box}>
      <Col span={10}>
        <Image
          style={{ borderRadius: '6px' }}
          width={130}
          src={img}
        />
      </Col>
      <Col span={14} style={{ paddingLeft: '20px' }}>
        <h4 className={classes.name}>Name: <span>{product_name}</span></h4>
        <h4>Cost: <span>£{cost}</span></h4>
        <h4>Rate: <Rate style={{ fontSize: '14px' }} disabled defaultValue={rate} /></h4>
        <h4>Count: <span>{count}</span></h4>
      </Col>
    </Row>
  )
}

export default BuyProducts