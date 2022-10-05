import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Header from "./Header";
import { useState } from "react";
import Button from "../../../../Buttons";

const cx = classNames.bind(styles);
function Menu({ children, data1 = [], onA }) {
  const [history, setHistory] = useState([{ data: data1 }]);
  const current = history[history.length - 1];
  const handle = () => {
    localStorage.removeItem("user");
  };
  const renderItems = () => {
    return (
      <div className={cx("btncontainer")}>
        {current.data.map((item, index) => {
          const isParent = !!item.children;
          return (
            <Button
              className={cx("btna")}
              key={index}
              to={item.to}
              onClick={() => {
                if (isParent) {
                  setHistory((prev) => [...prev, item.children]);
                } else if (item.a === true) {
                  handle();
                  window.location.reload(true);
                }
              }}
            >
              <span>{item.icon}</span>
              <span> {item.title}</span>
            </Button>
          );
        })}
      </div>
    );
  };
  return (
    <Tippy
      visible
      delay={[0, 700]}
      offset={[12, 8]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          {history.length > 1 && (
            <Header
              title={"Language"}
              onBack={() => {
                setHistory((prev) => prev.slice(0, prev.length - 1));
              }}
            />
          )}
          {renderItems()}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
