'use client';

// library
import { useRef, useState } from "react";
import { formatDate } from '@/utils/formatter';

interface DatePickerProps {
  initialDate: Date;
}

export default function DatePicker({initialDate}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const dateInputRef = useRef<HTMLInputElement>(null)

  const handleDateChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <div 
      className="w-fit mx-auto flex flex-col justify-center cursor-pointer rounded-lg border border-slate-200 px-4 py-2"
      onClick={() => dateInputRef.current?.showPicker()}
      >
        {/* 사용자들이 보게될 UI */}
        {/* 실제 날짜 입력용 (UI에 안 보이도록 숨겨둠) */}
        <input
          name="writeTime"
          type="date"
          className="opacity-0 h-0"
          ref={dateInputRef}
          value={selectedDate.toISOString().split("T")[0]}
          onChange={handleDateChange}
        />
        <p className="text-center">{selectedDate.toISOString().split("T")[0]}</p>
    </div>
  )
}