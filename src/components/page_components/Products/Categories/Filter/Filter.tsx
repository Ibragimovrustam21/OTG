import { Col, Row } from 'antd'
import { Select } from 'antd';
import './filter.scss'

interface IResults {
  results: string
}

const Filter = ({ results }: IResults) => {
  const { Option } = Select;

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  return (
    <Row className='filter__wrapper'>
      <Col span={8} xs={16}>
        <Row>
          <Col className='filter_box' span={1} sm={2} md={2} lg={1} xl={1}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H8V8H0V0ZM0 10H8V18H0V10ZM10 0H18V8H10V0ZM10 10H18V18H10V10ZM12 2V6H16V2H12ZM12 12V16H16V12H12ZM2 2V6H6V2H2ZM2 12V16H6V12H2Z" fill="#444" />
            </svg>
          </Col>
          <Col className='filter_box' span={1} sm={2} md={2} lg={1} xl={1}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z" fill="#444" />
            </svg>
          </Col>
          <Col className='filter_box' span={1} sm={2} md={2} lg={1} xl={1}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 7V11H7V7H11ZM13 7H18V11H13V7ZM11 18H7V13H11V18ZM13 18V13H18V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H13ZM11 0V5H7V0H11ZM13 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V5H13V0ZM5 7V11H0V7H5ZM5 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V13H5V18ZM5 0V5H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H5Z" fill="#444" />
            </svg>
          </Col>
          <Col className='filter_box' span={16} xs={24} sm={18} md={12} lg={8} xl={8}>
            <h3>Showing all {results} results</h3>
          </Col>
        </Row>
      </Col>
      <Col span={12} xs={8} className='filter_dropdown_block'>
        <Select defaultValue="Sorted by latest" style={{ width: 180 }} onChange={handleChange}>
          <Option value="Sorted by popularity">Sorted by popularity</Option>
          <Option value="Sorted by avarage rating">Sorted by avarage rating</Option>
          <Option value="Sorted by price: low to high">Sorted by price: low to high</Option>
          <Option value="Sorted by price: high to low">Sorted by price: high to low</Option>
        </Select>
      </Col>
    </Row>
  )
}
export default Filter