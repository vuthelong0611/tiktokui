import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./User.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function User() {
  const a = useParams();
  const [data1, setData] = useState([]);
  const fetchJobs = async () => {
    try {
      if (a !== "") {
        const video = data1.videos
        const reponse = await fetch(
          `https://tiktok.fullstack.edu.vn/api/users/@${a.name}`
        );
        const newJobs = await reponse.json();
      
        setData(newJobs.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <section>
      <div className={cx("container")}>
      {console.log(data1.nickname)}
        <img src={data1.avatar} alt="" className={cx("avatar")}></img>
        <div className={cx("name")}>
          <h2>{data1.full_name}</h2>
          <p>{data1.nickname}</p>
        </div>
      </div>
      <div className={cx("follow")}>
        <h3 className={cx("a")}>{data1.followings_count}</h3>
        <p> Following</p>
        <h3 className={cx("a")}>{data1.followers_count}</h3>
        <p> Followers</p>
        <h3 className={cx("a")}>{data1.likes_count}</h3>
        <p> Likes</p>
      </div>
      <div>
          {/* <>
            { video !== []   ? video.map((item) => {
              return <div key={item.id}>
                <video className = {cx('video')}  src= {item.file_url}></video>
              </div>;
            }): ''}
          </> */}
        </div>
    </section>
  );
}

export default User;
