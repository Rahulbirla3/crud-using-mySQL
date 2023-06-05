import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState, useEffect } from "react";
import services from "../Images/services.jpg";
import { useLocation } from "react-router-dom";
import { FETCH_WRAPPER } from "../api";
import axios from "axios";

const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    backgroundColor: "ButtonShadow",
  },
});

const SingleHistory = () => {
  const classes = useStyles();

  // State
  const [apiData, setApiData] = useState();
  const [count, setCount] = useState(0);

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    const productId = location.pathname.slice(15, 17);
    // console.log(productId);
    location.pathname
      ? (async () => {
          const result = await axios.get(
            `https://fakestoreapi.com/products/${productId}`
          );
          setApiData(result?.data);
        })()
      : (async () => {
          const data = await FETCH_WRAPPER(location.pathname);
          setApiData(data);
        })();
  }, []);

  console.log(apiData);

  return (
    <>
      <Container
        maxWidth="lg"
        // style={{ backgroundColor: "red" }}
        sx={{ my: 4 }}
      >
        <Toolbar
          // style={{ backgroundColor: "yellow" }}
          className={classes.center}
        >
          <Card sx={{ width: 1 / 2, my: 4 }}>
            <CardMedia component="img" src={apiData?.image} alt="home Image" />
          </Card>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
            // backgroundColor="blue"
            marginLeft="20px"
          >
            <Typography variant="p">{apiData?.category}</Typography>

            <Typography variant="h4">{apiData?.title.slice(0, 10)}</Typography>
            <Box display="flex" gap={4}>
              <Typography variant="p">{apiData?.rating?.rate}</Typography>
              <Button startIcon={<FavoriteBorderRoundedIcon />} variant="p">
                whislist
              </Button>
              <Typography variant="p">Compare</Typography>
            </Box>
            <Stack display="flex" flexDirection="column">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Size
              </FormLabel>
              <Box>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="small"
                    control={<Radio />}
                    label="Small"
                  />
                  <FormControlLabel
                    value="midium"
                    control={<Radio />}
                    label="Midium"
                  />
                  <FormControlLabel
                    value="large"
                    control={<Radio />}
                    label="Large"
                  />
                </RadioGroup>
              </Box>
            </Stack>

            <Typography variant="p">Price : {apiData?.price}</Typography>
            <Toolbar display="flex" style={{ justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                onClick={() =>
                  count <= 0 ? setCount(count) : setCount(count - 1)
                }
              >
                -
              </Button>
              <Typography style={{ margin: "10px" }}>{count}</Typography>
              <Button
                variant="contained"
                onClick={() =>
                  apiData.rating.rate - 1 < count
                    ? setCount(count)
                    : setCount(count + 1)
                }
              >
                +
              </Button>
            </Toolbar>
            <Toolbar display="flex" style={{ justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                style={{ marginRight: "10px" }}
                startIcon={<ShoppingBasketIcon />}
              >
                Buy
              </Button>
              <Button variant="contained" endIcon={<ShoppingCartIcon />}>
                Add to Cart
              </Button>
            </Toolbar>
          </Stack>
        </Toolbar>
      </Container>
    </>
  );
};

export default SingleHistory;
