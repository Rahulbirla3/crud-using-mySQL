import React , {useState , useEffect} from "react";
import AllTable from "../components/AllTable";
import { FETCH_WRAPPER } from "../api";

const UserDetails = () => {

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
      (async () => {
        const users = await FETCH_WRAPPER("getuser");
        setUsersData(users.data?.result);
      })();
    }, []);

  return (
    <>
      <AllTable usersData={usersData} />
    </>
  );
};

export default UserDetails;
