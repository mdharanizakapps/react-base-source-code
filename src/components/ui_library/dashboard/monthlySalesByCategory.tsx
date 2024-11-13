import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "../../ui/card"
import { Progress } from "../../ui/progress"
import { ArrowDownLeft, ArrowUpRight, Pencil } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../@/components/ui/dialog";
import EditTarget from "./editTarget"


const bySpplierData = [
    {
        "categoryName": "Timber",
        "currentSale": 23031,
        "targetSale": 21313,
        "trending": true,
        "saleDifferancePercentage": 78,
        "weeklyTrendingPercentage": 6
    },
    {
        "categoryName": "Insulation",
        "currentSale": 11231,
        "targetSale": 14313,
        "trending": false,
        "saleDifferancePercentage": 90,
        "weeklyTrendingPercentage": 8
    },
    {
        "categoryName": "Plumbing",
        "currentSale": 18324,
        "targetSale": 20000,
        "trending": true,
        "saleDifferancePercentage": 40,
        "weeklyTrendingPercentage": -8
    },
    {
        "categoryName": "Electrical",
        "currentSale": 25000,
        "targetSale": 24000,
        "trending": true,
        "saleDifferancePercentage": 60,
        "weeklyTrendingPercentage": 4
    },
    {
        "categoryName": "Flooring",
        "currentSale": 14000,
        "targetSale": 15000,
        "trending": false,
        "saleDifferancePercentage": 90,
        "weeklyTrendingPercentage": -7
    },
    {
        "categoryName": "Roofing",
        "currentSale": 19000,
        "targetSale": 17000,
        "trending": true,
        "saleDifferancePercentage": 80,
        "weeklyTrendingPercentage": 12
    },
    {
        "categoryName": "Doors",
        "currentSale": 16500,
        "targetSale": 18000,
        "trending": false,
        "saleDifferancePercentage": 60,
        "weeklyTrendingPercentage": -8
    },
    {
        "categoryName": "Windows",
        "currentSale": 21000,
        "targetSale": 20000,
        "trending": true,
        "saleDifferancePercentage": 90,
        "weeklyTrendingPercentage": 5
    },
    {
        "categoryName": "Paint",
        "currentSale": 9000,
        "targetSale": 9500,
        "trending": false,
        "saleDifferancePercentage": 40,
        "weeklyTrendingPercentage": -5
    },
    {
        "categoryName": "Tools",
        "currentSale": 29000,
        "targetSale": 30000,
        "trending": false,
        "saleDifferancePercentage": 90,
        "weeklyTrendingPercentage": -3
    },
    {
        "categoryName": "Lighting",
        "currentSale": 13500,
        "targetSale": 15000,
        "trending": false,
        "saleDifferancePercentage": 100,
        "weeklyTrendingPercentage": -10
    },
    {
        "categoryName": "Cabinets",
        "currentSale": 18000,
        "targetSale": 17000,
        "trending": true,
        "saleDifferancePercentage": 60,
        "weeklyTrendingPercentage": 6
    },
    {
        "categoryName": "Countertops",
        "currentSale": 21000,
        "targetSale": 20000,
        "trending": true,
        "saleDifferancePercentage": 60,
        "weeklyTrendingPercentage": 5
    },
    {
        "categoryName": "HVAC",
        "currentSale": 15000,
        "targetSale": 14000,
        "trending": true,
        "saleDifferancePercentage": 90,
        "weeklyTrendingPercentage": 7
    },
    {
        "categoryName": "Gardening",
        "currentSale": 8000,
        "targetSale": 8500,
        "trending": false,
        "saleDifferancePercentage": 60,
        "weeklyTrendingPercentage": -6
    },
    {
        "categoryName": "Fencing",
        "currentSale": 12000,
        "targetSale": 12500,
        "trending": false,
        "saleDifferancePercentage": 50,
        "weeklyTrendingPercentage": -4
    },
    {
        "categoryName": "Masonry",
        "currentSale": 9500,
        "targetSale": 10000,
        "trending": false,
        "saleDifferancePercentage": 20,
        "weeklyTrendingPercentage": -5
    },
    {
        "categoryName": "Siding",
        "currentSale": 16000,
        "targetSale": 15000,
        "trending": true,
        "saleDifferancePercentage": 100,
        "weeklyTrendingPercentage": 6
    },
    {
        "categoryName": "Fasteners",
        "currentSale": 17000,
        "targetSale": 16500,
        "trending": true,
        "saleDifferancePercentage": 90,
        "weeklyTrendingPercentage": 3
    },
    {
        "categoryName": "Drywall",
        "currentSale": 23000,
        "targetSale": 22000,
        "trending": true,
        "saleDifferancePercentage": 40,
        "weeklyTrendingPercentage": 4
    }
]

interface MSBCategoryData {
    categoryName: string
    currentSale: number
    targetSale: number
    trending: boolean
    weeklyTrendingPercentage: number
    saleDifferancePercentage: number
}

interface MSBCategoryFormatingData {
    [key: string]: {
        type: string; // e.g., "currency"
    };
}

const msbCategoryFormatingTemplate: MSBCategoryFormatingData = {
    weeklyTrendingPercentage: {
        type: 'percentage'
    },
    targetSale: {
        type: 'currency'
    },
    currentSale: {
        type: 'currency'
    },
};

const currency = '£';

const MonthlySalesByCategory = (() => {


    const [data, setData] = useState<MSBCategoryData[]>([])
    const [msbCategoryFormatingData, setMSBCategoryFormatingData] = useState<MSBCategoryFormatingData | null>(null);
    // const [year, setYear] = useState<number>(new Date().getFullYear());
    // const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

    const [yearData, setYearData] = useState<number[]>([]);
    const [monthData, setMonthData] = useState<string[]>([]);


    useEffect(() => {
        setData(bySpplierData)
        setMSBCategoryFormatingData(msbCategoryFormatingTemplate)
        setYearData(years)
        setMonthData(months)
    }, [])

    // Generate years from 2000 to 2030
    const years = Array.from({ length: 31 }, (_, index) => 2000 + index);

    // Months from 1 to 12
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formatValue = (value: any, key: any): string => {
        let modifiedValue = value.toString();

        if (value >= 1000000) {
            modifiedValue =
                (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1) + 'M';
        } else if (value >= 1000) {
            modifiedValue = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K';
        }
        if (msbCategoryFormatingData?.[key]?.type === 'currency') {
            modifiedValue = currency + modifiedValue.toString();
        } else if (msbCategoryFormatingData?.[key]?.type == "percentage") {
            modifiedValue = modifiedValue.toString() + "%";
        }

        return modifiedValue;
    };

    return (
        <Card className="w-full rounded-[6px] border border-[#DDD] bg-white">
            <CardHeader className="py-5 px-2 flex flex-row bg-[#F8F9FA] justify-between items-center rounded-[6px]">
                <div className="flex gap-6 items-center ">
                    <div className="text-[18px] font-semibold leading-[18px] tracking-[-0.198px]">
                        Monthly Sales By ProjectGenerator
                    </div>
                    <div className="flex  border rounded-md">

                        <div className="flex items-center gap-[14px] p-[6px_7px] rounded-l-[4px] rounded-r-none border border-[#B3B3B3] bg-[#FFF]">
                            <Select defaultValue="Oct"
                            // onValueChange={(value) => {
                            //     handleMetricChange(value)
                            // }}
                            >
                                <SelectTrigger className="flex items-center gap-[14px] p-[6px_7px] rounded-l-[4px] rounded-r-none border border-[#B3B3B3] bg-[#FFF]" >
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        monthData.map((month, index) => {
                                            return (
                                                <SelectItem key={index} value={`${month}`}>{month}</SelectItem>
                                            )
                                        })
                                    }
                                </SelectContent>
                            </Select>

                        </div>

                        <div className="flex items-center gap-[10px] p-[6px_7px] rounded-r-[4px] rounded-l-none border border-[#B3B3B3] bg-[#FFF]">
                            <Select defaultValue="2024"
                            // onValueChange={(value) => {
                            //     handleMetricChange(value)
                            // }}
                            >
                                <SelectTrigger className="flex items-center gap-[10px] p-[6px_7px] rounded-r-[4px] rounded-l-none border border-[#B3B3B3] bg-[#FFF]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        yearData.map((year, index) => {
                                            return (
                                                <SelectItem key={index} value={`${year}`}>{year}</SelectItem>
                                            )
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="w-14 px-1 py-1 text-nowrap bg-[#65A3FF] text-white text-xs rounded-md flex justify-center ">
                    vs goal
                </div>
            </CardHeader>
            <CardContent className="p-3 flex flex-col gap-12 h-[700px] overflow-auto">
                {
                    data.map((categoryItem, index) => {
                        return (
                            <div className="flex flex-col gap-3" key={index}>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-3">
                                        <span>{categoryItem.categoryName}</span>
                                        <div className={`flex gap-1 p-[2px_4px] rounded-sm ${categoryItem.trending ? " text-[#039E00] bg-[#ECFFEB]" : "text-[#FF3737] bg-[#ffe6e6]"}
                                             text-xs`}>
                                            {
                                                categoryItem.trending
                                                    ?
                                                    <ArrowUpRight size={16} color="#039e00" strokeWidth={1.25} />
                                                    : <ArrowDownLeft size={16} color="#ff3737" strokeWidth={1.25} />
                                            }
                                            <span> {formatValue(categoryItem.weeklyTrendingPercentage, "weeklyTrendingPercentage")}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[16px] font-normal leading-[16px] tracking-[-0.176px] text-black">{formatValue(categoryItem.currentSale, "currentSale")}</span>
                                        <span className=" text-[#8F8F8F]">|</span>
                                        <span className="text-[16px] font-normal leading-[16px] tracking-[-0.176px] text-[#8F8F8F]"> {formatValue(categoryItem.targetSale, "targetSale")}</span>
                                        {/* <Pencil />
                                        <Pencil color="#EEEEEE" /> */}
                                        <span>
                                            <Dialog>
                                                <DialogTrigger>
                                                    <Pencil size={12} color="#8F8F8F" strokeWidth={1.25} />
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Edit Target</DialogTitle>
                                                        <DialogDescription>
                                                            <EditTarget />
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    {/* 
                                                    <DialogFooter className="flex py-2 px-4 justify-between items-center">
                                                        <span className="text-[#181818] text-[12px] font-normal leading-[150%]" style={{ letterSpacing: '-0.132px' }}>
                                                            Last updated: 23 Aueeg 2024
                                                        </span>

                                                        <div className="flex items-center gap-9">
                                                            <Button >Cancel</Button>
                                                            <Button variant="primary" size={"sm"}>Save</Button>
                                                        </div>

                                                    </DialogFooter>
                                                    */}
                                                </DialogContent>
                                            </Dialog>
                                        </span>
                                    </div>
                                </div>
                                <Progress value={categoryItem.saleDifferancePercentage} className="w-[100%] h-2" />
                            </div>
                        )
                    })
                }

            </CardContent>
        </Card >
    )
})

export default MonthlySalesByCategory