import classes from './productsInBasket.module.scss'
import { InputNumber, Row, Col, Button } from 'antd'
import { Image } from 'antd';
import { IPostProduct } from '../../../../interface';
import { useMutation, useQueryClient } from 'react-query';

import { deleteProducts } from '../../../../api/Products';
import { postBuyProducts } from '../../../../api/BuyProducts';

import { useState } from 'react';

const ProductsInBasket = ({ id, product_name, description, img, rate, cost, count }: IPostProduct) => {
  const [val, setValue] = useState<number>(count || 1)

  function onChangeInputNumber(value: number) {
    setValue(value)
  }

  const queryClient = useQueryClient()
  const { mutateAsync: DelProduct } = useMutation(deleteProducts)
  const { mutateAsync: PostBuyProduct } = useMutation(postBuyProducts)

  const delete_btn = async (id: string) => {
    await DelProduct(id)
    queryClient.invalidateQueries('get-products')
  }

  const shop_product = async (arg: IPostProduct, id: string) => {
    await PostBuyProduct(arg)
    await DelProduct(id)
    queryClient.invalidateQueries('get-products')
    queryClient.invalidateQueries('get-buy-products')
  }

  return (
    <Row className={classes.card} >
      <Col span={8}>
        <Image
          style={{ borderRadius: '6px' }}
          width={180}
          src={img}
        />
      </Col>
      <Col span={16} style={{ paddingLeft: '10px' }}>
        <h2 className={classes.name}>{product_name}</h2>
        <p className={classes.info}>{description}</p>
        <InputNumber min={1} max={100} defaultValue={count} onChange={onChangeInputNumber} />
        <svg onClick={() => delete_btn(id)} className={classes.close_btn} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.99999 5.58672L11.95 0.636719L13.364 2.05072L8.41399 7.00072L13.364 11.9507L11.95 13.3647L6.99999 8.41472L2.04999 13.3647L0.635986 11.9507L5.58599 7.00072L0.635986 2.05072L2.04999 0.636719L6.99999 5.58672Z" fill="#444" />
        </svg>
        <Button type='primary' style={{ marginLeft: '10px' }} onClick={() => shop_product({ id, img, product_name, rate, cost, count: val, overallCharge: (cost || 1) * (val || 1) }, id)}>Add shop card</Button>
      </Col>
    </Row>
  )
}
export default ProductsInBasket