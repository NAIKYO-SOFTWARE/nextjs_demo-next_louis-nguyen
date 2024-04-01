import classNames from "classnames/bind";
import styles from "./CircleButton.module.scss";
const cx = classNames.bind(styles);
interface IProps {
  children?: React.ReactNode;
}
function CircleButton({ children }: IProps) {
  return <button className={cx("cover-button")}>{children}</button>;
}

export default CircleButton;
