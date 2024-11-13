import { useEffect, useState } from 'react';
// import { getTopProductsData } from '../../../api/dashboardModal';
import {
  GetTopProductsRequest,
  TopProductsData,
} from '../../../type/data/dashboard/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { AxiosResponse } from 'axios';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { getTopProductsData } from '../../../api/DashboardModal';

interface TopProductsFormatingData {
  [key: string]: {
    type: string; // e.g., "currency"
  };
}

const topProductsFormatingTemplate: TopProductsFormatingData = {
  revenue: {
    type: 'currency',
  },
  margin: {
    type: 'percentage',
  },
  orders: {
    type: 'number',
  },
  sales: {
    type: 'number',
  },
};

const currency = '£';

interface HeaderDropDownData {
  label: string;
  value: string;
}

const OriginalHeaderDropDownData = [
  {
    label: 'Revenue',
    value: 'revenue',
  },
  {
    label: 'Orders',
    value: 'orders',
  },
];

export const TopProducts = () => {
  const [topProductsData, setTopProductsData] = useState<TopProductsData[]>([]);
  const [topProductsFormatingData, setTopProductsFormatingData] =
    useState<TopProductsFormatingData | null>(null);
  const [headerDropDownData, setHeaderDropDownData] = useState<
    HeaderDropDownData[]
  >([]);
  const [selectedMetric, setSelectedMetric] = useState<string>('');

  useEffect(() => {
    const initialSelectedMetric = 'revenue';
    setSelectedMetric('revenue');
    setTopProductsFormatingData(topProductsFormatingTemplate);
    setHeaderDropDownData(OriginalHeaderDropDownData);
    getTopProductsDataApiCall(initialSelectedMetric);
  }, []);

  const getTopProductsDataApiCall = async (metric: string) => {
    try {
      const payload: GetTopProductsRequest = {
        clientName: 'diy',
        from: '2024-05-17',
        to: '2024-07-17',
        metric: metric,
      };
      const response: AxiosResponse = await getTopProductsData(payload);
      setTopProductsData(response.data.data.data);
    } catch (error) {
      console.error('Error in getTopProductsDataApiCall: ', error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatValue = (value: any, key: any): string => {
    let modifiedValue = value.toString();

    if (value >= 1000000) {
      modifiedValue =
        (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1) + 'M';
    } else if (value >= 1000) {
      modifiedValue = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K';
    }
    if (topProductsFormatingData?.[key]?.type === 'currency') {
      modifiedValue = currency + modifiedValue.toString();
    } else if (topProductsFormatingData?.[key]?.type == 'percentage') {
      modifiedValue = modifiedValue.toString() + '%';
    }

    return modifiedValue;
  };
  const handleMetricChange = (value: string) => {
    setSelectedMetric(value);
    getTopProductsDataApiCall(value);
  };

  return (
    <Card className="w-full rounded-[6px] border border-[#DDD] bg-white  ">
      <CardHeader className="flex flex-row w-full p-[10px_10px] justify-between items-center bg-[#F8F9FA] rounded-[6px] ">
        <CardTitle className="text-black text-[18px] font-semibold leading-[18px] tracking-[-0.198px]">
          TopProducts
        </CardTitle>
        <div className="text-black text-[16px] font-normal leading-[16px] tracking-[-0.176px]">
          {headerDropDownData.length > 0 ? (
            <Select
              defaultValue={selectedMetric}
              onValueChange={(value) => {
                handleMetricChange(value);
              }}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {headerDropDownData.map((metricItem, index) => {
                  return (
                    <SelectItem key={index} value={metricItem.value}>
                      {metricItem.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          ) : (
            ''
          )}
        </div>
      </CardHeader>
      <CardContent className=" min-h-auto max-h-[400px] p-3 overflow-auto">
        {topProductsData.map((productItem, index) => (
          <div key={`product-${index}`}>
            <div
              key={`product-${index}`}
              className="flex  items-start gap-[9px] !font-inter py-4"
            >
              <div className="flex flex-col items-start gap-2 self-stretch w-4/5">
                <div className="text-[10px] font-normal leading-[10px] tracking-[-0.11px]">
                  {productItem.title}
                </div>
                <div
                  className=" flex overflow-hidden text-ellipsis align-self-stretch font-inter"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: '-0.154px',
                  }}
                >
                  {productItem.name}
                </div>
                <div className="flex items-center gap-[5px] w-full text-[11px]  leading-[12px] tracking-[-0.132px]">
                  {productItem.trending ? (
                    <div className="flex p-[2px_4px] items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path
                          d="M0.816667 7.5L0 6.68333L4.31667 2.3375L6.65 4.67083L9.68333 1.66667H8.16667V0.5H11.6667V4H10.5V2.48333L6.65 6.33333L4.31667 4L0.816667 7.5Z"
                          fill="#0A63E8"
                        />
                      </svg>
                      |
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="flex items-center gap-1">
                    <span className="font-normal">Margin: </span>
                    <span className="font-semibold ">
                      {formatValue(productItem.margin, 'margin')}
                    </span>
                    |
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-normal">Last 4W Margin :</span>
                    <span className="font-semibold ">
                      {productItem.last4WMargin
                        ? formatValue(productItem.last4WMargin, 'margin')
                        : '-'}
                    </span>
                    |
                  </div>
                  <div className="flex items-center gap-1 flex-nowrap">
                    <span className="font-normal "> Last 4W Sales: </span>
                    <span className="font-semibold ">
                      {' '}
                      {productItem.last4WSales
                        ? formatValue(productItem.last4WSales, 'sales')
                        : '-'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/5">
                <span className="text-[18px] font-semibold  tracking-[-0.198px]">
                  {formatValue(productItem.total, 'revenue')}
                </span>
              </div>
            </div>
            <div
              key={index}
              className=" h-[1px] border-b border-[#E9E9E9]"
            ></div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
