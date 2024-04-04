'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import Tabs from '@/components/Tabs';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import UnstyledTabsCustomized from '@/components/Tabs';
import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton';
import Image from 'next/image';

function Home() {
    const listTaskRtk = useSelector((state: RootState) => state.addtask);
    console.log(listTaskRtk);
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="h-[75%]">
                <div>
                    <UnstyledTabsCustomized listTaskRtk={listTaskRtk} />
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
