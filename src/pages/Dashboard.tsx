import { getUserProfile } from "../api/userModal";
import { redirectToPage } from "../utils/utils";
import { useEffect, useState } from "react";
import TanStackTable, { CustomColumnDef, TableConfigData } from "../components/ui_library/tanStackTable";
import Icon from "../components/ui/icon";
import { useNavigate } from "react-router-dom";
import { getUiUserId, getUserEmail } from "../api/axiosInstance";
import { getProjectsByUserApi } from "../api/generateProjectModal";
const Dashboard = () => {

  const navigate = useNavigate();
  const [tableColumnsData, setTableColumnsData] = useState<
    CustomColumnDef<Record<string, unknown>, unknown>[]
  >([]);
  const [tableData, setTableData] = useState<Record<string, unknown>[]>([]);
  const [tableConfigData, setTableConfigData] = useState<TableConfigData>({});



  useEffect(() => {

    getUserDetails()
    // setTableData(userData);
    setTableColumnsData(userProjectTblColumns);
    setTableConfigData(userProjectTblConfig);


    getProjectsByUser()

  }, [])


  const getProjectsByUser = async () => {
    console.log("inside getProjectsByUser");
    const email = getUserEmail()
    if (!email) {
      redirectToPage('/login', false);
    } else {
      const getProjectsByUserApiRes = await getProjectsByUserApi(email)
      console.log("getProjectsByUser - getProjectsByUserApiRes :", getProjectsByUserApiRes)
      if (getProjectsByUserApiRes.status == 200) {
        console.log("getProjectsByUser - 200")
        setTableData(getProjectsByUserApiRes.data.userData);

      }

    }
  }

  const userData = [
    {
      projectId: 1,
      projectName: 'project_name',
      description: 'project description',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
    {
      projectId: 2,
      projectName: 'project_name',
      description: 'project description',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
    {
      projectId: 3,
      projectName: 'new',
      description: 'project description',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
    {
      projectId: 4,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
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
    },
    {
      projectId: 7,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
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
    },
    {
      projectId: 10,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
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
    },
    {
      projectId: 13,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
    {
      projectId: 14,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
    },
    {
      projectId: 15,
      projectName: 'deva_project',
      description: 'testing - deva_project',
      projectStatus: 'Submitted',
      iconName: 'edit',
    },
  ];

  const userProjectTblColumns: CustomColumnDef<Record<string, unknown>, unknown>[] = [
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
          onClick={() => navigate(`/projectgenerator/${row.original.projectId}`)}
          className="flex items-center space-x-2 hover:underline"
        >
          <Icon
            iconName="edit"
            className="h-3.5 w-3.5"
          />
        </button>
      ),
    },
  ];

  const userProjectTblConfig: TableConfigData = {
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

  const getUserDetails = async () => {
    const email = localStorage.getItem("user_email")
    console.log("email in localstorage: ", email)
    if (!email) {
      redirectToPage('/login', false);
    } else {
      const localstorage_userDetails = localStorage.getItem("user_details")
      console.log("localstorage_userDetails :", localstorage_userDetails)

      if (!localstorage_userDetails) {
        const userDetails = await getUserProfile(email)
        console.log("insdie getUserDetails :", userDetails)
        if (userDetails) {
          localStorage.setItem("user_details", JSON.stringify(userDetails))
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

  }


  return (
    <div className="p-2">
      <TanStackTable
        data={tableData}
        columns={tableColumnsData}
        tableConfigData={tableConfigData}
      />
    </div>);
};

export default Dashboard;
