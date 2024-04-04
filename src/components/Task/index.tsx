interface IList {
    taskList?: any;
}

function Task({ taskList }: IList) {
    return (
        <div className="w-full px-3 py-5 rounded-xl" style={{ backgroundColor: taskList.color }}>
            {taskList.taskName}
        </div>
    );
}

export default Task;
