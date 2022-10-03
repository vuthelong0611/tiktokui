import styles from "./Body.module.scss";
import classNames from "classnames/bind";
import {useState,useEffect, useRef} from 'react'
import { AiFillHeart,AiFillMessage,AiOutlineShareAlt } from "react-icons/ai";
import { get } from "../../../../utils/request";
import Account from "../Account";
import Video from "../Video";
const cx = classNames.bind(styles);
function Body() {
  const videoRef = useRef()
  const number = Math.floor((Math.random() * 8));
  const [data1,setData] =  useState([])
    const fetchJobs = async () => {
    try {
          get('videos', {
            params: {
              type: 'for-you',
              page: number,
            },
          })
          .then((res) => {
            setData(res.data);
            console.log(number)
          });
      }
   
    catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
    <div className={cx('con')}>
      {data1.map((item, index) => {
        return (
          <div key={index} className={cx('container')}>
             <Account data={item.user} />
             <div className={cx('container1')}>
             <Video data={item} />
            <div className={cx('btn-container')}>
              <button className={cx('btn')}>
                <AiFillHeart></AiFillHeart>
              </button>
              <button className={cx('btn')}>
                <AiFillMessage></AiFillMessage>
              </button>
              <button className={cx('btn')}>
                <AiOutlineShareAlt></AiOutlineShareAlt>
              </button>
             </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Body;
