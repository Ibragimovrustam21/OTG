import { useNavigate } from 'react-router-dom';
import { Button, Col, Input, message, Row } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { RegisterForm } from '../../../general/Form';
import classes from './signUp.module.scss'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.wrapper}>
      <RegisterForm
        onSuccess={() => {
          // setLoading(false)
          message.success("register_success");
          navigate('/sign-in')
        }}
        onError={() => {
          // setLoading(false)
          message.error("register_error");
        }}
      >
        {({ handleChange, isValid, dirty }) => (
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h2 style={{ textAlign: 'center' }}>Добро пожаловать </h2>
              <h3 style={{ textAlign: 'center' }}>на наш магазин</h3>
            </Col>
            <Col span={24}>
              <Input
                name='firstName'
                type='text'
                placeholder='First name*'
                onChange={handleChange}
              />
            </Col>
            <Col span={24}>
              <Input
                name='lastName'
                type='text'
                placeholder='Last name*'
                onChange={handleChange}

              />
            </Col>
            <Col span={24}>
              <Input
                name='phone'
                type={'text'}
                placeholder='Phone number*'
                onChange={handleChange}

              />
            </Col>
            <Col span={24}>
              <Input
                name='email'
                type='email'
                placeholder='Email*'
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
              <Input.Password
                name="confirmationPassword"
                placeholder="Confirm password*"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={handleChange}
              />
            </Col>
            <Col span={24}>
              <Button
                disabled={!(isValid && dirty)}
                type='primary'
                htmlType='submit'
                block
              >
                Submit
              </Button>
            </Col>
          </Row>
        )}
      </RegisterForm>
    </div>
  )
}
export default SignUp
