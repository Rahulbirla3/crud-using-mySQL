import React, { useState, useEffect, useMemo } from "react";
import { FETCH_WRAPPER } from "../api";
import { useTable } from "react-table";

const MechanicDetails = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    (async () => {
      const users = await FETCH_WRAPPER("getuser");
      setUsersData(users.data?.result);
    })();
  }, []);

  // react Table configuration
  const data = useMemo(() => usersData, [usersData]);

  const columns = useMemo(
    () => [
      {
        Header: "User Name",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Password",
        accessor: "password",
      },
      {
        Header: "Access Type",
        accessor: "accesstype",
      },
      {
        Header: "Phone Number",
        accessor: "number",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Date of Creation",
        accessor: "Date",
      },
    ],
    [usersData]
  );

  console.log(data);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, usersData });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps}>
              {headerGroups.headers?.map((columns) => (
                <th {...columns.getHeaderProps()}>
                  {columns.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows?.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells?.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MechanicDetails;
