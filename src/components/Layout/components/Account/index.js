import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Account.module.scss";

const cx = classNames.bind(styles);
function Account({ data }) {
  console.log(data);
  return (
      <div className={cx("avatar")}>
          <Link to={`/${data.nickname}`}>
  
        <div>
          <img className={cx("img")} src={data.avatar} alt=""></img>
        </div>
        </Link>
        <div className={cx("art")}>
          <h2>{data.nickname}</h2>
          <p>{data.followers_count} Followers</p>
          <p>{data.bio}</p>
        </div>
      </div>
  );
}

export default Account;
