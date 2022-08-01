import classes from './products.module.scss'

import { Row, Col } from 'antd'
import { useQuery } from 'react-query'

// components
import ProductCard from '../../components/page_components/Products/Categories/ProductCard'
import Filter from '../../components/page_components/Products/Categories/Filter'
import Pageheader from '../../components/general/PageHeader'

import { ICategories, ICategoriesImages } from '../../interface'
import { getCategories } from '../../api/Categories'

const Products = () => {
  const { data: response, isLoading, isSuccess, isError } = useQuery(
    'products',
    getCategories
  )

  return (
    <div className={classes.wrapper}>
      <Pageheader arr={['All categories']} title={'All categories'} />
      <Filter results={''} />
      <Row style={{ marginTop: '20px' }} gutter={[16, 16]}>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {
          isSuccess && response.data.map((item: ICategories) => {
            let arr = item.images.map((i: ICategoriesImages) => {
              const { img, product_name, cost, rate, id, description } = i
              return (
                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={id} >
                  <ProductCard id={id} img={img} description={description} product_name={product_name} categories={item.id} cost={cost} rate={rate} product_page={true} />
                </Col>
              )
            })

            return <>{arr}</>
          })
        }
      </Row>
    </div >
  )
}
export default Products