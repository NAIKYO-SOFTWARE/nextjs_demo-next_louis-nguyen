'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
function Transition() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/home');
        }, 1000);
    }, []);
    return (
        <div className="bg-[#F5F5F5] h-full p-10 flex justify-center items-center">
            <div>
                <Image src="/images/transition.png" alt="transition" width={321} height={327} />
            </div>
        </div>
    );
}

export default Transition;
