import { Layout } from 'antd'
import classes from './auth.module.scss'
import LangSwitch from "../../components/general/LangSwitch";
import AuthSwitch from '../../components/general/AuthSwitch';

const Auth = ({ children }) => {
  return (
    <Layout className={classes.wrapper}>
      <div className={classes.header}>
        <AuthSwitch />
        <LangSwitch />
      </div>
      <Layout.Content className={classes.content}>{children}</Layout.Content>
    </Layout>
  )
}
export default Auth