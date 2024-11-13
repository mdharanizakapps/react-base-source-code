import React, { useEffect, useState } from 'react';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../ui/chart';

import {
  Card,
  CardContent
} from '../../ui/card';


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

import { Checkbox } from '../../ui/checkbox';

import { Label, Pie, PieChart } from 'recharts';

export const description = 'A donut chart with text';

interface CategoryData {
  category: string;
  sales: number;
  fill: string;
  isSelected: boolean;
  last7DaysMargin: number
  last7DaysSales: number
}

interface ChartDataConfig {
  [key: string]: {
    label: string; // Label for the key (e.g., "Revenue")
    color: string; // Color associated with the key
    category: {
      label: string;
      value: number
    },
    last7DaysMargin: {
      label: string;
      value: number
    };

    last7DaysSales: {
      label: string;
      value: number
    };

  };
}


export const CategoryShare: React.FC = () => {
  const [initialChartData, setInitialChartData] = useState<CategoryData[]>([])
  const [chartData, setChartData] = useState<CategoryData[]>([])
  const [chartConfig, setChartConfig] = useState<ChartDataConfig>({})
  const [totalVisitors, setTotalVisitors] = useState<number>(0)


  console.log("chartData: ", chartData);

  useEffect(() => {

    const chartData = generateCategoryData()

    const chartConfigData = generateChartConfigData(chartData)
    setChartConfig(chartConfigData)
    setInitialChartData(chartData)
    setChartData(chartData)
    setTotalVisitors(calculateTotalVisitors(chartData))
  }, [])


  // const calculateTotalVisitors = (data: CategoryData[]) => {
  //   console.log("calculateTotalVisitors data: ", data)
  //   return data.reduce(
  //     (acc: number, curr: CategoryData) => acc + curr.sales,
  //     0
  //   );
  // }

  const calculateTotalVisitors = (data: CategoryData[]) => {
    console.log("calculateTotalVisitors data:", data);
    return data.reduce((acc: number, curr: CategoryData) => {
      return curr.isSelected ? acc + curr.sales : acc;
    }, 0);
  };

  const categories = [
    'Timber', 'Insulation', 'Plumbing', 'Electrical', 'Flooring', 'Roofing',
    'Doors', 'Windows', 'Paint', 'Tools', 'Lighting', 'Cabinets',
    'Countertops', 'HVAC', 'Gardening', 'Fencing', 'Masonry', 'Siding',
    'Fasteners', 'Drywall'
  ];

  // Function to generate a random number within a given range
  const getRandomSales = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Function to generate a random unique color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Create an array of objects with category, sales, and unique color
  const generateCategoryData = () => {
    return categories.map(category => ({
      category,
      sales: getRandomSales(1000, 90000),
      fill: getRandomColor(),
      isSelected: true,
      last7DaysMargin: getRandomSales(1000, 90000),
      last7DaysSales: getRandomSales(1000, 90000)
    }));
  }


  const handleCheckboxChange = (index: number) => {

    setInitialChartData((prevData) => {
      // Toggle the `isSelected` value for the clicked item
      const updatedData = prevData.map((item, i) =>
        i === index ? { ...item, isSelected: !item.isSelected } : item
      );

      // Update `chartData` with only the selected items
      const selectedData = updatedData.filter((item) => item.isSelected);
      setChartData(selectedData);

      setTotalVisitors(calculateTotalVisitors(updatedData))


      return updatedData;
    });
  };

  const generateChartConfigData = (data: CategoryData[]): ChartDataConfig => {
    const config: ChartDataConfig = {};


    data.map((item) => {
      //   `${item.category}`{
      //     label: 'Chrome',
      //       color: 'var(--chart-1)',

      // }

      config[item.category] = {
        label: item.category,
        color: item.fill,
        last7DaysMargin:
        {
          label: "L7 days Margin%",
          value: getRandomSales(0, 100),
        },

        last7DaysSales:
        {
          label: "L7 days sales",
          value: getRandomSales(1000, 90000),
        },
        category: {
          label: item.category,
          value: item.sales,
        }
      }
    })

    console.log("tempConfigData: ", config)
    return config
  }

  return (
    <Card className="w-full rounded-[6px] border border-[#DDD] bg-white  ">
      <div className="px-[10px] py-5 bg-grey-100 rounded-t-lg flex justify-between items-center">
        <div className="text-body-18 text-black">ProjectGenerator Share</div>
        <div className="text-body-16 text-black float-right">
          <Select defaultValue="revenue">
            <SelectTrigger className="w-20">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="orders">Orders</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex max-h-[400px] shadow-sm rounded-b-lg border-grey-200 p-1">
        <CardContent className="flex-1 pb-0 max-w-[320px]">
          <ChartContainer config={chartConfig} className="aspect-square">
            <PieChart>
              <ChartTooltip
                content={
                  <ChartTooltipContent

                    formatter={(value, name) => (
                      <div>

                        <div className="flex min-w-[130px] text-body-12 items-center ">

                          <span className="w-28"> {chartConfig[name as keyof typeof chartConfig]?.category?.label} </span>
                          <span className="w-14 text-right"> £ {chartConfig[name as keyof typeof chartConfig]?.category?.value} </span>

                        </div>


                        <div className="flex mt-2 min-w-[130px] items-center text-xs text-muted-foreground justify-between">

                          <span className="w-28"> {chartConfig[name as keyof typeof chartConfig]?.last7DaysSales?.label} </span>
                          <span className="w-14 text-right"> £ {`${chartConfig[name as keyof typeof chartConfig]?.last7DaysSales?.value}`} </span>

                        </div>

                        <div className="flex mt-2 min-w-[130px] items-center text-xs text-muted-foreground justify-between">

                          <span className="w-28">  {chartConfig[name as keyof typeof chartConfig]?.last7DaysMargin?.label} </span>
                          <span className="w-14 text-right">   {`${chartConfig[name as keyof typeof chartConfig]?.last7DaysMargin?.value} %`} </span>

                        </div>

                      </div>
                    )}
                  />
                }
                cursor={false}
                defaultIndex={1}
              />
              <Pie
                data={chartData}
                dataKey="sales"
                nameKey="category"
                innerRadius={90}
                strokeWidth={10}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 10) - 20}
                            className="text-body-16"
                          >
                            Total
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 10}
                            className="text-body-30 text-black"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>

              {/* <ChartLegend
                  content={<ChartLegendContent nameKey="category" />}
                  className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                /> */}

            </PieChart>
          </ChartContainer>
        </CardContent>

        <div className="grid gap-3 grid-cols-2">
          {/* <Legend categories={categories} /> */}

          {
            initialChartData.map((chartItem, index) => {
              return (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`checkbox-${index}`}
                    checked={chartItem.isSelected}
                    // onCheckedChange={field.onChange}
                    onCheckedChange={() => handleCheckboxChange(index)}

                  />
                  <div
                    className="h-2 w-2 shrink-0 rounded-[2px]"
                    style={{
                      backgroundColor: chartItem.fill,
                      width: "16px",
                      height: "9px", // Adjusted height for visibility
                    }}
                  ></div>
                  <label
                    htmlFor={`checkbox-${index}`}
                    className="text-body-16 text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {chartItem.category}
                  </label>
                </div>
              )
            })
          }


        </div>

      </div>
    </Card>
  );
};
