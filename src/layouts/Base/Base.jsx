import { Layout } from 'antd'
import Navbar from '../../containers/Navbar'
import SideBar from '../../containers/SideBar'
import classes from './base.module.scss'

const Base = ({ children }) => {
  return (
    <Layout className={classes.wrapper}>
      <Layout.Header style={{ padding: '0 20px' }} className={classes.header}>
        <Navbar />
      </Layout.Header>
      <Layout>
        <Layout.Sider breakpoint={'xs'} className={classes.sidebarRight}>
          <SideBar />
        </Layout.Sider>
        <Layout.Content className={classes.content}>{children}</Layout.Content>
      </Layout>
    </Layout>
  )
}
export default Base