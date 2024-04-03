interface IProps {
    day?: string;
    dayOfWeek: string;
    isMon?: boolean;
}
function CalendarToday({ isMon, day, dayOfWeek }: IProps) {
    return (
        <div
            className={`w-12 h-[68px] rounded-lg flex flex-col items-center text-xs mx-1  ${isMon ? 'bg-[#C67ED2]' : 'bg-[#E7C3ED]'}`}
        >
            <div className="py-1">{dayOfWeek}</div>
            <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">{day}</div>
        </div>
    );
}

export default CalendarToday;
