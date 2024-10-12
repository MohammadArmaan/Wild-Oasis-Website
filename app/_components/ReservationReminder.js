"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
    const { range, resetRange } = useReservation();

    if (!range.from || !range.to) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-3 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 lg:py-5 lg:px-8 rounded-full bg-accent-500 text-primary-800 text-xs sm:text-sm md:text-base font-semibold shadow-xl shadow-slate-900 flex gap-2 sm:gap-8 items-center xxs:w-[70%] xs:w-auto">
            <p>
                <span>👋</span> Don't forget to reserve your dates <br /> from{" "}
                {format(new Date(range.from), "MMM dd yyyy")} to{" "}
                {format(new Date(range.to), "MMM dd yyyy")}
            </p>
            <button
                className="rounded-full p-1 hover:bg-accent-600 transition-all"
                onClick={resetRange}
            >
                <XMarkIcon className="h-5 w-5" />
            </button>
        </div>
    );
}

export default ReservationReminder;
