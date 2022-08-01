import { Affix, Menu, Modal } from "antd";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeUser } from "../../store/ShoppingSlice";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import classes from "./sideBar.module.scss";

const SideBar = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: 'Do you want logout?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        dispatch(removeUser())
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
    <Affix offsetTop={0}>
      <Menu className={classes.wrapper} mode="inline" defaultSelectedKeys={[pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            Main
          </Link>
        </Menu.Item>
        <Menu.SubMenu title="Products" key="/products">
          <Menu.Item key="/products">
            <Link to="/products">
              All categories
            </Link>
          </Menu.Item>
          <Menu.Item key="/products/accessories">
            <Link to="/products/accessories">
              Accessories
            </Link>
          </Menu.Item>
          <Menu.Item key="/products/footwear">
            <Link to="/products/footwear">
              Footwear
            </Link>
          </Menu.Item>
          <Menu.Item key="/products/shirts">
            <Link to="/products/shirts">
              Shirts
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="/about">
          <Link to="/about">
            About
          </Link>
        </Menu.Item>
        <Menu.Item style={{ color: 'red' }} onClick={() => showConfirm()} key="/logout">
          Logout
        </Menu.Item>
      </Menu>
    </Affix>
  );
};

export default SideBar;
