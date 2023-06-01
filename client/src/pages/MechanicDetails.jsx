import React, { useState, useEffect, useMemo } from "react";
import { FETCH_WRAPPER } from "../api";
import { useTable } from "react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AllTable from "../components/AllTable";

const MechanicDetails = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    (async () => {
      const users = await FETCH_WRAPPER("getmechanic");
      setUsersData(users.data?.result);
    })();
  }, []);

  return (
    <>
      <AllTable usersData={usersData} />
    </>
  );
};

export default MechanicDetails;
