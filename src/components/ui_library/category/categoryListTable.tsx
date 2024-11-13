import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { SquareChevronDown, SquareChevronUp } from 'lucide-react';
import TanStackTable, {
  CustomColumnDef,
  TableConfigData,
} from '../tanStackTable';

interface SubcategoryData {
  [category: string]: string[]; // Each category maps to an array of subcategory strings
}
// Utility function to get the current week of the year
const getCurrentWeekNumber = (): number => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.floor(diff / oneWeek) + 1;
};

// Generate data for 10 sampleCategories
const sampleCategories = [
  'Electronics',
  'Furniture',
  'Clothing',
  'Books',
  'Toys',
  'Sports Equipment',
  'Home Appliances',
  'Beauty Products',
  'Automotive',
  'Jewelry',
  'Garden Supplies',
  'Tools',
  'Stationery',
  'Pet Supplies',
  'Video Games',
  'Musical Instruments',
  'Office Supplies',
  'Health Supplements',
  'Grocery',
  'Baby Products',
  'Travel Accessories',
  'Watches',
  'Outdoor Gear',
  'Camping Equipment',
  'Fitness Equipment',
  'Craft Supplies',
  'Photography Equipment',
  'Art Supplies',
  'Gaming Consoles',
  'Smart Home Devices',
  'Cooking Utensils',
];

const SampleSubCategories: SubcategoryData = {
  Electronics: [
    'Mobile Phones',
    'Laptops',
    'Tablets',
    'Cameras',
    'Audio Devices',
  ],
  Furniture: [
    'Living Room Furniture',
    'Bedroom Furniture',
    'Office Furniture',
    'Outdoor Furniture',
    'Storage Solutions',
  ],
  Clothing: [
    "Men's Clothing",
    "Women's Clothing",
    "Children's Clothing",
    'Activewear',
    'Accessories',
  ],
  Books: ['Fiction', 'Non-Fiction', "Children's Books", 'Textbooks', 'E-books'],
  Toys: [
    'Action Figures',
    'Educational Toys',
    'Board Games',
    'Outdoor Toys',
    'Dolls',
  ],
  'Sports Equipment': [
    'Fitness Equipment',
    'Team Sports Gear',
    'Outdoor Sports Gear',
    'Water Sports Equipment',
    'Biking Gear',
  ],
  'Home Appliances': [
    'Kitchen Appliances',
    'Cleaning Appliances',
    'Laundry Appliances',
    'Heating & Cooling Appliances',
    'Smart Appliances',
  ],
  'Beauty Products': [
    'Skincare',
    'Makeup',
    'Haircare',
    'Fragrance',
    'Nail Care',
  ],
  Automotive: [
    'Car Accessories',
    'Motorcycle Accessories',
    'Tools & Equipment',
    'Car Care Products',
    'Tires & Wheels',
  ],
  Jewelry: ['Necklaces', 'Bracelets', 'Rings', 'Earrings', 'Watches'],
  'Garden Supplies': [
    'Plants',
    'Gardening Tools',
    'Outdoor Furniture',
    'Decor',
    'Pest Control',
  ],
  Tools: [
    'Power Tools',
    'Hand Tools',
    'Tool Storage',
    'Workbenches',
    'Measuring Tools',
  ],
  Stationery: [
    'Writing Supplies',
    'Office Supplies',
    'Notebooks',
    'Art Supplies',
    'Calendars',
  ],
  'Pet Supplies': [
    'Dog Supplies',
    'Cat Supplies',
    'Bird Supplies',
    'Small Animal Supplies',
    'Fish Supplies',
  ],
  'Video Games': [
    'Consoles',
    'Games',
    'Accessories',
    'VR Equipment',
    'Gaming Chairs',
  ],
  'Musical Instruments': [
    'Guitars',
    'Keyboards',
    'Drums',
    'Wind Instruments',
    'Accessories',
  ],
  'Office Supplies': [
    'Paper',
    'Writing Instruments',
    'Desk Accessories',
    'Storage Solutions',
    'Technology',
  ],
  'Health Supplements': [
    'Vitamins',
    'Minerals',
    'Herbal Supplements',
    'Protein Supplements',
    'Dietary Supplements',
  ],
  Grocery: [
    'Fruits & Vegetables',
    'Meat & Seafood',
    'Dairy',
    'Snacks',
    'Beverages',
  ],
  'Baby Products': ['Clothing', 'Toys', 'Feeding', 'Diapering', 'Safety'],
  'Travel Accessories': [
    'Luggage',
    'Travel Organizers',
    'Travel Gadgets',
    'Comfort Accessories',
    'Travel Guides',
  ],
  Watches: [
    'Luxury Watches',
    'Smart Watches',
    'Sports Watches',
    'Fashion Watches',
    'Kids Watches',
  ],
  'Outdoor Gear': [
    'Camping Gear',
    'Hiking Gear',
    'Fishing Gear',
    'Biking Gear',
    'Climbing Gear',
  ],
  'Camping Equipment': [
    'Tents',
    'Sleeping Gear',
    'Cooking Gear',
    'Outdoor Furniture',
    'Lighting',
  ],
  'Fitness Equipment': [
    'Cardio Equipment',
    'Strength Training Equipment',
    'Yoga Equipment',
    'Sports Equipment',
    'Exercise Accessories',
  ],
  'Craft Supplies': [
    'Sewing Supplies',
    'Drawing Supplies',
    'Painting Supplies',
    'Knitting & Crocheting Supplies',
    'DIY Kits',
  ],
  'Photography Equipment': [
    'Cameras',
    'Lenses',
    'Tripods',
    'Lighting Equipment',
    'Accessories',
  ],
  'Art Supplies': [
    'Drawing Supplies',
    'Painting Supplies',
    'Craft Supplies',
    'Calligraphy Supplies',
    'Model Making Supplies',
  ],
  'Gaming Consoles': [
    'Current Generation Consoles',
    'Retro Consoles',
    'Accessories',
    'Gaming Chairs',
    'Streaming Equipment',
  ],
  'Smart Home Devices': [
    'Smart Speakers',
    'Smart Lights',
    'Smart Thermostats',
    'Smart Security Cameras',
    'Smart Plugs',
  ],
  'Cooking Utensils': [
    'Cutlery',
    'Cookware',
    'Baking Tools',
    'Gadgets',
    'Storage Containers',
  ],
};

interface CategoryListTableFormatingData {
  [key: string]: {
    type: 'currency' | 'percentage' | 'number'; // e.g., "currency"
  };
}

const categoryListTableFormatingData: CategoryListTableFormatingData = {
  revenue: {
    type: 'currency',
  },
  orders: {
    type: 'number',
  },
  cost: {
    type: 'currency',
  },
  margin: {
    type: 'percentage',
  },
  cos: {
    type: 'percentage',
  },
};

const currency = '£';

const CategoryListTable = () => {
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [intialCategoryData, setIntialCategoryData] = useState<string[]>([]);
  const [intialSubCategoryData, setIntialSubCategoryData] =
    useState<SubcategoryData>({});
  const [tableRenderData, setTableRenderData] = useState<
    Record<string, unknown>[]
  >([]);
  const [tableConfig, setTableConfig] = useState<TableConfigData>({});
  // const [categoriesListTableData, setCategoriesListTableData] = useState<string[]>([])
  const [formatingData, setFormatingData] =
    useState<CategoryListTableFormatingData>({});
  const [tableColumns, setTableColumns] = useState<
    CustomColumnDef<Record<string, unknown>, unknown>[]
  >([]);

  useEffect(() => {
    let tempCategoryList = ['All Categories'];
    tempCategoryList = [...tempCategoryList, ...sampleCategories];
    setCategoriesList(tempCategoryList);
    setSelectedCategory('All Categories');
    setIntialCategoryData(sampleCategories);
    setIntialSubCategoryData(SampleSubCategories);
    setTableRenderData(generateCategoriesListTableData(sampleCategories));
    setFormatingData(categoryListTableFormatingData);
    setTableConfig(categoryTableConfigurationData);
    setTableColumns(categoryListTableColumns);
  }, []);

  const generateCategoriesListTableData = (
    data: string[]
  ): Record<string, unknown>[] => {
    const currentWeek = getCurrentWeekNumber();

    return data.map((item, index) => ({
      id: index,
      category: item,
      title: `Week ${currentWeek - 1}`, // Week title based on the current week
      cost: parseFloat((Math.random() * 3000).toFixed(2)), // Random cost for demonstration, formatted to 2 decimal places
      margin: parseFloat((Math.random() * 100).toFixed(2)), // Random margin percentage, formatted to 2 decimal places
      sellRate: parseFloat((Math.random() * 3000).toFixed(2)), // Random sell rate for demonstration, formatted to 2 decimal places
      orders: Math.floor(Math.random() * 2000), // Random orders for demonstration
      cos: Math.floor(Math.random() * 100), // Random COS for demonstration, formatted to 2 decimal places
      roi: parseFloat((Math.random() * 100).toFixed(2)), // Random ROI for demonstration, formatted to 2 decimal places
      revenue: parseFloat((Math.random() * 3000).toFixed(2)), // Random revenue for demonstration, formatted to 2 decimal places
      marginFlag: Math.random() < 0.5, // Random boolean for marginFlag
      childData: Array.from({ length: 3 }, (_, i) => ({
        title: `Week ${currentWeek - (i + 2)}`, // Week of the year - 1, - 2, - 3
        cost: parseFloat((Math.random() * 3000).toFixed(2)), // Random cost for demonstration, formatted to 2 decimal places
        margin: parseFloat((Math.random() * 100).toFixed(2)), // Random margin percentage, formatted to 2 decimal places
        sellRate: parseFloat((Math.random() * 3000).toFixed(2)), // Random sell rate for demonstration, formatted to 2 decimal places
        orders: Math.floor(Math.random() * 2000), // Random orders for demonstration
        cos: Math.floor(Math.random() * 100), // Random COS for demonstration, formatted to 2 decimal places
        roi: parseFloat((Math.random() * 100).toFixed(2)), // Random ROI for demonstration, formatted to 2 decimal places
        revenue: parseFloat((Math.random() * 3000).toFixed(2)), // Random revenue for demonstration, formatted to 2 decimal places
        marginFlag: Math.random() < 0.5, // Random boolean for marginFlag
      })),
    }));
  };

  const generateSubCategoriesListTableData = (
    data: string[]
  ): Record<string, unknown>[] => {
    const currentWeek = getCurrentWeekNumber();

    return data.map((item, index) => ({
      id: index,
      category: item,
      title: `Week ${currentWeek - 1}`, // Week title based on the current week
      cost: parseFloat((Math.random() * 3000).toFixed(2)), // Random cost for demonstration, formatted to 2 decimal places
      margin: parseFloat((Math.random() * 100).toFixed(2)), // Random margin percentage, formatted to 2 decimal places
      sellRate: parseFloat((Math.random() * 3000).toFixed(2)), // Random sell rate for demonstration, formatted to 2 decimal places
      orders: Math.floor(Math.random() * 2000), // Random orders for demonstration
      cos: Math.floor(Math.random() * 100), // Random COS for demonstration, formatted to 2 decimal places
      roi: parseFloat((Math.random() * 100).toFixed(2)), // Random ROI for demonstration, formatted to 2 decimal places
      revenue: parseFloat((Math.random() * 3000).toFixed(2)), // Random revenue for demonstration, formatted to 2 decimal places
      marginFlag: Math.random() < 0.5, // Random boolean for marginFlag
      childData: Array.from({ length: 3 }, (_, i) => ({
        title: `Week ${currentWeek - (i + 2)}`, // Week of the year - 1, - 2, - 3
        cost: parseFloat((Math.random() * 3000).toFixed(2)), // Random cost for demonstration, formatted to 2 decimal places
        margin: parseFloat((Math.random() * 100).toFixed(2)), // Random margin percentage, formatted to 2 decimal places
        sellRate: parseFloat((Math.random() * 3000).toFixed(2)), // Random sell rate for demonstration, formatted to 2 decimal places
        orders: Math.floor(Math.random() * 2000), // Random orders for demonstration
        cos: Math.floor(Math.random() * 100), // Random COS for demonstration, formatted to 2 decimal places
        roi: parseFloat((Math.random() * 100).toFixed(2)), // Random ROI for demonstration, formatted to 2 decimal places
        revenue: parseFloat((Math.random() * 3000).toFixed(2)), // Random revenue for demonstration, formatted to 2 decimal places
        marginFlag: Math.random() < 0.5, // Random boolean for marginFlag
      })),
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatValue = (value: any, key: any) => {
    let modifiedValue = value.toString();

    if (
      formatingData?.[key]?.type === 'currency' ||
      formatingData?.[key]?.type === 'number'
    ) {
      modifiedValue = parseFloat(modifiedValue).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });

      // Prepend currency symbol if type is currency
      if (formatingData?.[key]?.type === 'currency') {
        modifiedValue = currency + modifiedValue;
      }
    } else if (formatingData?.[key]?.type === 'percentage') {
      modifiedValue =
        parseFloat(modifiedValue).toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }) + '%';
    }

    return modifiedValue;
  };

  const categoryListTableColumns: CustomColumnDef<
    Record<string, unknown>,
    unknown
  >[] = [
      {
        accessorKey: 'category',
        header: 'Categories',
        cssClass: 'border-r',
        type: 'string',
        cell: ({ row, getValue }) => {
          // console.log("getValue: ", getValue)
          return (
            <div
              style={{
                // Since rows are flattened by default,
                // we can use the row.depth property
                // and paddingLeft to visually indicate the depth
                // of the row
                paddingLeft: `${row.depth * 2}rem`,
              }}
            >
              <div className="flex justify-between">
                {row.getCanExpand() ? (
                  <>
                    <span> {getValue()}</span>
                    <button
                      className="p-0 border-none !outline-none"
                      {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: 'pointer' },
                      }}
                    >
                      {row.getIsExpanded() ? (
                        <SquareChevronDown size={'20px'} />
                      ) : (
                        <SquareChevronUp size={'20px'} />
                      )}
                    </button>
                  </>
                ) : (
                  row.original.title
                )}{' '}
              </div>
            </div>
          );
        },
        enableSorting: false,
      },
      // { accessorKey: "title", header: "Title", cssClass: "", type: "number" },
      {
        accessorKey: 'cost',
        header: 'Cost',
        cssClass: '',
        type: 'number',
        enableSorting: true,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      // 'www'
      {
        accessorKey: 'margin',
        header: 'Margin %',
        cssClass: '',
        type: 'number',
        enableSorting: false,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      {
        accessorKey: 'revenue',
        header: 'Revenue',
        cssClass: '',
        type: 'number',
        enableSorting: false,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      {
        accessorKey: 'orders',
        header: 'Orders',
        cssClass: '',
        type: 'number',
        enableSorting: true,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      {
        accessorKey: 'cos',
        header: 'CoS',
        cssClass: '',
        type: 'number',
        enableSorting: false,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
    ];

  const subCategoryListTableColumns: CustomColumnDef<
    Record<string, unknown>,
    unknown
  >[] = [
      {
        accessorKey: 'category',
        header: 'Categories',
        cssClass: 'border-r',
        type: 'string',
        cell: ({ row, getValue }) => {
          // console.log("getValue: ", getValue)
          return (
            <div
              style={{
                // Since rows are flattened by default,
                // we can use the row.depth property
                // and paddingLeft to visually indicate the depth
                // of the row
                paddingLeft: `${row.depth * 2}rem`,
              }}
            >
              <div className="flex justify-between">
                {row.getCanExpand() ? (
                  <>
                    <span> {getValue()}</span>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="8"
                        viewBox="0 0 15 8"
                        fill="none"
                      >
                        <path
                          d="M4.0875 8L3.0375 6.97248L5.30625 4.73395H0V3.26606H5.30625L3.0375 1.02752L4.0875 0L8.175 4L4.0875 8ZM8.25 7.66973V6.20184H15V7.66973H8.25ZM8.25 1.79817V0.330275H15V1.79817H8.25ZM10.5 4.73395V3.26606H15V4.73395H10.5Z"
                          fill="#65A3FF"
                        />
                      </svg>
                    </button>
                    <button
                      className="p-0 border-none !outline-none"
                      {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: 'pointer' },
                      }}
                    >
                      {row.getIsExpanded() ? (
                        <SquareChevronDown size={'20px'} />
                      ) : (
                        <SquareChevronUp size={'20px'} />
                      )}
                    </button>
                  </>
                ) : (
                  row.original.title
                )}{' '}
              </div>
            </div>
          );
        },
        enableSorting: false,
      },
      // { accessorKey: "title", header: "Title", cssClass: "", type: "number" },
      {
        accessorKey: 'cost',
        header: 'Cost',
        cssClass: '',
        type: 'number',
        enableSorting: true,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      // 'www'
      {
        accessorKey: 'margin',
        header: 'Margin %',
        cssClass: '',
        type: 'number',
        enableSorting: false,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      {
        accessorKey: 'revenue',
        header: 'Revenue',
        cssClass: '',
        type: 'number',
        enableSorting: false,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      {
        accessorKey: 'orders',
        header: 'Orders',
        cssClass: '',
        type: 'number',
        enableSorting: true,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
      {
        accessorKey: 'cos',
        header: 'CoS',
        cssClass: '',
        type: 'number',
        enableSorting: false,
        cell: ({ getValue, cell }) => {
          return formatValue(getValue(), cell.column.id);
        },
      },
    ];

  const customSortingFunction = (
    updatedSortedData: { id: string; desc: boolean }[]
  ) => {
    console.log('inside customeSortingFunction: ', updatedSortedData);
  };

  const categoryTableConfigurationData: TableConfigData = {
    isBorder: true,
    expandRowData: {
      enableExpand: true,
      expandRowsKey: 'childData',
    },
    heightValue: "412",
    sortingData: {
      enableSorting: true,
      initialSortingData: [
        {
          id: 'cost',
          desc: false,
        },
      ],
      customSortingFunction,
    },
    columnPinningData: {
      enablePinning: true,
      data: {
        left: ['categories'],
        right: [],
      },
    },
    paginationData: {
      enablePagination: true,
      data: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  };

  const subCategoryTableConfigurationData: TableConfigData = {
    isBorder: true,
    expandRowData: {
      enableExpand: true,
      expandRowsKey: 'childData',
    },
    sortingData: {
      enableSorting: true,
      initialSortingData: [
        {
          id: 'cost',
          desc: false,
        },
      ],
      customSortingFunction,
    },
    columnPinningData: {
      enablePinning: true,
      data: {
        left: ['categories'],
        right: [],
      },
    },
    paginationData: {
      enablePagination: true,
      data: {
        pageIndex: 0,
        pageSize: 2,
      },
    },
  };

  const handleCategoryChange = (value: string) => {
    let data = [];
    if (value == 'All Categories') {
      data = generateCategoriesListTableData(intialCategoryData);
      setTableConfig(categoryTableConfigurationData);
      setTableColumns(categoryListTableColumns);
    } else {
      const subCategoryData = intialSubCategoryData[value];
      data = generateSubCategoriesListTableData(subCategoryData);
      setTableConfig(subCategoryTableConfigurationData);
      setTableColumns(subCategoryListTableColumns);
    }
    setTableRenderData(data);
  };

  return (
    <div>
      <div className="flex">
        {categoriesList.length > 0 ? (
          <div className="flex w-44 items-center gap-[14px]  p-1 rounded-[4px]  border border-[#B3B3B3] bg-[#FFF]">
            <Select
              defaultValue={selectedCategory}
              onValueChange={(value) => {
                handleCategoryChange(value);
              }}
            >
              <SelectTrigger className="flex items-center gap-[14px] p-1 rounded-l-[4px] rounded-r-none border border-[#B3B3B3] bg-[#FFF]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {categoriesList.map((categoryItem, index) => {
                  return (
                    <SelectItem
                      key={index}
                      value={categoryItem}
                      className={`${categoryItem == selectedCategory ? 'font-semibold ' : ''}`}
                    >
                      {categoryItem}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className="mt-4">
        <TanStackTable
          columns={tableColumns}
          data={tableRenderData}
          tableConfigData={tableConfig}
        />
      </div>
    </div>
  );
};

export default CategoryListTable;
