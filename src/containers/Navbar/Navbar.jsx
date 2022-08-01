import classes from "./navbar.module.scss";
import { Avatar, Badge } from "antd";
import { Link } from "react-router-dom";
import LangSwitch from "../../components/general/LangSwitch";
import { useQuery } from "react-query";
import { getProducts } from "../../api/Products";

const Navbar = () => {
  const { data: response, isSuccess } = useQuery(
    'get-products',
    getProducts
  )

  return (
    <nav className={classes.wrapper}>
      <Link to="/">
        <h2 style={{ margin: '0', fontWeight: 'bold' }}>On The Ground</h2>
      </Link>
      <div className={classes.right}>
        <LangSwitch />
        {
          isSuccess && <Link to='/buy-products'>
            <Badge size="small" count={response.data.length} showZero>
              <svg style={{ cursor: 'pointer' }} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.00008 5.41481L0.75708 2.17281L2.17208 0.757812L5.41408 4.00081H20.6561C20.8119 4.0008 20.9657 4.03723 21.1049 4.10718C21.2442 4.17713 21.3652 4.27868 21.4583 4.40371C21.5514 4.52874 21.6139 4.6738 21.641 4.8273C21.668 4.9808 21.6588 5.1385 21.6141 5.28781L19.2141 13.2878C19.1523 13.4939 19.0258 13.6746 18.8532 13.803C18.6806 13.9315 18.4712 14.0008 18.2561 14.0008H6.00008V16.0008H17.0001V18.0008H5.00008C4.73486 18.0008 4.48051 17.8955 4.29297 17.7079C4.10544 17.5204 4.00008 17.266 4.00008 17.0008V5.41481ZM6.00008 6.00081V12.0008H17.5121L19.3121 6.00081H6.00008ZM5.50008 22.0008C5.10226 22.0008 4.72072 21.8428 4.43942 21.5615C4.15812 21.2802 4.00008 20.8986 4.00008 20.5008C4.00008 20.103 4.15812 19.7215 4.43942 19.4402C4.72072 19.1588 5.10226 19.0008 5.50008 19.0008C5.8979 19.0008 6.27944 19.1588 6.56074 19.4402C6.84204 19.7215 7.00008 20.103 7.00008 20.5008C7.00008 20.8986 6.84204 21.2802 6.56074 21.5615C6.27944 21.8428 5.8979 22.0008 5.50008 22.0008ZM17.5001 22.0008C17.1023 22.0008 16.7207 21.8428 16.4394 21.5615C16.1581 21.2802 16.0001 20.8986 16.0001 20.5008C16.0001 20.103 16.1581 19.7215 16.4394 19.4402C16.7207 19.1588 17.1023 19.0008 17.5001 19.0008C17.8979 19.0008 18.2794 19.1588 18.5607 19.4402C18.842 19.7215 19.0001 20.103 19.0001 20.5008C19.0001 20.8986 18.842 21.2802 18.5607 21.5615C18.2794 21.8428 17.8979 22.0008 17.5001 22.0008Z" fill="#444" />
              </svg>
            </Badge>
          </Link>
        }
        <Avatar className={classes.avatar} src="https://joeschmoe.io/api/v1/random" />
      </div>
    </nav>
  );
};

export default Navbar;
