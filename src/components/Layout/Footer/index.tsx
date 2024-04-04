import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Image from 'next/image';
import CircleButton from '@/components/CircleButton';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('con-footer')}>
                <div>
                    <CircleButton className="cover-button">
                        <Image src={'/images/footer/calendar_month.png'} alt="calendar" width={24} height={24} />
                    </CircleButton>
                </div>
                <div style={{ padding: '0px 30px' }}>
                    <CircleButton href="/home" className="cover-button">
                        <Image src={'/images/footer/checklist.png'} alt="calendar" width={24} height={24} />
                    </CircleButton>
                </div>
                <div>
                    <CircleButton className="cover-button">
                        <Image src={'/images/footer/person.png'} alt="calendar" width={24} height={24} />
                    </CircleButton>
                </div>
            </div>
        </div>
    );
}

export default Footer;
