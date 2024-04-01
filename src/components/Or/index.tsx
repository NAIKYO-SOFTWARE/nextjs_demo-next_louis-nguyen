import classNames from "classnames/bind";
import styles from "./Or.module.scss";
const cx = classNames.bind(styles);
function Or() {
  return (
    <div className={cx("con-or")}>
      <div className={cx("con-line")}></div>
      <div className={cx("element-or")}>OR</div>
      <div className={cx("con-line")}></div>
    </div>
  );
}

export default Or;
