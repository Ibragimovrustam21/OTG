import { Avatar, Col, Row } from 'antd'
import classes from './commentsBox.module.scss'

interface IComment {
  text: string
}

const Comments = ({ text }: IComment) => {
  let date: any = new Date()
  return (
    <div className={classes.wrapper}>
      <Row className={classes.comment_box} style={{ marginTop: '10px' }}>
        <Col className={classes.comment_left} xs={24} sm={12} md={12} lg={12} xl={12}>
          <Avatar className={classes.avatar} src="https://joeschmoe.io/api/v1/random" />
          <h3>Ibragimov Rustam</h3>
          <p>{date.getDate()}.{'0' + (date.getMonth() + 1)}.{date.getFullYear() + 'y'}</p>
        </Col>
        <Col className={classes.comment_right} xs={24} sm={12} md={12} lg={12} xl={12} >
          <p>{text}</p>
        </Col>
      </Row>
    </div>
  )
}
export default Comments