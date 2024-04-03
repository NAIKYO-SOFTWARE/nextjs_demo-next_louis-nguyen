import CalendarToday from '@/components/CalendarToday';
function Header() {
    return (
        <div className="h-36 bg-[#F3C4FB]">
            <div className="flex justify-center">
                <div className="mt-5 mb-3 font-bold">Today</div>
            </div>
            <div className="flex justify-center">
                <CalendarToday day="10" dayOfWeek="Sun" />
                <CalendarToday isMon day="11" dayOfWeek="Mon" />
                <CalendarToday day="12" dayOfWeek="Tue" />
                <CalendarToday day="13" dayOfWeek="Wed" />
                <CalendarToday day="14" dayOfWeek="Thu" />
                <CalendarToday day="15" dayOfWeek="Fri" />
                <CalendarToday day="16" dayOfWeek="Sat" />
            </div>
        </div>
    );
}

export default Header;
