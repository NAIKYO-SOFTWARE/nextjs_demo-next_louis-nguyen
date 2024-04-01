'use client';
import { useRouter } from 'next/navigation';
function Contact() {
    const router = useRouter();
    const handleBack = () => {
        router.push('/');
    };
    return (
        <div>
            <h1>contact</h1>
            <button onClick={handleBack}>back home</button>
        </div>
    );
}

export default Contact;
