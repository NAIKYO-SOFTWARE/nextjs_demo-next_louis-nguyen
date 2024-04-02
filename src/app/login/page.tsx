'use client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { getsubmitlogin } from '@/redux/formSlice';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import CircleButton from '@/components/CircleButton';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Or from '../../components/Or';
import Footer from '@/components/Layout/Footer';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [valueForm, setValueForm] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValueForm({
            ...valueForm,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(getsubmitlogin(valueForm));
        // router.push('/contract');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('con-text-login')}>
                <div className={cx('text-login')}>Log in to HabitHUB</div>
            </div>
            <div className={cx('con-text-social')}>
                <div>Welcome back! Sign in using your social</div>
                <div>account or email to continue us</div>
            </div>
            <div>
                <div className={cx('con-circle-button')}>
                    <CircleButton>
                        {/* <img src="/images/facebook.png" /> */}
                        <Image src="/images/facebook.png" alt="Facebook" width={120} height={40} />
                    </CircleButton>
                    <CircleButton>
                        <img src="/images/google.png" />
                    </CircleButton>
                    <CircleButton>
                        <img src="/images/apple.png" />
                    </CircleButton>
                </div>
            </div>
            <div>
                <Or />
            </div>
            <form onSubmit={handleSubmit} className={cx('con-login-form')}>
                <div className={cx('login-bg-form')}>
                    <Input
                        name="email"
                        value={valueForm.email}
                        onChange={handleChange}
                        className="input-css-login"
                        placeholder="Email"
                    />
                </div>
                <div className={cx('login-bg-form')}>
                    <Input
                        value={valueForm.password}
                        name="password"
                        onChange={handleChange}
                        className="input-css-login"
                        placeholder="Password"
                    />
                </div>
                <div className={cx('login-submit-btn')}>
                    <Button type="submit" className="login">
                        Login
                    </Button>
                </div>
            </form>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;
