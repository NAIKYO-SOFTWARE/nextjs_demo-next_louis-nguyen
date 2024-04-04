'use client';
import { useState } from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton';
import Image from 'next/image';

function Home() {
    const buttons = ['All', 'Daily Routine', 'Study Routine'];
    const [selectedButton, setSelectedButton] = useState('All'); // Mặc định nút "All" được chọn

    const handleButtonClick = (buttonName: any) => {
        setSelectedButton(buttonName);
    };

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="h-[75%]">
                <div className="flex mt-3 justify-center">
                    {buttons.map((buttonName, index) => (
                        <Button
                            key={index}
                            className={`${selectedButton === buttonName ? 'bg-[#C67ED2] px-2 mx-2 rounded-lg border border-inherit border-solid border-1' : 'px-2 mx-2 rounded-lg border border-inherit border-solid border-1'}`}
                            onClick={() => handleButtonClick(buttonName)}
                        >
                            {buttonName}
                        </Button>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-28 flex-col">
                    <div>
                        <Image src="/images/iconhome.png" alt="homeimg" width={310} height={312} />
                    </div>
                    <div className="bg-slate-600 h-px w-80"></div>
                    <div className="mt-2 bg-transparent shadow-lg shadow-slate-300">Nothing here yet...</div>
                </div>
                <div className="flex justify-end mt-7 pr-5">
                    <CircleButton className="cover-button" href="/suggestions">
                        <span className="text-2xl font-bold">+</span>
                    </CircleButton>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
