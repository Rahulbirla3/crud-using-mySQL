import React, { useEffect } from "react";
import {
  Button,
  Box,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FETCH_WRAPPER } from "../api";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { addApiData } from "../Redux/taskSlice";
import { toast } from "react-toastify";

const Tasks = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const accesstype = localStorage.getItem("accesstype");

  // function for store the data inside the store
  const getTask = async () => {
    try {
      const result = await FETCH_WRAPPER.get(`getTasks/${email}`, {
        headers: {
          Authorization: token,
        },
      });
      dispatch(addApiData(result.data?.result));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);
  // End function for store the data inside the store

  const onSubmit = async (data) => {
    const n = { email: email, ...data };
    console.log(n);

    try {
      const result = await FETCH_WRAPPER.post(
        "createTask",
        { email: email, ...data },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(result);
      if (!result) {
        return toast(result.data.msg);
      }
      getTask();
      return toast(result.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {accesstype !== "admin" ? (
        <Grid
          gap={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{ maxWidth: "300px", p: 4 }}>
              <Stack>
                <Typography>{email}</Typography>
                <TextField
                  id="outlined-error"
                  label="Title"
                  sx={{ my: 2 }}
                  {...register("title")}
                />
                <TextField
                  id="outlined-error"
                  label="Description"
                  {...register("description")}
                />
                <Button sx={{ my: 2, border: "2px solid green" }} type="submit">
                  Create Task
                </Button>
              </Stack>
            </Card>
          </Box>
        </Grid>
      ) : (
        ""
      )}
      {/* all Task list is created */}
      <TaskList />
    </>
  );
};

export default Tasks;
