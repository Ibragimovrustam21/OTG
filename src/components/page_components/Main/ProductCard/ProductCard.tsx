import classes from './productCard.module.scss'
import { Rate } from 'antd';
import { IPostProduct } from '../../../../interface';
import { Link } from 'react-router-dom';

const ProductCard = ({ product_name, cost, id, rate, img }: IPostProduct) => {
  return (
    <Link style={{ color: '#444' }} to={`products/${id}/${product_name}`}>
      <div className={classes.product_card}>
        <div className={classes.card_img}>
          <img src={img} alt="" />
        </div>
        <div className={classes.card_body}>
          <div className={classes.description}>
            <h3>{product_name}</h3>
            <p className={classes.cost}>Cost: <span>£ {cost}</span></p>
          </div>
          <div className={classes.description}>
            <p className={classes.product_category}>Category: <span>{id}</span></p>
            <div className={classes.rate__block}>
              <p>Rate:</p>
              <span className={classes.rate_box}><Rate style={{ fontSize: '14px' }} className={classes.rate} disabled defaultValue={rate} /></span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard