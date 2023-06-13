import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { paths } from "../router/RouterReducer";
import { Link , useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FETCH_WRAPPER } from "../api";
import { toast } from "react-toastify";

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await FETCH_WRAPPER.post("register", {
        ...data,
      });
      toast(result.data.msg);
      navigate(paths.Login);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up hello
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item  sx={{ display: "flex" }}>
              <Grid item xs={{ xs: 6 }}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  {...register("username")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                />
              </Grid>
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
              <TextField
                required
                fullWidth
                name="number"
                label="number"
                type="tel"
                id="number"
                autoComplete="new-number"
                {...register("number")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="address"
                type="address"
                id="address"
                autoComplete="new-address"
                {...register("address")}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Access Type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="accesstype"
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                  {...register("accesstype")}
                />
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                  {...register("accesstype")}
                />
                <FormControlLabel
                  value="mechanic"
                  control={<Radio />}
                  label="Mechanic"
                  {...register("accesstype")}
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={paths.Login} variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
