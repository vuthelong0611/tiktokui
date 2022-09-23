import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assess/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={images.logo} alt="a" />
          </Link>
        </div>
        <div className={cx("search")}>
          <input
            className={cx("input-search")}
            placeholder="search acount and video"
            spellCheck="false"
          ></input>
          <button className={cx("btn-clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <button className={cx("btn-search")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("actions")}>
          <Link to="/upload">Upload</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
