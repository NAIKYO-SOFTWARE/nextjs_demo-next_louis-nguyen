import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import Image from 'next/image';
import Task from '../Task';

interface CounterState {}
interface IProps {
    listTaskRtk: CounterState[];
}

export default function UnstyledTabsCustomized({ listTaskRtk }: IProps) {
    console.log(listTaskRtk);
    return (
        <Tabs defaultValue={1}>
            <TabsList>
                <Tab value={1}>All</Tab>
                <Tab value={2}>Daily Routine</Tab>
                <Tab value={3}>Study Routine</Tab>
            </TabsList>
            <TabPanel value={1}>
                {listTaskRtk.length == 0 ? (
                    <div className="flex justify-center items-center mt-28 flex-col">
                        <div>
                            <Image src="/images/iconhome.png" alt="homeimg" width={310} height={312} />
                        </div>
                        <div className="bg-slate-600 h-px w-80"></div>
                        <div className="mt-2 bg-transparent shadow-lg shadow-slate-300">Nothing here yet...</div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <div className="w-96">
                            {listTaskRtk.map((task, index) => (
                                <div className="mt-2" key={index}>
                                    <Task taskList={task} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel value={2}>Second page</TabPanel>
            <TabPanel value={3}>Third page</TabPanel>
        </Tabs>
    );
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    cursor: pointer;
    font-size: 13px;
    line-height: 1.5;
    padding: 2px 12px;
    color: #9ca3af;
    border: solid 1px #9ca3af;
    margin: 6px;
    border-radius: 8px;
    display: flex;
    justify-content: center;

    &:focus {
        color: #09090b;
        border: solid 1px #09090b;
        background-color: #c67ed2;
    }
    &.${tabClasses.selected} {
        background-color: #c67ed2;
        color: #09090b;
        border: solid 1px #09090b;
    }

    &.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: #fff;
    }
`;

const TabPanel = styled(BaseTabPanel)`
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
  min-width: 400px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);
