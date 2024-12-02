


import React from "react"

import { Calendar } from "../ui/calendar"

export const CalendarComponent = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="flex gap-6 w-full">

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    shadcn/ui Component
                </div>
                <div className="flex w-full">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>

            </div>













            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    Generated Component
                </div>
                <div className="flex w-full">

                </div>
            </div>
        </div>
    )
}