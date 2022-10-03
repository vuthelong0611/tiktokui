import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assess/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import React, { useState, useEffect } from "react";
import { Wrapper as PoperWrapper } from "../Popper";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEarthAsia,
  faLanguage,
  faQuestion,
  faKeyboard,
  faMessage,
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
const cx = classNames.bind(styles);
function Header(setisChoose) {
  const [isLogin, setLogin] = useState(false);
  const [account, setAccout] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setAccout([1, 2, 3]);
    }, 3000);
  }, []);
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
        to: '/hoa',
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

          {!isLogin ? (
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
              <Menu data1={userMenu}>
                <button className={cx("btn-more")}>
                  <BsThreeDotsVertical></BsThreeDotsVertical>
                </button>
              </Menu>
            </>
          ) : (
            <>
              <Button primary> Log in </Button>
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
