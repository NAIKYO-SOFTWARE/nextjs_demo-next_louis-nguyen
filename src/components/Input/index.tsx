import { InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";
const cx = classNames.bind(styles);

interface IProps extends InputHTMLAttributes<any> {}
function Input(props: IProps) {
  //   const className = ;
  return <input {...props} className={cx(`${props.className}`)} />;
}

export default Input;
// input-css-login
