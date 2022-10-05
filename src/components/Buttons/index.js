import styles from "./Buttons.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  primary,
  onClick,
  outline,
  a,
  className,
}) {
  let Comp = "button";
  const props = {
    onClick,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  // } else {
  //   Comp = "button"
  // }
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    a,
  });

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
