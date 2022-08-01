import { Breadcrumb, Col, PageHeader, Row } from 'antd'
import  './pageHeader.scss'

interface IProps {
  arr: string[],
  title: string
}

const Pageheader = ({ arr, title }: IProps) => {
  return (
    <Row>
      <Col className='page__header'>
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title={title}
          style={{ textTransform: 'capitalize' }}
        />
        <Breadcrumb style={{ textTransform: 'capitalize' }} separator="/">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          {
            arr.map((item, key) => {
              if (item == 'undefined') return
              if (key == (arr.length - 1)) return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>

              return (
                <Breadcrumb.Item key={item} href={key == 0 ? `/${arr[0]}` : `/${arr[0]}/${item}`}>{item}</Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
      </Col>
    </Row>
  )
}

export default Pageheader
