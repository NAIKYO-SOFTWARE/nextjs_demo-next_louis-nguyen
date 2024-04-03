'use client';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import ButtonHome from '@/components/ButtonHome';
import Image from 'next/image';

function Home() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="h-[75%]">
                <div className="flex mt-3 justify-center">
                    <ButtonHome>All</ButtonHome>
                    <ButtonHome>Daily Routine</ButtonHome>
                    <ButtonHome>Study Routine</ButtonHome>
                    <ButtonHome>┇</ButtonHome>
                </div>
                <div className="flex justify-center items-center mt-28 flex-col">
                    <div>
                        <Image src="/images/iconhome.png" alt="homeimg" width={310} height={312} />
                    </div>
                    <div className="bg-slate-600 h-px w-80"></div>
                    <div className="mt-2 bg-transparent shadow-lg shadow-slate-300">Nothing here yet...</div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
