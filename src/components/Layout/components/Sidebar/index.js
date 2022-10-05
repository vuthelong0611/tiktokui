import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faL } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../../../../utils/request";
import Account from "../Account";
const cx = classNames.bind(styles);
function Sidebar() {
  const [isChoose,setisChoose] = useState(true)
  const [isChoose1,setisChoose1] = useState(true)
  const [isChoose2,setisChoose2] = useState(true)
  const a = () =>{
   setisChoose(false)
   setisChoose1(true)
   setisChoose2(true)
  }
  const b = () =>{
    setisChoose1(false)
    setisChoose2(true)
    setisChoose(true)
   }

   const c = () =>{
    setisChoose2(false)
    setisChoose1(true)
    setisChoose(true)
   }
 const [data,setData] = useState([])
   const fetchJobs = async () => {
    try {
    

        // const reponse = await fetch(
        //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${debouned}&type=less`
        // );
        // const newJobs = await reponse.json();
        // setJobs(newJobs.data);
          get('users/suggested', {
            params: {
             page : 1,
              per_page: 5,
            },
          })
          .then((res) => {
            setData(res.data);
          });
      
      
    } catch (error) {
      console.error(error);
    
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("a")}>
      <Link to='/'>
        <div className={isChoose ?  cx('foryou') : cx('foryou1')} onClick={a}>
      
      <FontAwesomeIcon  className={cx('side')} icon={faHome} />
          <p>For You</p>
      
        </div>
        </Link>
        <Link to='/following'>
        <div className={isChoose1 ?  cx('foryou') : cx('foryou1')} onClick={b}>
          <FontAwesomeIcon className={cx('side')} icon={faHome} />
          <p>Following</p>
        </div>
        </Link>
        <Link to='/following'>
        <div className={isChoose2 ?  cx('foryou') : cx('foryou1')} onClick={c}>
          <FontAwesomeIcon className={cx('side')} icon={faHome} />
          <p>LIVE</p>
        </div>
        </Link>
      </div>
      <div  className={cx("b")}>
<h3>Suggest accounts</h3>
<>
{data.map((item) => {
  return(
  <Account data={item} key={item.id}/>
  )
})}
</>
      </div>
    </aside>
  );
}

export default Sidebar;
