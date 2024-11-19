import { useEffect } from "react";
import { userLogin, getUserProfile } from "../api/userModal";
import { redirectToPage } from "../utils/utils";

const Dashboard = () => {

  useEffect(() => {

    getUserDetails()
  }, [])


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
    <>Dashboard</>
  );
};

export default Dashboard;
