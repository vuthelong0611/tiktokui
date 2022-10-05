import styles from "./Login.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Login() {
  return <div className={cx('container')}>
  <h1>Notification</h1>
  <form>
    <input type='text' ></input>
    <input type='password' ></input>
    <input type='submit' ></input>


  </form>
 
  </div>;
}

export default Login;
