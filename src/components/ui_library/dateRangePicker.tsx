import { useState } from 'react';
import { DayClickEventHandler } from 'react-day-picker';
import { Calendar } from '../ui/calendar';
import {
  format,
  startOfWeek,
  endOfDay,
  addMonths,
  subDays,
  subWeeks,
  subMonths,
  startOfYear,
  endOfMonth,
  startOfMonth,
  endOfWeek,
  isBefore,
  startOfQuarter,
  endOfQuarter,
} from 'date-fns';
import { Button } from '../ui/button';

interface DatePickerProps {
  onDateRangeChange: (range: {
    from: Date | undefined;
    to: Date | undefined;
  }) => void;
  onOkClick: () => void;
  onCancelClick: () => void;
}

interface DateRange {
  from: Date;
  to: Date;
}

const DateRangePicker = ({
  onDateRangeChange,
  onOkClick,
  onCancelClick,
}: DatePickerProps) => {
  const [selectedRange, setSelectedRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const [inputValues, setInputValues] = useState<{
    from: string;
    to: string;
  }>({
    from: '',
    to: '',
  });

  const [errors, setErrors] = useState<{
    from: string | null;
    to: string | null;
  }>({
    from: null,
    to: null,
  });

  const [selectedItemId, setSelectedItemId] = useState<number | null>(null); // State to track selected item

  const datePickerDefaultList = [
    { id: 0, title: 'This week', generateDateRange: generateThisWeek },
    { id: 1, title: 'Last week', generateDateRange: generateLastWeek },
    { id: 2, title: 'Last 4 weeks', generateDateRange: generateLast4Weeks },
    { id: 3, title: 'Last Month', generateDateRange: generateLastMonth },
    { id: 4, title: 'YTD', generateDateRange: generateYTD },
    { id: 5, title: 'Q1', generateDateRange: generateQ1 },
    { id: 6, title: 'Q2', generateDateRange: generateQ2 },
    { id: 7, title: 'Q3', generateDateRange: generateQ3 },
    { id: 8, title: 'Q4', generateDateRange: generateQ4 },
  ];

  function generateThisWeek() {
    const startOfWeekDate = startOfWeek(new Date());
    const endOfWeekDate = subDays(endOfDay(new Date()), 1); // Subtract one day to get "yesterday"

    const disabled = isFutureDate(endOfWeekDate);

    return { from: startOfWeekDate, to: endOfWeekDate, disabled };
  }

  function generateLastWeek() {
    const startOfLastWeek = startOfWeek(subWeeks(new Date(), 1));
    const endOfLastWeek = endOfWeek(subWeeks(new Date(), 1));

    const disabled = isFutureDate(endOfLastWeek);
    return { from: startOfLastWeek, to: endOfLastWeek, disabled };
  }

  function generateLast4Weeks() {
    const from = startOfWeek(subWeeks(new Date(), 4));
    const to = endOfWeek(subWeeks(new Date(), 1));

    const disabled = isFutureDate(to);
    return { from, to, disabled };
  }

  function generateLastMonth() {
    const from = startOfMonth(subMonths(new Date(), 1));
    const to = endOfMonth(subMonths(new Date(), 1));

    const disabled = isFutureDate(to);
    return { from, to, disabled };
  }

  function generateYTD() {
    const startOfYearDate = startOfYear(new Date());
    const endOfPreviousDay = subDays(endOfDay(new Date()), 1); // Subtract one day for "yesterday"

    const disabled = isFutureDate(endOfPreviousDay);
    return { from: startOfYearDate, to: endOfPreviousDay, disabled };
  }

  function generateQ1() {
    const startOfQ1 = startOfQuarter(startOfYear(new Date())); // Start of the first quarter
    const endOfQ1 = endOfQuarter(startOfQ1); // End of the first quarter (based on startOfQ1)

    const disabled = isFutureDate(endOfQ1);
    return { from: startOfQ1, to: endOfQ1, disabled };
  }

  function generateQ2() {
    const startOfQ2 = startOfQuarter(subMonths(new Date(), 3)); // Adjust to the second quarter
    const endOfQ2 = endOfQuarter(subMonths(new Date(), 3)); // Adjust to the second quarter

    const disabled = isFutureDate(endOfQ2);
    return { from: startOfQ2, to: endOfQ2, disabled };
  }

  function generateQ3() {
    // Get the start of the year
    const startOfYearDate = startOfYear(new Date());

    // Find the start of the third quarter
    const startOfQ3 = startOfQuarter(addMonths(startOfYearDate, 6)); // Adding 6 months to the start of the year

    // Find the end of the third quarter
    const endOfQ3 = endOfQuarter(startOfQ3);

    const disabled = isFutureDate(endOfQ3);
    return { from: startOfQ3, to: endOfQ3, disabled };
  }

  function generateQ4() {
    // Get the start of the year
    const startOfYearDate = startOfYear(new Date());

    // Find the start of the fourth quarter
    const startOfQ4 = startOfQuarter(addMonths(startOfYearDate, 9)); // Adding 9 months to get the start of Q4

    // Find the end of the fourth quarter
    const endOfQ4 = endOfQuarter(startOfQ4);

    const disabled = isFutureDate(endOfQ4);

    return { from: startOfQ4, to: endOfQ4, disabled };
  }

  // Helper function to check if the 'to' date is in the future
  function isFutureDate(date: Date): boolean {
    return isBefore(new Date(), date); // date-fns comparison
  }

  const handleDayClick: DayClickEventHandler = (day) => {
    setSelectedItemId(null);
    const { from, to } = selectedRange;

    if (!from || (from && to)) {
      // Set the `from` date and reset `to`
      setSelectedRange({ from: day, to: undefined });
      setInputValues((prev) => ({ ...prev, from: formatDate(day), to: '' }));
      setErrors({ from: null, to: errors.to });
    } else if (day < from) {
      // Update `from` date and reset `to`
      setSelectedRange({ from: day, to: undefined });
      setInputValues((prev) => ({ ...prev, from: formatDate(day), to: '' }));
      setErrors({ from: null, to: errors.to });
    } else {
      // Set both `from` and `to` dates
      setSelectedRange({ from, to: day });
      setInputValues((prev) => ({ ...prev, to: formatDate(day) }));
      setErrors({ from: errors.from, to: null });
    }

    // // Notify parent component about the date range change
    onDateRangeChange({ from: selectedRange.from, to: day });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: 'from' | 'to'
  ) => {
    setSelectedItemId(null);

    const value = event.target.value;

    // Allow only numbers and slashes
    const filteredValue = value.replace(/[^0-9/]/g, '');

    // Count the number of slashes
    const slashCount = (filteredValue.match(/\//g) || []).length;

    // If there are more than 3 slashes, remove extra slashes
    let finalValue = filteredValue;
    if (slashCount > 3) {
      const slashesToRemove = slashCount - 3;
      finalValue = filteredValue
        .replace(/\/{2,}/g, '/')
        .replace(new RegExp(`\\/${slashesToRemove}$`), '');
    }

    // Ensure total length does not exceed 10 characters
    // if (finalValue.length > 10) {
    //     finalValue = finalValue.slice(0, 10);
    // }

    setInputValues((prev) => ({ ...prev, [type]: finalValue }));
  };

  // handled error messages start date<end date
  const handleInputBlur = (type: 'from' | 'to') => {
    const value = inputValues[type];
    // If the input value is empty, reset the state and clear errors
    if (value.trim() === '') {
      setSelectedRange((prev) => ({
        ...prev,
        [type]: undefined,
      }));
      setInputValues((prev) => ({
        ...prev,
        [type]: '',
      }));
      setErrors((prev) => ({
        ...prev,
        [type]: null,
      }));
      return;
    }

    const date = parseDate(value);

    if (isValidDate(date) && dateIsInFormat(value)) {
      // Check if the selected date is a future date
      if (date > new Date()) {
        setErrors((prev) => ({
          ...prev,
          [type]: 'Future dates are not allowed',
        }));
        return;
      }

      // Update the selected range based on the valid input
      setSelectedRange((prev) => {
        const newRange = { ...prev, [type]: date };

        // Initialize errors as null
        let errors = { from: null as string | null, to: null as string | null };

        // Get the current selected range values
        const { from, to } = newRange;

        // Validate the date range
        if (from && to) {
          if (from > to) {
            errors = {
              from: 'Start date must be less than end date',
              to: 'Start date must be less than end date',
            };
          }
        } else {
          if (type === 'to' && from && date < from) {
            errors.to = 'Start date must be less than end date';
          } else if (type === 'from' && to && date > to) {
            errors.from = 'Start date must be less than end date';
          }
        }

        // Update input values with formatted dates
        setInputValues((prev) => ({ ...prev, [type]: formatDate(date) }));

        // Set errors based on the validation
        setErrors(errors);

        // // Notify parent component about the date range change
        onDateRangeChange(newRange);

        return newRange;
      });
    } else {
      setErrors((prev) => ({ ...prev, [type]: 'Invalid date format' }));
    }
  };

  // Parse date string in MM/DD/YYYY format to a Date object
  const parseDate = (dateString: string): Date => {
    const [month, day, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // Months are 0-based in JavaScript Date
  };

  // Format a Date object to MM/DD/YYYY
  const formatDate = (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const isValidDate = (date: Date) => {
    return !isNaN(date.getTime());
  };

  const dateIsInFormat = (dateString: string) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(dateString);
  };

  const handleListClick = (id: number, { from, to }: DateRange) => {
    setSelectedItemId(id); // Set the clicked item's id

    // No need to convert to Date, as 'from' and 'to' are already Date objects
    setSelectedRange({ from, to });

    // Update input values in MM/DD/YYYY format
    updateInputValues(from, to);

    onDateRangeChange({ from, to });

    // Set the calendar month to the 'from' date (if necessary)
    // setCalendarMonth(from);
  };

  const updateInputValues = (from: Date, to: Date) => {
    setInputValues({
      from: format(from, 'MM/dd/yyyy'), // Format the date as MM/DD/YYYY
      to: format(to, 'MM/dd/yyyy'), // Format the date as MM/DD/YYYY
    });
  };

  const handleCancelClick = () => {
    console.log('inside handleCancelClick');
    onCancelClick();
  };

  const handleOkClick = () => {
    console.log('inside handleOkClick');
    onOkClick();
  };

  return (
    <div className="p-2  w-full	">
      <div className="inline-flex flex-col items-start bg-white shadow-2xl">
        <div className="flex flex-row items-start gap-0.75 align-self-stretch border-r border-t border-l border-gray-400 bg-gradient-to-b from-white/10 to-white/10">
          <div
            className="p-2.5 flex flex-col items-start gap-2 self-stretch border-r border-gray-400"
            style={{ width: '173px' }}
          >
            {datePickerDefaultList.map((item) => {
              const { from, to, disabled } = item.generateDateRange();

              return (
                <div
                  key={item.id}
                  className={` ${selectedItemId === item.id ? 'bg-blue-100 text-blue-700 font-medium' : ''} flex items-center gap-2.5 p-1.5 self-stretch   text-sm font-normal leading-5 tracking-tight ${disabled ? 'opacity-60 cursor-not-allowed bg-gray-200 text-gray-700 ' : ' cursor-pointer'}`}
                  onClick={() =>
                    !disabled && handleListClick(item.id, { from, to })
                  }
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="pt-2.5 pr-1.25 pb-2.5 pl-0">
            <div className="flex flex-col items-center justify-between space-x-4">
              <div className="flex">
                <div className="relative flex flex-col items-center">
                  <span className="text-black  text-xs font-normal leading-[16px] tracking-[0.4px] absolute top-[0.2ex] left-[2em] z-10 bg-white px-[5px]">
                    Start Date
                  </span>
                  <input
                    type="text"
                    value={inputValues.from}
                    onChange={(e) => handleInputChange(e, 'from')}
                    onBlur={() => handleInputBlur('from')}
                    placeholder="mm/dd/yyyy"
                    className={` ${errors.from != null ? 'border-red-500' : ''} text-[#1C1B1F]  text-base font-normal leading-[24px] tracking-[0.5px] rounded-sm border-2 border-[#B1B1B1] w-[119px] m-[10px] relative leading-[6ex] focus:outline-none focus:border-blue-500 input-class border rounded p-1 `}
                  />
                </div>

                <div className=" relative flex flex-col items-center">
                  <span className="text-black  text-xs font-normal leading-[16px] tracking-[0.4px] absolute top-[0.2ex] left-[2em] z-10 bg-white px-[5px]">
                    End Date
                  </span>

                  {/* <span className="absolute top-[0.2ex] left-[2em] z-10 bg-white px-[5px] font-semibold"></span> */}
                  <input
                    type="text"
                    value={inputValues.to}
                    onChange={(e) => handleInputChange(e, 'to')}
                    onBlur={() => handleInputBlur('to')}
                    placeholder="mm/dd/yyyy"
                    className={`${errors.to != null ? 'border-red-500' : ''}  text-[#1C1B1F]  text-base font-normal leading-[24px] tracking-[0.5px]
                                    rounded-sm border-2 border-[#B1B1B1] w-[119px] m-[10px] relative leading-[6ex] focus:outline-none focus:border-blue-500 input-class border rounded p-1 `}
                  />

                </div>
              </div>
              <div>
                {(errors.from || errors.to) && (
                  <span className="text-red-500 text-sm">{errors.from}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Calendar
                selected={selectedRange}
                mode="range"
                onDayClick={handleDayClick}
                defaultMonth={new Date()} // Show the 'from' date's month
                // month={calendarMonth}
                disabled={[{ after: new Date() }]} // Disable all dates after today
                // fromMonth={new Date(2020, 0)} // Example: Set a starting limit for months
                // toMonth={new Date(2030, 11)} // Example: Set an ending limit for months
                numberOfMonths={1}
              />
            </div>
          </div>
        </div>
        <div className="flex p-2 px-3 justify-end items-end w-full gap-5 border border-gray-400 bg-white text-[#65A3FF]">
          <Button
            className="w-fit bg-transparent text-blue-500 hover:bg-transparent justify-end"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
          <Button
            className="w-fit bg-transparent text-blue-500 hover:bg-transparent justify-end"
            onClick={handleOkClick}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;

// To - Add border-radius styling for the calendar days when hovered over.
// button[name="day"] {
//     border-radius: 100%;
//   }

// Sample Usage of the DateRangePicker component

// import React, { useState } from 'react';

// import DateRangePicker from '../components/ui_library/DateRangePicker';

// const Product: React.FC = () => {
//   const [selectedRange, setSelectedRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
//     from: undefined,
//     to: undefined,
//   });

//   const handleDateRangeChange = (range: { from: Date | undefined; to: Date | undefined }) => {
//     console.log("Product-Page Date Updated");

//     setSelectedRange(range);
//   };

//   // Function to handle OK button click
//   const handleOkClick = () => {
//     console.log("Product-Page OK clicked");
//     // Perform actions such as finalizing the date range selection
//     // For example, you might want to update the state or call an API
//   };

//   // Function to handle Cancel button click
//   const handleCancelClick = () => {
//     console.log("Product-Page Cancel clicked");
//     // Perform actions such as resetting the date range selection
//     // For example, you might want to reset state or close a modal
//   };

//   console.log("in Product page")
//   console.log("selectedRange: ", selectedRange)
//   return (
//     <>
//       <h2 className="text-2xl">Product Page</h2>
//       <div>
//         <h1>Date Picker Example</h1>
//         <div>
//           <p>Selected Start Date: {selectedRange.from ? selectedRange.from.toDateString() : 'None'}</p>
//           <p>Selected End Date: {selectedRange.to ? selectedRange.to.toDateString() : 'None'}</p>
//         </div>
//         <DateRangePicker
//           onDateRangeChange={handleDateRangeChange}
//           onOkClick={handleOkClick}
//           onCancelClick={handleCancelClick} />

//       </div>

//     </>
//   )
// };

// export default Product;
