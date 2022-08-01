import { Row, Col } from 'antd'
import Pageheader from '../../components/general/PageHeader'
import './about.scss'

const About = () => {
  return (
    <div className='about__wrapper'>
      <Pageheader arr={['About']} title='About' />
      <Row>
        <Col className='about_text'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eaque sapiente quibusdam enim nihil culpa similique odit aperiam,
            quod repellendus voluptate soluta doloremque molestiae unde,
            alias sunt? Quaerat ipsam eos incidunt, libero quibusdam. Quas enim a ratione voluptatum corrupti excepturi et,
            Illo minus maxime ducimus, optio nulla aperiam deleniti perferendis nemo adipisci voluptates quae.
            Et, nostrum tempora? Odit aspernatur sed, in tenetur saepe amet libero. Doloribus corporis cupiditate blanditiis,
            iure ipsam asperiores expedita. Error beatae vel soluta dignissimos minus! Quaerat cumque voluptatem eos delectus
            adipisci sit culpa, fuga mollitia quibusdam sapiente autem excepturi doloremque tenetur modi. Quas vel recusandae
            sunt odio, corrupti itaque mollitia ducimus facere expedita! Porro iste quaerat cumque aut illo autem reprehenderit
            omnis impedit earum eos suscipit quo commodi repellendus aliquid reiciendis maiores delectus, voluptas dignissimos
            rerum voluptatibus corrupti sint necessitatibus a? Ad amet facere harum, optio doloremque earum recusandae aliquam,
            ipsam neque vero incidunt corrupti quaerat officiis, deleniti non quidem molestias. Iure tenetur sequi magnam iusto
            alias nam enim? Voluptatum, fugiat. Voluptas corporis assumenda, ex iure nesciunt enim earum porro at ipsam libero
            vero laudantium omnis totam accusantium soluta aliquam reprehenderit, eum est illo, temporibus beatae! Nostrum porro
            harum perspiciatis, reiciendis aliquam omnis ad. Aperiam sapiente voluptatibus molestiae esse doloribus veritatis
            deserunt numquam quibusdam pariatur debitis quae architecto sunt assumenda laboriosam vel qui laudantium,
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default About