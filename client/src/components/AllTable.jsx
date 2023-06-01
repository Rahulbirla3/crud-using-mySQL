

import React, { useState, useEffect, useMemo } from "react";
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

const AllTable = ({usersData}) => {
  
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
    []
  );

  console.log(usersData);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          {...getTableProps()}
          aria-label="simple table"
        >
          <TableHead>
            {headerGroups?.map((headerGroups) => (
              <TableRow {...headerGroups.getHeaderGroupProps}>
                {headerGroups.headers?.map((columns) => (
                  <TableCell {...columns.getHeaderProps()}>
                    {columns.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows?.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells?.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllTable;
