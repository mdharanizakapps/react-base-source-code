import { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../ui/card';

import TanStackTable from '../tanStackTable';

import {
  ColumnDef as BaseColumnDef,
  SortingState,
  ColumnPinningState,
} from '@tanstack/react-table';
import { GetBySuppliersRequest } from '../../../type/data/dashboard/dashboard';
import { getBySuppliersData } from '../../../api/DashboardModal';

export interface BySupplierTableColumns {
  supplierName: string;
  orders: number;
  revenue: number;
  cost: number;
}

const tableConfigurationData: TableConfigData = {
  isBorder: false,
  heightValue:'300'
};


type CustomColumnDef<TData, TValue> = BaseColumnDef<TData, TValue> & {
  cssClass?: string;
  type?: string;
};

interface TableConfigData {
  isBorder?: boolean;
  expandRowData?: ExpandRowsDef;
  pinningData?: PinningData;
  sortingData?: SortingData;
  heightValue?: string;
}

interface ExpandRowsDef {
  enableExpand: boolean;
  expandRowsKey: string;
}

interface PinningData {
  enablePinning: boolean;
  data: ColumnPinningState;
}

interface SortingData {
  enableSorting: boolean;
  initialSortingData: SortingState;
  customSortingFunction: (
    updatedSortedData: { id: string; desc: boolean }[]
  ) => void; // Function that takes sorting state
}

interface BySuppliersFormattingData {
  [key: string]: {
    type: string; // e.g., "currency"
  };
}

const bySuppliersFormatingTemplate: BySuppliersFormattingData = {
  revenue: {
    type: 'currency',
  },
  orders: {
    type: 'number',
  },
  cost: {
    type: 'currency',
  },
};

const currency = '£';

const BySupplierTable = () => {
  const [tableColumnsData, setTableColumnsData] = useState<
    CustomColumnDef<BySupplierTableColumns, unknown>[]
  >([]);
  const [tableData, setTableData] = useState<BySupplierTableColumns[]>([]);
  const [tableConfigData, setTableConfigData] = useState<TableConfigData>({});
  const [bySuppliersFormatingData, setBySuppliersFormatingData] =
    useState<BySuppliersFormattingData | null>(null);

  useEffect(() => {
    setTableConfigData(tableConfigurationData);
    setTableColumnsData(bySupplierTableColumns);
    // setTableData(bySupplierTableData)
    getBySupplierApiCall();
    setBySuppliersFormatingData(bySuppliersFormatingTemplate);
  }, []);
  const bySupplierTableColumns: CustomColumnDef<
    BySupplierTableColumns,
    unknown
  >[] = [
    { accessorKey: 'supplierName', header: 'Supplier', type: 'string' },
    {
      accessorKey: 'orders',
      header: 'Orders',
      cell: ({ getValue, cell }) => {
        return formatValue(getValue(), cell.column.id);
      },
    },
    {
      accessorKey: 'revenue',
      header: 'Revenue',
      cell: ({ getValue, cell }) => {
        return formatValue(getValue(), cell.column.id);
      },
    },
    {
      accessorKey: 'cost',
      header: 'Cost',
      cell: ({ getValue, cell }) => {
        return formatValue(getValue(), cell.column.id);
      },
    },
  ];

  const getBySupplierApiCall = async () => {
    try {
      const payload: GetBySuppliersRequest = {
        clientName: 'diy',
        from: '2024-05-17',
        to: '2024-07-17',
      };
      const response = await getBySuppliersData(payload);
      setTableData(response.data.data);
    } catch (error) {
      console.log('Error in getOverviewDataApiCall: ', error);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatValue = (
    value: any,
    key: string,
    currency: string = '£'
  ): string => {
    // Convert to float once
    const modifiedValue: number = parseFloat(value);

    // Check for NaN (not a number) to handle cases where conversion fails
    if (isNaN(modifiedValue)) {
      return value.toString(); // Return the original value as a string if conversion fails
    }

    // Formatting options for toLocaleString
    const formatOptions: Intl.NumberFormatOptions = {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    };

    // Format number and add suffix if applicable
    const formattingType = bySuppliersFormatingData?.[key]?.type;

    if (formattingType === 'currency' || formattingType === 'number') {
      let formattedValue: string;

      if (modifiedValue >= 1000000) {
        formattedValue =
          (modifiedValue / 1000000).toLocaleString(undefined, formatOptions) +
          'M'; // Add M for millions
      } else if (modifiedValue >= 1000) {
        formattedValue =
          (modifiedValue / 1000).toLocaleString(undefined, formatOptions) + 'K'; // Add K for thousands
      } else {
        formattedValue = modifiedValue.toLocaleString(undefined, formatOptions); // Regular formatting for numbers less than 1000
      }

      // Prepend currency symbol if type is currency
      if (formattingType === 'currency') {
        formattedValue = currency + formattedValue;
      }

      return formattedValue;
    } else if (formattingType === 'percentage') {
      return modifiedValue.toLocaleString(undefined, formatOptions) + '%';
    }

    return value.toString(); // Return original if no format matches
  };

  return (
    <Card className="w-full rounded-[6px] border border-[#DDD] bg-white  ">
      <CardHeader className="py-5 px-2 flex flex-row bg-[#F8F9FA] justify-between items-center rounded-[6px]">
        <CardTitle className="text-black text-[18px] font-semibold leading-[18px] tracking-[-0.198px">
          By Supplier
        </CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col overflow-auto ">
        <TanStackTable
          columns={tableColumnsData}
          data={tableData}
          tableConfigData={tableConfigData}
        />
        {/* 
                <TanStackTable
                    columns={categoryAccSortTableColumns}
                    data={categoryAccSortTableData}
                    tableConfigurationData={tableConfigurationData}

                /> */}
      </CardContent>
    </Card>
  );
};

export default BySupplierTable;
