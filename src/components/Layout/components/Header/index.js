import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assess/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import React, { useState, useEffect } from "react";
import { Wrapper as PoperWrapper } from "../Popper";
import {

  faEarthAsia,
  faQuestion,
  faKeyboard,
  faGear,
  faSignOut,
  faUser,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { AiOutlinePlus, AiFillNotification } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../../Buttons";
import Menu from "../Popper/Menu";
import { AiFillMessage } from "react-icons/ai";
import Popup from "reactjs-popup";
import Noti from "../Popper/Noti";
import Search from "../Popper/Search";
import Login from "../Popper/Login";
const cx = classNames.bind(styles);
function Header(setisChoose) {
 const [user,setUser] = useState('')
 const [password,setPassword] = useState('')
  const fetchJobs = async () => {
    try {
      const reponse = await fetch('https://tiktok.fullstack.edu.vn/api/auth/login?email=long0611@gmail.com&password=1234567', {
        method: 'POST',
      })
      const newJobs = await reponse.json();
    localStorage.setItem("user",JSON.stringify(newJobs.data))
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  
  const user1 =  JSON.parse(localStorage.getItem("user"))

const handle = () =>{
  localStorage.removeItem("user")
}
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
      title: "Language",
      children: {
        title: "language",
        data: [
          {
            code: "en",
            title: "English",
          },
          {
            code: "vn",
            title: "Việt Nam",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>,
      title: "Feedback and Help",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
      title: "Keywords and ShortCut",
    },
  ];
  
  const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: `/${user1 !== null ? user1.nickname : ''}`,
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        a: true,
    },
];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/" onClick={() => setisChoose(false)}>
            <img src={images.logo} alt="a" />
          </Link>
        </div>
        <div className={cx("search")}>
      
               <Search />
         
        </div>
        <div className={cx("actions")}>
          <div className={cx("upload-btn")}>
            <Button a to='/upload'>
              <AiOutlinePlus></AiOutlinePlus>
              Upload
            </Button>
          </div>

          {user1 !== null ? (
            <>
              <Tippy
                render={(attrs) => (
                  <PoperWrapper className={cx("box")} tabIndex="-1" {...attrs}>
                    message
                  </PoperWrapper>
                )}
              >
                <Link className={cx("btn-mess")} to='/message'>
                  <AiFillMessage></AiFillMessage>
                </Link>
              </Tippy>
              <Popup
                trigger={
                 
                    <button className={cx("btn-mess")}>
                      <AiFillNotification></AiFillNotification>
                    </button>
                } position= 'left top center'>
               <Noti />
              </Popup>
              <Menu data1={userMenu} >
                <button className={cx("btn-more")}>
                  <BsThreeDotsVertical></BsThreeDotsVertical>
                </button>
              </Menu>
            </>
          ) : (
            <>
             <Popup
                trigger={
                  <button > Log in </button>
                } position= 'left top center'>
               <Login />
              </Popup>
            
              <Menu data1={MENU_ITEMS} >
                <button className={cx("btn-more")}>
                  <BsThreeDotsVertical></BsThreeDotsVertical>
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
