import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHome
  } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Sidebar() {
  return <aside className={cx("wrapper")}>
    <div className={cx('a')}>
        <div className={cx('foryou')}>
            <FontAwesomeIcon icon={faHome} />
                      For You
        </div>
        <div className={cx("following")}>
            <FontAwesomeIcon icon={faHome} />
                     Following
        </div>
        <div className={cx('live')}>
            <FontAwesomeIcon icon={faHome} />
                     LIVE
        </div>

    </div>
  </aside>;
}

export default Sidebar;
