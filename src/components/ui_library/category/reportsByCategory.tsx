import { MoveDownRight, MoveUpRight } from "lucide-react"
import { useEffect, useState } from "react"


export interface ReportsbyCategory {
    title: string
    key: string
    sourceName: string
    currentValue: number
    lastYearValue: number
    marginPercentValue: number
    marginCompareFlag: boolean
    thisWeek: number
    lastFourWeek: number
    yearTillDate: number
}



const reportsbyCategoryData: ReportsbyCategory[] = [
    {
        "title": "Sales",
        "key": "sales",
        "sourceName": "Zoho",
        "currentValue": 250959,
        "lastYearValue": 364334,
        "marginPercentValue": 8,
        "marginCompareFlag": true,
        "thisWeek": 25000,
        "lastFourWeek": 73000,
        "yearTillDate": 423000
    },
    {
        "title": "Cost",
        "key": "cost",
        "sourceName": "Zoho",
        "currentValue": 7632,
        "lastYearValue": 364334,
        "marginPercentValue": 8,
        "marginCompareFlag": false,
        "thisWeek": 25000,
        "lastFourWeek": 73000,
        "yearTillDate": 423000
    },
    {
        "title": "Margin",
        "key": "margin",
        "sourceName": "Zoho",
        "currentValue": 25,
        "lastYearValue": 29,
        "marginPercentValue": 8,
        "marginCompareFlag": true,
        "thisWeek": 23,
        "lastFourWeek": 26,
        "yearTillDate": 25
    },
    {
        "title": "Orders",
        "key": "orders",
        "sourceName": "Zoho",
        "currentValue": 23321,
        "lastYearValue": 364334,
        "marginPercentValue": 8,
        "marginCompareFlag": true,
        "thisWeek": 25000,
        "lastFourWeek": 73000,
        "yearTillDate": 423000
    },
    {
        "title": "Ad Spend",
        "key": "adSpend",
        "sourceName": "Google Ads",
        "currentValue": 364334,
        "lastYearValue": 364334,
        "marginPercentValue": 8,
        "marginCompareFlag": true,
        "thisWeek": 25000,
        "lastFourWeek": 73000,
        "yearTillDate": 423000
    }
]

interface ReportsbyCategoryFormatingData {
    [key: string]: {
        type: 'currency' | 'percentage' | 'number'; // e.g., "currency"
    };
}


const reportsbyCategoryFormatingData: ReportsbyCategoryFormatingData = {
    sales: {
        type: 'currency'
    },
    cost: {
        type: 'currency'
    },
    margin: {
        type: 'percentage'
    },
    orders: {
        type: 'number'
    },
    adSpend: {
        type: 'currency'
    }
};

const currency = '£';

const ReportsByCategory = () => {

    const [reportData, setReportData] = useState<ReportsbyCategory[]>([])
    const [formatingData, setFormatingData] = useState<ReportsbyCategoryFormatingData>({})


    useEffect(() => {
        setReportData(reportsbyCategoryData)
        setFormatingData(reportsbyCategoryFormatingData)
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formatValue = (value: any, key: any) => {
        let modifiedValue = value.toString();

        if (value >= 1000000) {
            modifiedValue =
                (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1) + 'M';
        } else if (value >= 1000) {
            modifiedValue = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K';
        }

        if (formatingData?.[key]?.type === 'currency') {
            modifiedValue = currency + modifiedValue.toString();
        } else if (formatingData?.[key]?.type == "percentage") {
            modifiedValue = modifiedValue.toString() + "%";
        }

        return modifiedValue;
    };

    return (
        <div className="flex items-center gap-10  flex-wrap w-full">
            {
                reportData.length > 0 ? (
                    reportData.map((reportItem: ReportsbyCategory, index) => (
                        <div key={index} className=" flex flex-col items-start p-2 gap-2 rounded-lg border border-gray-300 bg-white">
                            <div className="flex justify-between items-center self-stretch">
                                <div className="text-black  text-[16px] font-semibold leading-[100%] tracking-[-0.176px]">
                                    {reportItem.title}
                                </div>
                                <div className="flex p-[3px_6px] justify-center items-center gap-[10px] rounded-[40px] bg-[#EAEAEA] text-[#5C5C5C]  text-[8px] font-normal leading-[100%] tracking-[-0.088px]">
                                    {reportItem.sourceName}
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[5px] self-stretch">
                                <div className="text-black  text-[30px] font-semibold leading-[100%] tracking-[-0.33px]">
                                    {formatValue(reportItem.currentValue, reportItem.key)}
                                </div>

                                <div className="flex justify-between items-start self-stretch w-[141px]">
                                    <div className=" text-[#A2A2A2] text-sm font-semibold leading-[150%] tracking-[-0.154px]">
                                        LY
                                        {formatValue(reportItem.lastYearValue, reportItem.key)}
                                    </div>
                                    <div className={`flex items-center p-[2px_4px] rounded-[4px] ${reportItem.marginCompareFlag ? 'bg-[rgba(255,55,55,0.05)]' : 'bg-[#e2ffe2]'}`}>
                                        {
                                            reportItem.marginCompareFlag ?
                                                <MoveDownRight size={12} color="#ff3737" />
                                                :
                                                <MoveUpRight size={12} color="#039e00" />
                                            // <img className="" src="src/assets/arraow_downward.svg" />
                                            // : <img className="" src="src/assets/arraow_upward.svg" />
                                        }
                                        <div className={`${reportItem.marginCompareFlag ? ' text-[#FF3737]' : 'text-[#039e00]'} text-[12px] font-normal leading-[150%] tracking-[-0.132px]`}>
                                            {formatValue(reportItem.marginPercentValue, "margin")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-end items-start gap-1.5 self-stretch">
                                <div className="flex justify-between items-start self-stretch">
                                    <div className="text-black text-xs font-medium leading-none tracking-tight">
                                        This week
                                    </div>
                                    <div className="text-gray-500 text-xs font-medium leading-none tracking-tight">
                                        {formatValue(reportItem.thisWeek, reportItem.key)}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start self-stretch">
                                    <div className="text-black text-xs font-medium leading-none tracking-tight">
                                        L4W
                                    </div>
                                    <div className="text-gray-500 text-xs font-medium leading-none tracking-tight">
                                        {formatValue(reportItem.lastFourWeek, reportItem.key)}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start self-stretch">
                                    <div className="text-black text-xs font-medium leading-none tracking-tight">
                                        YTD
                                    </div>
                                    <div className="text-gray-500 text-xs font-medium leading-none tracking-tight">
                                        {formatValue(reportItem.yearTillDate, reportItem.key)}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <div>No reportItem available</div> // Provide a fallback or alternative content
                )
            }

        </div >
    )
}

export default ReportsByCategory