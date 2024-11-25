import { useEffect, useState } from 'react';
import { userLogin, getUserProfile } from '../api/userModal';
import { redirectToPage } from '../utils/utils';
import TanStackTable, {
  CustomColumnDef,
  TableConfigData,
} from '../components/ui_library/tanStackTable';
import Icon from '../components/ui/icon';
import { useNavigate } from 'react-router-dom';
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
  useEffect(() => {
    setTableData(userData);
    setTableColumnsData(userTblColumns);
    setTableConfigData(tableConfigurationData);
  }, []);
  // useEffect(() => {

  //   getUserDetails()
  // }, [])
  const userData = [
    {
      projectId: 1,
      projectName: 'project_name',
      description: 'project description',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 2,
      projectName: 'project_name',
      description: 'project description',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 3,
      projectName: 'new',
      description: 'project description',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 4,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 5,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
    {
      projectId: 6,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 7,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 8,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
    {
      projectId: 9,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 10,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 11,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
    {
      projectId: 12,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 13,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 14,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
    {
      projectId: 15,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
      deleteIcon: 'delete',
    },
  ];
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
            navigate(`/projectGenerator/${row.original.projectId}`)
          }
          className="flex items-center space-x-2 hover:underline"
        >
          <Icon iconName="edit" className="h-3.5 w-3.5" />
          <Icon iconName="download" className="h-3.5 w-3.5" />
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
        pageSize: 20,
        autoResetPageIndex: true,
      },
    },
  };
 
  const getUserDetails = async () => {
    const email = localStorage.getItem('user_email');
    console.log('email in localstorage: ', email);
    if (!email) {
      redirectToPage('/login', false);
    } else {
      const localstorage_userDetails = localStorage.getItem('user_details');
      console.log('localstorage_userDetails :', localstorage_userDetails);

      if (!localstorage_userDetails) {
        const userDetails = await getUserProfile(email);
        console.log('insdie getUserDetails :', userDetails);
        if (userDetails) {
          localStorage.setItem('user_details', JSON.stringify(userDetails));
        } else {
          redirectToPage('/login', false);
        }
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

   const filteredData = userData.filter(
     (item) =>
       item.projectName.toLowerCase().includes(value) 
   );
   // const filteredData = skuList.filter((item) =>
   //   Object.values(item).some((searchValue) =>
   //     searchValue.toString().toLowerCase().includes(value)
   //   )
   // );
   if (filteredData.length === 0 && value !== '') {
     setError('Search term does not match SKU ID or Title');
     setTableData(userData);
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
          onClick={() =>
            navigate(`/projectGenerator`)
          }
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
