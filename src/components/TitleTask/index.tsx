'use client';
import Task from '../Task';
import CircleButton from '../CircleButton';
interface ITaskObj {
    title: string;
    description: string;
    task: {
        taskName: string;
    }[];
}

interface ITitleTaskProps {
    taskObj: ITaskObj;
    handleClick: (taskList: any) => void;
}
const TitleTask: React.FC<ITitleTaskProps> = ({ taskObj, handleClick }) => {
    return (
        <div className="w-full px-3">
            <div className="flex justify-between pt-5">
                <div className="text-lg font-bold">{taskObj.title}</div>
                <div className="text-sm font-bold">See all &#62;</div>
            </div>
            <div>
                <div className="text-xs">Stay hungry for knowledge</div>
            </div>
            <div className="mt-3">
                {taskObj.task.map((taskList, index) => (
                    <div key={index} className="flex justify-between mb-2">
                        <Task taskList={taskList} />
                        <div className="flex justify-center items-center">
                            <CircleButton onClick={() => handleClick(taskList)} className="cover-btn-task">
                                +
                            </CircleButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TitleTask;
