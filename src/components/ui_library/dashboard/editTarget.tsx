import { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import TanStackTable, {
  CustomColumnDef,
  TableConfigData,
} from '../tanStackTable';
import { Row } from '@tanstack/react-table';


// Define types for the data
interface MonthlyRange {
  year: number;
  month: string;
  target: number;
  isEditable: boolean;
}

interface MonthlyRangeDatum {
  id: number;
  name: string;
  monthlyRange: MonthlyRange[];
}

interface EditTargetData {
  monthlyRangeData: MonthlyRangeDatum[];
  lastUpdatedAt: string;
}

const EditTarget = () => {
  // Handle target edits
  const handleEditTarget = (
    rowIndex: number,
    monthIndex: number,
    newValue: number
  ) => {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex].monthlyRange[monthIndex] = {
        ...updatedData[rowIndex].monthlyRange[monthIndex],
        target: newValue,
      };
      return updatedData;
    });
  };

  const renderEditableCell = (
    row: Row<MonthlyRangeDatum>, // Adjust type based on your data structure
    monthIndex: number,
    handleEditTarget: (
      rowIndex: number,
      monthIndex: number,
      newValue: number
    ) => void
  ) => {
    const target = row.original.monthlyRange[monthIndex].target;
    const isEditable = row.original.monthlyRange[monthIndex].isEditable;

    return isEditable ? (
      <input
        value={target}
        onChange={(e) =>
          handleEditTarget(row.index, monthIndex, Number(e.target.value))
        }
        className="w-24 rounded border border-[#6E6E6E] bg-[#FFF] p-1"
      />
    ) : (
      target
    );
  };

  const productTableColumns: CustomColumnDef<
    Record<string, unknown>,
    unknown
  >[] = [
      {
        header: 'ProjectGenerator',
        accessorKey: 'name', // Column to show category names
      },
      {
        header: 'Jan',
        cell: ({ row }) => renderEditableCell(row, 0, handleEditTarget),
      },
      {
        header: 'Feb',
        cell: ({ row }) => renderEditableCell(row, 1, handleEditTarget),
      },
      {
        header: 'Mar',
        cell: ({ row }) => renderEditableCell(row, 2, handleEditTarget),
      },
      {
        header: 'Apr',
        cell: ({ row }) => renderEditableCell(row, 3, handleEditTarget),
      },
      {
        header: 'May',
        cell: ({ row }) => renderEditableCell(row, 4, handleEditTarget),
      },
      {
        header: 'Jun',
        cell: ({ row }) => renderEditableCell(row, 5, handleEditTarget),
      },
      {
        header: 'Jul',
        cell: ({ row }) => renderEditableCell(row, 6, handleEditTarget),
      },
      {
        header: 'Aug',
        cell: ({ row }) => renderEditableCell(row, 7, handleEditTarget),
      },
      {
        header: 'Sep',
        cell: ({ row }) => renderEditableCell(row, 8, handleEditTarget),
      },
      {
        header: 'Oct',
        cell: ({ row }) => renderEditableCell(row, 9, handleEditTarget),
      },
      {
        header: 'Nov',
        cell: ({ row }) => renderEditableCell(row, 10, handleEditTarget),
      },
      {
        header: 'Dec',
        cell: ({ row }) =>
          renderEditableCell(row as Row<MonthlyRangeDatum>, 11, handleEditTarget),
      },
    ];

  const tableConfigurationData: TableConfigData = {
    isBorder: true,
    // paginationData: {
    //     enablePagination: true,
    //     data: {
    //         pageIndex: 1,
    //         pageSize: 10,
    //         autoResetPageIndex: true
    //     }

    // }
  };

  const [originalData, setOriginalData] = useState<EditTargetData>();
  const [tableColumnsData, setTableColumnsData] = useState<
    CustomColumnDef<Record<string, unknown>, unknown>[]
  >([]);
  const [tableData, setTableData] = useState<Record<string, unknown>[]>([]);
  const [tableConfigData, setTableConfigData] = useState<TableConfigData>({});

  useEffect(() => {
    const originalEditTargetData: EditTargetData = {
      monthlyRangeData: generateMonthlyRangeData(categories),
      lastUpdatedAt: new Date().toISOString(),
    };

    // console.log("edit targt data: ", JSON.stringify(data, null, 2));
    setOriginalData(originalEditTargetData);
    setTableData(originalEditTargetData.monthlyRangeData);
    setTableColumnsData(productTableColumns);
    setTableConfigData(tableConfigurationData);
  }, []);

  console.log('tableData: ', tableData);

  const categories = [
    'Timber',
    'Insulation',
    'Plumbing',
    'Electrical',
    'Flooring',
    'Roofing',
    'Doors',
    'Windows',
    'Paint',
    'Tools',
    'Lighting',
    'Cabinets',
    'Countertops',
    'HVAC',
    'Gardening',
    'Fencing',
    'Masonry',
    'Siding',
    'Fasteners',
    'Drywall',
  ];

  const generateMonthlyRangeData = (
    categories: string[]
  ): MonthlyRangeDatum[] => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-indexed (0 = January, 11 = December)

    return categories.map((name, index) => ({
      id: index + 1,
      name,
      monthlyRange: Array.from({ length: 12 }, (_, monthIndex) => {
        const isEditable = monthIndex >= currentMonth && 2024 >= currentYear;
        return {
          year: 2024,
          month: new Date(2024, monthIndex).toLocaleString('default', {
            month: 'short',
          }),
          target: Math.floor(100000 + Math.random() * 900000), // Random 6-digit target
          isEditable,
        };
      }),
    }));
  };

  return (
    <>
      <TanStackTable
        columns={tableColumnsData}
        data={tableData}
        tableConfigData={tableConfigData}
      />
      <div className="flex py-2 px-4 justify-between items-center">

        <span
          className="text-[#181818] text-[12px] font-normal leading-[150%]"
          style={{ letterSpacing: '-0.132px' }}
        >
          Last updated: 23 Aug 2024
        </span>
        <div className="flex items-center gap-9">
          <Button>Cancel</Button>
          <Button variant="primary" size={'sm'}>
            Save
          </Button>
        </div>
      </div>

    </>
    // <Card className=" w-full  frounded-[6px] border border-[#DDD] bg-white">
    //   {/* <CardHeader className="p-5 items-start text-[#0C0C0C] text-[14px] font-semibold leading-[150%]">
    //             Edit Target
    //         </CardHeader> */}
    //   <CardContent className="">
    //     <TanStackTable
    //       columns={tableColumnsData}
    //       data={tableData}
    //       tableConfigData={tableConfigData}
    //     />
    //   </CardContent>
    //   <CardFooter className="flex py-2 px-4 justify-between items-center">
    //     <span
    //       className="text-[#181818] text-[12px] font-normal leading-[150%]"
    //       style={{ letterSpacing: '-0.132px' }}
    //     >
    //       Last updated: 23 Aug 2024
    //     </span>

    //     <div className="flex items-center gap-9">
    //       <Button>Cancel</Button>
    //       <Button variant="primary" size={'sm'}>
    //         Save
    //       </Button>
    //     </div>
    //   </CardFooter>
    // </Card>
  );
};

export default EditTarget;
