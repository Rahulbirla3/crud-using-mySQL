import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import home from "../Images/home.jpg";
import mechanic from "../Images/mechanicPhoto.jpg";
import { paths } from "../router/RouterReducer";
import { useNavigate } from "react-router-dom";
import { FETCH_WRAPPER } from "../api";
import Price from "../components/Price";
import Products from "../components/Products";

const Home = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // getting Top Mechanic
      const users = await FETCH_WRAPPER("gettopmechanic");
      setApiData(users?.data?.arr);
      //End getting Top Mechanic

      // getting Products
      const allProducts = await FETCH_WRAPPER(
        "https://fakestoreapi.com/products"
      );
      setAllProducts(allProducts);
      // End getting Products

      //
    })();
  }, []);

  console.log(apiData);

  return (
    <>
      {/* hero section */}
      <Box sx={{ maxWidth: "100vw" }}>
        <img src={home} alt="Home_page_img" style={{ width: "100%" }} />
      </Box>

      {/* cards */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ margin: "auto" }}>
          Our Top Performar Mechanics
        </Typography>
        <div style={{ margin: "25%", display: "flex", margin: "50px" }}>
          {/* Card start  */}
          {apiData?.map((val, index) => (
            <Card key={index} sx={{ maxWidth: 600, margin: "0px 20px" }}>
              <CardContent>
                <img
                  src={mechanic}
                  alt="mechanic"
                  width="150px"
                  style={{ margin: "auto" }}
                />
                <Typography variant="h5" gutterBottom>
                  {val.username}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>4.4</Typography>
                <Button
                  size="small"
                  onClick={() => {
                    navigate(`${paths.SingleHistory}/${val.sno}`);
                  }}
                >
                  View More
                </Button>
              </CardActions>
            </Card>
          ))}
          {/* Card End  */}
        </div>
      </Box>

      {/* price component */}
      <Price />
      {/* End price component */}
      {/* Products component */}
      <Products allProducts={allProducts} />
      {/* End Products component */}
    </>
  );
};

export default Home;
