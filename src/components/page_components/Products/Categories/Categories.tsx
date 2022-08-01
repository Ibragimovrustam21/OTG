import classes from './categories.module.scss'
import { Row, Col } from 'antd'
import Filter from './Filter'
import Pageheader from '../../../general/PageHeader'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import ProductCard from './ProductCard'
import { ICategoriesImages } from '../../../../interface'
import { getCategoriesImages } from '../../../../api/Categories'

const Categories = () => {
  const params = useParams()

  const { data: response, isLoading, isSuccess, isError } = useQuery(
    ['categories-pattern', params],
    () => getCategoriesImages(params.id)
  )

  return (
    <div className={classes.wrapper}>
      <Pageheader arr={['products', `${params?.id}`]} title={params?.id || ''} />
      <Filter results={params.id ? response?.data.images.length : ''} />
      <Row style={{ marginTop: '20px' }} gutter={[16, 16]}>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {
          isSuccess && response.data.images.map((item: ICategoriesImages) => {
            const { img, product_name, cost, rate, id, description } = item
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={8} key={id}>
                <ProductCard description={description} img={img} id={id} product_name={product_name} categories={params.id || ''} cost={cost} rate={rate} />
              </Col>
            )
          })
        }
      </Row>
    </div >
  )
}
export default Categories