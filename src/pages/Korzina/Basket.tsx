import { Button, Col, Divider, message, Row } from 'antd'
import { useQuery } from 'react-query'
import { getProducts } from '../../api/Products'
import { getBuyProducts } from '../../api/BuyProducts'
import Pageheader from '../../components/general/PageHeader'
import BuyProducts from '../../components/page_components/Korzina/BuyProducts'
import ProductsInBasket from '../../components/page_components/Korzina/Products-in-korzina'
import classes from './basket.module.scss'
// interface
import { IPostProduct } from '../../interface'


const Basket = () => {
  const { data: response, isLoading, isSuccess, isError } = useQuery(
    'get-products',
    getProducts
  )
  const { data: res, isSuccess: success, isLoading: loading, isError: error } = useQuery(
    'get-buy-products',
    getBuyProducts
  )

  // calculate overall charge
  let summ = 0
  res?.data.map((i: IPostProduct) => summ = summ + (i.overallCharge || 0))

  const shoppingMessage = () => {
    message
      .loading('Action in progress..', 2.5)
      .then(() => message.success('Xarid qilindi.', 2.5))
  }

  return (
    <div className={classes.wrapper}>
      <Pageheader arr={['Basket']} title={'Basket'} />
      <Row gutter={[16, 16]} style={{ padding: '20px' }}>
        <Col className={classes.products_in_basket} span={15} xs={24} sm={24} md={12} lg={8} xl={8}>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error</p>}
          {
            isSuccess && <>
              <h2 className={classes.card_title}>Basket Card</h2>
              {
                response.data.length !== 0
                  ? response.data.map((item: IPostProduct) => {
                    const { id, product_name, description, img, rate, cost, count } = item
                    return <div key={id}>
                      <ProductsInBasket id={id} product_name={product_name} description={description} img={img} rate={rate} cost={cost} count={count} />
                      <Divider />
                    </div>
                  })
                  : <h1 style={{ paddingLeft: '10px' }}>Savatcha bo`sh</h1>
              }
            </>
          }
        </Col>
        <Col className={classes.buy_products} span={8} xs={24} sm={24} md={12} lg={8} xl={8} offset={1}>
          {loading && <p>loading...</p>}
          {error && <p>error</p>}
          {
            success && <>
              <h2 className={classes.card_title}>Shop Card</h2>
              {
                res.data.map((item: IPostProduct) => {
                  const { id, product_name, rate, cost, img, count } = item
                  return <div key={id}>
                    <BuyProducts id={id} product_name={product_name} rate={rate} cost={cost} img={img} count={count} />
                  </div>
                })
              }
              <Divider />
              <h3>Overall charge: <span style={{ fontWeight: 'bold' }}>£{summ}</span> </h3>
              <div className={classes.btn_box}>
                <Button type='primary' onClick={() => shoppingMessage()}>Shop</Button>
              </div>
            </>
          }
        </Col>
      </Row>
    </div >
  )
}
export default Basket
