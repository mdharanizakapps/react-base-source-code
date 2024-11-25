import { getUserProfile } from '../api/userModal';
import { redirectToPage } from '../utils/utils';
import { useEffect, useState } from 'react';
import TanStackTable, {
  CustomColumnDef,
  TableConfigData,
} from '../components/ui_library/tanStackTable';
import Icon from '../components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { getUserEmail } from '../api/axiosInstance';
import { getProjectsByUserApi } from '../api/generateProjectModal';
import { Button } from '../components/ui/button';
const Dashboard = () => {
  const navigate = useNavigate();
  const [tableColumnsData, setTableColumnsData] = useState<
    CustomColumnDef<Record<string, unknown>, unknown>[]
  >([]);
  const [tableData, setTableData] = useState<Record<string, unknown>[]>([]);
  const [tableConfigData, setTableConfigData] = useState<TableConfigData>({});
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<string>('');
  const userTblColumns: CustomColumnDef<Record<string, unknown>, unknown>[] = [
    { header: 'Project ID', accessorKey: 'projectId', type: 'number' },
    {
      header: 'Project Name',
      accessorKey: 'projectName',
      type: 'string',
    },
    {
      header: 'Description',
      accessorKey: 'description',
      type: 'string',
    },

    {
      header: 'Project Status',
      accessorKey: 'projectStatus',
      type: 'string',
    },
    {
      header: 'Action',
      accessorKey: 'iconName',
      cell: ({ row }) => (
        <button
          onClick={() =>
            navigate(`/projectgenerator/${row.original.projectId}`)
          }
          className="flex items-center space-x-2 hover:underline"
        >
          <Icon iconName="edit" className="h-3.5 w-3.5" />
        </button>
      ),
    },
  ];

  const tableConfigurationData: TableConfigData = {
    isBorder: true,
    paginationData: {
      enablePagination: true,
      data: {
        pageIndex: 1,
        pageSize: 10,
        autoResetPageIndex: true,
      },
    },
  };
  useEffect(() => {
    // setTableData(userData);
    setTableColumnsData(userTblColumns);
    setTableConfigData(tableConfigurationData);
    getProjectsByUser();
  }, []);

  const getProjectsByUser = async () => {
    const email = getUserEmail();
    if (!email) {
      redirectToPage('/login', false);
    } else {
      const getProjectsByUserApiRes = await getProjectsByUserApi(email);
      if (getProjectsByUserApiRes.status == 200) {
        setTableData(getProjectsByUserApiRes.data.userData);
      }
    }

    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: 'http://localhost:3000/ui-library/api/user/emily.johnson@gmail.com',
    //   headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzE5MzIxMDgsImV4cCI6MTczMjAxODUwOH0.NM_Au3_t-tF8AChZ_mThFdSr2A_1as50z4vCQ6d43oo'
    //   },
    //   data: data
    // };

    // axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const handleSearch = (event: any) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    const filteredData = tableData.filter((item) =>
      item.projectName.toLowerCase().includes(value)
    );
    // const filteredData = skuList.filter((item) =>
    //   Object.values(item).some((searchValue) =>
    //     searchValue.toString().toLowerCase().includes(value)
    //   )
    // );
    if (filteredData.length === 0 && value !== '') {
      setError('Search term does not match SKU ID or Title');
      setTableData(filteredData);
    } else {
      setError('');
      setTableData(filteredData);
    }
  };
  return (
    <div className="flex gap-4 flex-col mt-2 p-3">
      <div className="flex justify-between">
        <div>
          <input
            value={search}
            className="h-7 w-[229px] p-[9px_8px] rounded-[2px] border border-[#A6A6A6] bg-white"
            type="search"
            placeholder="Search SKU Id / Title"
            onChange={handleSearch}
          ></input>
        </div>
        <Button
          variant={'primary'}
          size={'sm'}
          onClick={() => navigate(`/projectGenerator`)}
        >
          Create New
        </Button>
      </div>
      <TanStackTable
        data={tableData}
        columns={tableColumnsData}
        tableConfigData={tableConfigData}
      />
    </div>
  );
};

export default Dashboard;
