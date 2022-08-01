import { Select } from 'antd'
import { useNavigate } from 'react-router-dom'

const AuthSwitch = () => {
  const navigate = useNavigate()

  function handleChange(value) {
    if (value === 'sign-in') navigate('/sign-in')
    else navigate('/sign-up')
  }

  return (
    <Select
      size="small"
      defaultValue={'sign-in'}
      onChange={handleChange}
    >
      <Select.Option value="sign-in">sign in</Select.Option>
      <Select.Option value="sign-up">sign up</Select.Option>
    </Select>
  )
}
export default AuthSwitch