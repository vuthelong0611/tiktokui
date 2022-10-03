import classNames from "classnames/bind";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);
function Video({ data }) {
  return (
    <div className={cx("avatar")}>
      <video controls className={cx("video")}>
        <source src={data.file_url} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
