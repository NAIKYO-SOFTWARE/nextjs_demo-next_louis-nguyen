import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Link from 'next/link';
const cx = classNames.bind(styles);
interface IProps {
    children?: string;
    className?: string;
    href?: string;
    type?: string;
}
function Button({ children, className, href }: IProps) {
    return href ? (
        <Link className={cx(`${className}`)} href={`${href}`}>
            {children}
        </Link>
    ) : (
        <button className={cx(`${className}`)}>{children}</button>
    );
}

export default Button;
