import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { paths } from "../router/RouterReducer";
import RouterContext from "../router/RouterContext";
import { FETCH_WRAPPER } from "../api";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const accesstype = localStorage.getItem("accesstype");
  const token = localStorage.getItem("token");

  const { state, updateData } = useContext(RouterContext);
  const { filterAllPath, filterCommonPath } = state;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // fetching data using axios
      const apiData = await FETCH_WRAPPER.post("login", {
        ...data,
      });
      console.log(apiData);
      if (!apiData?.data.success) return alert(apiData?.data.msg);

      console.log(apiData?.data);
      updateData(apiData?.data.token, apiData?.data.result[0]?.accesstype);
      localStorage.setItem("token", apiData?.data.token);
      localStorage.setItem("accesstype", apiData?.data.result[0]?.accesstype);
      localStorage.setItem("email", apiData?.data.result[0]?.email);
      navigate(`${paths.Root}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          LogIn
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="family-name"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            LogIn
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={paths.Signup} variant="body2">
                Dont have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
