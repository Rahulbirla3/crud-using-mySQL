import React, { useState } from "react";
import { Button, Box, Card, Stack, TextField, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { FETCH_WRAPPER } from "./../api/index";
import { useDispatch } from "react-redux";
import { addApiData, getTask } from "../Redux/taskSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// for notification
import { toast } from "react-toastify";
// for notification
const CardButton = ({ val }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [likeTask, setlikeTask] = useState(false);
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();

  //   get the data
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
  //   get the data

  const onSubmit = async (data) => {
    const obj = { sno: val.sno, ...data };
    console.log("42", obj);
    try {
      const result = await FETCH_WRAPPER.put(
        "editTask",
        { ...obj },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (!result) return console.log(result);
      toast("success");
      // store data inside the store
      getTask();
      setIsEdit(!isEdit);
      //End store data inside the store
    } catch (error) {
      console.log(error);
    }
  };

  //   delete the card

  const handleDelete = async (val) => {
    console.log(val.sno);
    try {
      const data = await FETCH_WRAPPER.delete(`deleteTask/${val.sno}`);
      console.log(data);
      if (!data) {
        toast("data not submitted");
      }
      toast("data Deleted successfuly");
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  // like the task
  const likeTaskFun = async (bool) => {
    let obj = { ...val, sno: val.sno, liketask: bool };
    try {
      const result = await FETCH_WRAPPER.put(
        "editTask",
        { ...obj },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // console.log("rsult", result);
      if (!result) return console.log(result);
      toast("success");
      // store data inside the store
      getTask();
      //End store data inside the store
      setlikeTask(!likeTask);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isEdit ? (
        <IconButton onClick={() => setIsEdit(false)}>
          <CancelIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEdit(true)}>
          <EditIcon />
        </IconButton>
      )}
      <IconButton onClick={() => handleDelete(val)}>
        <DeleteForeverIcon />
      </IconButton>
      {!likeTask ? (
        <IconButton onClick={() => likeTaskFun(false)}>
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => likeTaskFun(true)}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
      <Card sx={{ maxWidth: "300px", p: 4 }}>
        <Stack gap={0.7}>
          <Typography>{val.email}</Typography>
          {isEdit ? (
            <>
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="filled"
                  placeholder="Title"
                  size="small"
                  {...register("title")}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="filled"
                  placeholder="Description"
                  size="small"
                  {...register("description")}
                />

                <Button variant="outlined" type="submit">
                  Edit Task
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography id="outlined-error" sx={{ my: 2 }}>
                {val.title}
              </Typography>
              <Typography id="outlined-error">{val.description}</Typography>
            </>
          )}
        </Stack>
      </Card>
    </>
  );
};

export default CardButton;
