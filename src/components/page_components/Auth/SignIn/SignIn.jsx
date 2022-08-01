import { Button, Checkbox, Col, Input, message, Row, Space } from 'antd'
import { Link } from 'react-router-dom'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import classes from './signIn.module.scss'
import { LoginForm } from '../../../general/Form';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.wrapper}>
      <LoginForm
        onSuccess={() => {
          navigate('/')
        }}
        onError={() => {
          message.error("login_error");
        }}
      >
        {({ handleChange, isValid, dirty }) => (
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h3 style={{ textAlign: 'center' }}>Login</h3>
            </Col>
            <Col span={24}>
              <Input
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChange}
              />
            </Col>
            <Col span={24}>
              <Input.Password
                name='password'
                placeholder="Password*"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={handleChange}
              />
            </Col>
            <Col span={24}>
              <Space
                size="middle"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link to="/forgot">login_forgot_password</Link>
                <Checkbox>login_remember</Checkbox>
              </Space>
            </Col>
            <Col span={24}>
              <Button
                disabled={!(isValid && dirty)}
                type='primary'
                htmlType="submit"
                block
              >
                Submit
              </Button>
            </Col>
          </Row>
        )}
      </LoginForm>
    </div>
  )
}
export default SignIn
