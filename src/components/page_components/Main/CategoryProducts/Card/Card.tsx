import { Col } from 'antd'
import { Link } from 'react-router-dom'
import { ICategoryProducts } from '../../../../../interface'
import classes from './card.module.scss'



const Card = ({ img, id }: ICategoryProducts) => {
  console.log(img,id);
  
  return (
    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
      <div className={classes.product_mini_card}>
        <div className={classes.product_mask} />
        <img src={img} alt="" />
        <Link to={`/products/${id}`}>
          Shop {id}
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.172 7.00066L6.808 1.63666L8.222 0.222656L16 8.00066L8.222 15.7787L6.808 14.3647L12.172 9.00066H0V7.00066H12.172Z" fill="black" />
          </svg>
        </Link>
      </div>
    </Col>
  )
}

export default Card