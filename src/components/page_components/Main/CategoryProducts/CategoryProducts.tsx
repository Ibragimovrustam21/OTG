import { Row } from 'antd'
import { useQuery } from 'react-query'
import { getCategories } from '../../../../api/Categories'
import { ICategories } from '../../../../interface'
import Card from './Card'


const CategoryProducts = () => {
  const { data: response, isLoading, isError, isSuccess } = useQuery(
    'get-categories',
    getCategories
  )

  return (
    <Row gutter={[16, 16]} style={{ padding: '20px 0' }}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      {
        isSuccess && response.data.map((item: ICategories) => <Card img={item.images[0].img} id={item.id} key={item.id} />)
      }
    </Row>
  )
}
export default CategoryProducts
