import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './Open.module.scss';
import Button from '../../components/Button';
import Or from '../../components/Or';
import CircleButton from '../../components/CircleButton';
const cx = classNames.bind(styles);

function Open() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-wrapper')}>
                <div className={cx('con-header')}>
                    <div className={cx('text-header')}>Do your</div>
                    <div className={cx('text-header')}>tasks</div>
                    <div className={cx('text-header')}>quickly</div>
                    <div className={cx('text-header')}>and easy</div>
                </div>
                <div>
                    <div>Your tasks, your rules, our support.</div>
                </div>
            </div>
            <div className={cx('con-button')}>
                <Button href="/login" className="login">
                    Login
                </Button>
            </div>
            <div className={cx('con-create')}>
                <Link href={'/register'}>Create an account</Link>
            </div>
            <div className={cx('add-or')}>
                <Or />
            </div>
            <div className={cx('con-circle-button')}>
                <CircleButton className="cover-button">
                    <img src="/images/facebook.png" alt="" />
                </CircleButton>
                <CircleButton className="cover-button">
                    <img src="/images/google.png" alt="" />
                </CircleButton>
                <CircleButton className="cover-button">
                    <img src="/images/apple.png" alt="" />
                </CircleButton>
            </div>
        </div>
    );
}

export default Open;
