import styles from "./Noti.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Noti() {
  return <div className={cx('container')}>
  <h1>Notification</h1>
  {}
  </div>;
}

export default Noti;
