import React, { useEffect, useState, useMemo } from "react";
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
  TableFooter,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts } from "../Redux/cartSlice";

const Cart = () => {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  console.log(email);

  // redux
  const dispatch = useDispatch();
  const {cardProductsArr}  = useSelector((store) => store.carts);

  // End redux

  useEffect(() => {
    try {
      (async () => {
        const result = await FETCH_WRAPPER.post("getcart", { email });
        if (result) {
          dispatch(cartProducts(result.data.result));
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);


  // Table data

  const data = useMemo(() => cardProductsArr, [cardProductsArr]);

  const columns = useMemo(
    () => [
      {
        Header: "Sno.",
        accessor: "sno",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Pro. Count",
        accessor: "count",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Date of Creation",
        accessor: "date",
      },
    ],
    []
  );


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // End Table data

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
          <TableFooter></TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;
