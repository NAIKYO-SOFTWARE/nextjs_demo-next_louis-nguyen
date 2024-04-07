import classNames from 'classnames/bind';
import styles from './CircleButton.module.scss';
import Link from 'next/link';
const cx = classNames.bind(styles);
interface IProps {
    children?: React.ReactNode;
    href?: string;
    className?: string;
    onClick?: () => void;
}
function CircleButton({ children, onClick, href, className }: IProps) {
    return href ? (
        <Link href={href} className={cx(className)}>
            {children}
        </Link>
    ) : (
        <button onClick={onClick} className={cx(className)}>
            {children}
        </button>
    );
}

export default CircleButton;
