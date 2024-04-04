'use client';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addTask } from '@/redux/taskSlice';
import TitleTask from '@/components/TitleTask';
import { TASKS } from '../../constants/task';
import Button from '@/components/Button';
import Footer from '@/components/Layout/Footer';

function Suggestions() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.addtask);
    const handleClick = (taskList: any) => {
        dispatch(addTask(taskList));
    };
    console.log(count);
    return (
        <div className="h-full bg-[#F5F5F5] px-2">
            <div className="flex justify-center pt-8">
                <div>Suggestions</div>
            </div>
            <div>
                {TASKS.map((taskObj, index) => (
                    <TitleTask handleClick={handleClick} key={index} taskObj={taskObj} />
                ))}
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <Button href="/newtask" className="login">
                        Add more
                    </Button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Suggestions;
