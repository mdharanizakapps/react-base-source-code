import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../ui/chart';
import { Card, CardContent, CardHeader } from '../../ui/card';
import {
  ChartDatum,
  GetOverviewRequest,
} from '../../../type/data/dashboard/dashboard';
import { getOverviewData } from '../../../api/DashboardModal';

interface ChartDataConfig {
  [key: string]: {
    label: string; // Label for the key (e.g., "Revenue")
    color: string; // Color associated with the key
  };
}

interface ChartHeaderData {
  label: string;
  key: string;
  value: number;
}

interface ChartFormatingData {
  [key: string]: {
    type: string; // e.g., "currency"
    color: string; // e.g., "hsl(12 76% 61%)"
  };
}

const chartFormatingTemplate: ChartFormatingData = {
  revenue: {
    type: 'currency',
    color: 'hsl(12 76% 61%)',
  },
  cost: {
    type: 'currency',
    color: 'hsl(12 76% 61%)',
  },
  orders: {
    type: 'number',
    color: 'hsl(12 76% 61%)',
  },
  yoy: {
    type: 'currency',
    color: 'hsl(12 76% 61%)',
  },
};

const currency = '£';

export const Overview = () => {
  const [chartHeaderData, setChartHeaderData] = useState<ChartHeaderData[]>([]);
  const [chartData, setChartData] = useState<ChartDatum[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartDataConfig>({});
  const [selectedChartHeader, setSelectedChartHeader] = useState<string[]>([]);
  const [chartMaxCount, setChartMaxCount] = useState<number>(0);
  const [chartFormatingData, setChartFormatingData] =
    useState<ChartFormatingData | null>(null);

  useEffect(() => {
    const initialSelcetedHeader = 'revenue';
    setChartFormatingData(chartFormatingTemplate);
    getOverviewDataApiCall([initialSelcetedHeader]);
  }, []);

  const getOverviewDataApiCall = async (metric: string[]) => {
    try {
      const payload: GetOverviewRequest = {
        clientName: 'diy',
        from: '2024-05-17',
        to: '2024-07-17',
        metric: metric,
      };
      const response = await getOverviewData(payload);

      setChartHeaderData(response.data.data.header);
      setSelectedChartHeader(metric);
      setChartData(response.data.data.chartData);
      setChartConfig(generateChartDataConfig(response.data.data.header));
      setChartMaxCount(
        findHeaderMaxCount(response.data.data.header, [
          response.data.data.header[0].key,
        ])
      );
    } catch (error) {
      console.error('Error in getOverviewDataApiCall: ', error);
    }
  };

  const generateChartDataConfig = (
    responseHeaderData: ChartHeaderData[]
  ): ChartDataConfig => {
    const config: ChartDataConfig = {};

    responseHeaderData.map((responseHeaderItem) => {
      config[responseHeaderItem.key] = {
        label: responseHeaderItem.label,
        color: `chart-${responseHeaderItem.key}`,
      };
    });

    config['yoy'] = {
      label: 'YoY',
      color: `chart-yoy`,
    };

    return config;
  };

  const handleHeaderClick = (key: string) => {
    let updatedSelectedHeaders = [...selectedChartHeader]; // Create a local copy of the current state

    if (updatedSelectedHeaders.includes(key)) {
      // If the key is already selected, remove it
      if (updatedSelectedHeaders.length > 1) {
        updatedSelectedHeaders = updatedSelectedHeaders.filter(
          (item) => item !== key
        );
      }
    } else {
      // If the key is not selected, add it
      updatedSelectedHeaders.push(key);
    }
    getOverviewDataApiCall(updatedSelectedHeaders);
  };

  const findHeaderMaxCount = (
    headerData: ChartHeaderData[],
    selectedHeaderData: string[]
  ): number => {
    const maxValue = headerData
      .filter((item) => selectedHeaderData.includes(item.key)) // Filter based on selected keys
      .reduce((max, item) => Math.max(max, item.value), -Infinity); // Find the maximum value
    return maxValue;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatValue = (value: any, key: any): string => {
    let modifiedValue = value.toString();
    // Check for million
    if (value >= 1000000) {
      modifiedValue =
        (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1) + 'M';
    } else if (value >= 1000) {
      modifiedValue = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K';
    }

    if (key === 'yoy') {
      if (chartFormatingData?.[selectedChartHeader[0]]?.type === 'currency') {
        modifiedValue = currency + modifiedValue.toString();
      }
    } else if (chartFormatingData?.[key]?.type === 'currency') {
      modifiedValue = currency + modifiedValue.toString();
    }
    return modifiedValue;
  };

  return (
    <Card className=" w-full  frounded-[6px] border border-[#DDD] bg-white">
      <CardHeader className="flex flex-col items-stretch space-y-0  p-0 sm:flex-row">
        {chartHeaderData.map((headerItem, index) => {
          return (
            <div
              key={headerItem.key}
              style={{
                backgroundColor: selectedChartHeader.includes(headerItem.key)
                  ? `var(--chart-${headerItem.key})` // Use chart variable if key is found
                  : '', // No background if not selected
              }}
              className={`inline-flex flex-col gap-1 items-start py-5 px-6 cursor-pointer border-r border-b border-[#D7D7D7] ${selectedChartHeader.includes(headerItem.key) ? `text-white` : ''}
                        ${index == 0 ? 'rounded-tl-md' : ''}
                      `}
              onClick={() => handleHeaderClick(headerItem.key)}
            >
              <span className="text-base">{headerItem.label}</span>
              <span className="text-3xl">
                {formatValue(headerItem.value, headerItem.key)}
              </span>
            </div>
          );
        })}
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            {/* CartesianGrid is for the vertical and horizontal grid line behind the lines  */}
            <CartesianGrid vertical={true} horizontal={true} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={100}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />

            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
              tickFormatter={(value) => {
                let modifiedValue = value;

                if (chartMaxCount >= 1000000) {
                  modifiedValue = modifiedValue / 1000000 + 'M';
                  return modifiedValue;
                } else if (chartMaxCount >= 1000) {
                  modifiedValue = modifiedValue / 1000 + 'K';
                  return modifiedValue;
                }
                return modifiedValue;
              }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  // hideLabel
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      weekday: 'short', // "Wed"
                      day: 'numeric', // "13"
                      month: 'short', // "Jun"
                    });
                  }}
                  formatter={(value, name, color) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg] "
                        style={
                          {
                            // '--color-bg': `var(--chart-${name})`,
                            '--color-bg': `${color}`,
                          } as React.CSSProperties
                        }
                      />
                      <div className="flex min-w-[130px] items-center text-xs text-muted-foreground">
                        {chartConfig[name as keyof typeof chartConfig]?.label ||
                          name}
                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-muted-foreground">
                          {formatValue(value, name)}
                        </div>
                      </div>
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />

            {/* Render dynamic Line components based on chartData */}
            {Object.entries(chartConfig).map(([key]) => {
              return (
                <Line
                  key={key}
                  dataKey={key}
                  stroke={`var(--chart-${key}`} // Assuming these CSS variables are defined
                  strokeWidth={2}
                  dot={false}
                />
              );
            })}
          </LineChart>
        </ChartContainer>
        <div className="float-right p-2">
          {selectedChartHeader.length == 1 ? (
            <span className="text-[#8F8F8F] font-inter text-[16px] font-normal leading-[100%] tracking-[-0.176px]">
              compared with YoY
            </span>
          ) : (
            ''
          )}
        </div>
      </CardContent>
    </Card>
  );
};
