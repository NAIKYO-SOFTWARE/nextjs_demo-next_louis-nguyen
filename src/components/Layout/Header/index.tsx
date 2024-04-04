import React from 'react';
import CalendarToday from '@/components/CalendarToday';

function Header() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();

    function getNextDay(currentDay: any) {
        return currentDay === 7 ? 0 : currentDay + 1; // Nếu là Chủ nhật (ngày 7), quay trở lại thứ Hai (ngày 0)
    }

    function getNextDayOfWeek(currentDayOfWeek: any) {
        const currentIndex = daysOfWeek.indexOf(currentDayOfWeek);
        const nextDayIndex = currentIndex === 6 ? 0 : currentIndex + 1; // Tăng chỉ số lên 1, nếu là Chủ nhật thì quay lại thứ Hai
        return daysOfWeek[nextDayIndex];
    }

    const generateCalendar = () => {
        const calendar = [];
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1); // Ngày bắt đầu của tháng
        let currentDate = new Date(startDate); // Bắt đầu từ ngày đầu tiên của tháng

        for (let i = 0; i < 7; i++) {
            // Push ngày và thứ vào lịch
            calendar.push(
                <CalendarToday
                    key={i} // Sử dụng key duy nhất cho mỗi component trong danh sách
                    day={currentDate.getDate().toString()}
                    dayOfWeek={daysOfWeek[currentDate.getDay()]}
                    isMon={daysOfWeek[currentDate.getDay()] === dayOfWeek} // Đặt prop isMon thành true nếu là thứ Hai
                />,
            );

            // Tiếp tục với ngày tiếp theo
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return calendar;
    };

    return (
        <div className="h-36 bg-[#F3C4FB]">
            <div className="flex justify-center">
                <div className="mt-5 mb-3 font-bold">Today</div>
            </div>
            <div className="flex justify-center">{generateCalendar()}</div>
        </div>
    );
}

export default Header;
