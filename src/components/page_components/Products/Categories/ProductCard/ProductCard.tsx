import { useState } from 'react';
import { Image, Rate } from 'antd'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query';
import { IPostProduct, IProductCard } from '../../../../../interface';
import { postProducts } from '../../../../../api/Products';
import classes from './productCard.module.scss'

const ProductCard = ({ id, img, product_name, categories, cost, rate, product_page, description, count = 1 }: IProductCard) => {
  const [visible, setVisible] = useState(false)
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(postProducts)

  const postProduct = async (arg: IPostProduct) => {
    await mutateAsync(arg)
    queryClient.invalidateQueries('get-products')
  }

  return (
    <div className={classes.product_card_box}>
      <div className={classes.product_img_link}>
        <Link to={product_page ? `${categories}/${product_name}` : `${product_name}`}>
          <Image
            width='100%'
            height='100%'
            src={img}
            preview={{
              visible,
              src: img,
              mask: false,
              onVisibleChange: value => {
                setVisible(value);
              }
            }}
          />
        </Link>
        <div className={classes.bought_box}>
          <div onClick={() => postProduct({ id, img, rate, cost, product_name, description, count })} className={classes.svg_box}>
            <Link to={'/buy-products'}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.00008 5.41481L0.75708 2.17281L2.17208 0.757812L5.41408 4.00081H20.6561C20.8119 4.0008 20.9657 4.03723 21.1049 4.10718C21.2442 4.17713 21.3652 4.27868 21.4583 4.40371C21.5514 4.52874 21.6139 4.6738 21.641 4.8273C21.668 4.9808 21.6588 5.1385 21.6141 5.28781L19.2141 13.2878C19.1523 13.4939 19.0258 13.6746 18.8532 13.803C18.6806 13.9315 18.4712 14.0008 18.2561 14.0008H6.00008V16.0008H17.0001V18.0008H5.00008C4.73486 18.0008 4.48051 17.8955 4.29297 17.7079C4.10544 17.5204 4.00008 17.266 4.00008 17.0008V5.41481ZM6.00008 6.00081V12.0008H17.5121L19.3121 6.00081H6.00008ZM5.50008 22.0008C5.10226 22.0008 4.72072 21.8428 4.43942 21.5615C4.15812 21.2802 4.00008 20.8986 4.00008 20.5008C4.00008 20.103 4.15812 19.7215 4.43942 19.4402C4.72072 19.1588 5.10226 19.0008 5.50008 19.0008C5.8979 19.0008 6.27944 19.1588 6.56074 19.4402C6.84204 19.7215 7.00008 20.103 7.00008 20.5008C7.00008 20.8986 6.84204 21.2802 6.56074 21.5615C6.27944 21.8428 5.8979 22.0008 5.50008 22.0008ZM17.5001 22.0008C17.1023 22.0008 16.7207 21.8428 16.4394 21.5615C16.1581 21.2802 16.0001 20.8986 16.0001 20.5008C16.0001 20.103 16.1581 19.7215 16.4394 19.4402C16.7207 19.1588 17.1023 19.0008 17.5001 19.0008C17.8979 19.0008 18.2794 19.1588 18.5607 19.4402C18.842 19.7215 19.0001 20.103 19.0001 20.5008C19.0001 20.8986 18.842 21.2802 18.5607 21.5615C18.2794 21.8428 17.8979 22.0008 17.5001 22.0008Z" fill="black" />
              </svg>
            </Link>
          </div>
          <div className={classes.svg_box}>
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V20.276C18.0001 20.3594 17.9793 20.4416 17.9395 20.5149C17.8997 20.5882 17.8422 20.6505 17.7722 20.6959C17.7023 20.7413 17.622 20.7685 17.5388 20.775C17.4557 20.7815 17.3722 20.767 17.296 20.733L9 17.03L0.704 20.732C0.627903 20.766 0.544512 20.7805 0.46141 20.774C0.378309 20.7676 0.298133 20.7405 0.228176 20.6952C0.158219 20.6499 0.1007 20.5878 0.0608497 20.5146C0.0209992 20.4414 8.18259e-05 20.3593 0 20.276V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM16 17.965V2H2V17.965L9 14.841L16 17.965ZM9 11.5L6.061 13.045L6.622 9.773L4.245 7.455L7.531 6.977L9 4L10.47 6.977L13.755 7.455L11.378 9.773L11.938 13.045L9 11.5Z" fill="black" />
            </svg>
          </div>
          <div onClick={() => setVisible(true)} className={classes.svg_box}>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9999 0C16.3919 0 20.8779 3.88 21.8189 9C20.8789 14.12 16.3919 18 10.9999 18C5.60791 18 1.12191 14.12 0.180908 9C1.12091 3.88 5.60791 0 10.9999 0ZM10.9999 16C13.0394 15.9996 15.0183 15.3068 16.6128 14.0352C18.2072 12.7635 19.3228 10.9883 19.7769 9C19.3211 7.0133 18.2048 5.24 16.6105 3.97003C15.0162 2.70005 13.0382 2.00853 10.9999 2.00853C8.96161 2.00853 6.9836 2.70005 5.38928 3.97003C3.79497 5.24 2.67868 7.0133 2.22291 9C2.677 10.9883 3.79258 12.7635 5.38705 14.0352C6.98152 15.3068 8.96044 15.9996 10.9999 16ZM10.9999 13.5C9.80643 13.5 8.66184 13.0259 7.81793 12.182C6.97401 11.3381 6.49991 10.1935 6.49991 9C6.49991 7.80653 6.97401 6.66193 7.81793 5.81802C8.66184 4.97411 9.80643 4.5 10.9999 4.5C12.1934 4.5 13.338 4.97411 14.1819 5.81802C15.0258 6.66193 15.4999 7.80653 15.4999 9C15.4999 10.1935 15.0258 11.3381 14.1819 12.182C13.338 13.0259 12.1934 13.5 10.9999 13.5ZM10.9999 11.5C11.6629 11.5 12.2988 11.2366 12.7677 10.7678C13.2365 10.2989 13.4999 9.66304 13.4999 9C13.4999 8.33696 13.2365 7.70107 12.7677 7.23223C12.2988 6.76339 11.6629 6.5 10.9999 6.5C10.3369 6.5 9.70098 6.76339 9.23214 7.23223C8.7633 7.70107 8.49991 8.33696 8.49991 9C8.49991 9.66304 8.7633 10.2989 9.23214 10.7678C9.70098 11.2366 10.3369 11.5 10.9999 11.5Z" fill="black" />
            </svg>
          </div>
        </div>
      </div>
      <div className={classes.product_info_block}>
        <h3 className={classes.product_name}>{product_name}</h3>
        <p className={classes.product_categories}>{categories}</p>
        <h4 className={classes.product_cost}>£{cost}</h4>
        <Rate style={{ fontSize: '15px' }} disabled defaultValue={rate} />
      </div>
    </div>
  )
}

export default ProductCard
