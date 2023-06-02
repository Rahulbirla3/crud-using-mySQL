import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../router/RouterReducer";

const Products = ({ allProducts }) => {
  const navigate = useNavigate();
  console.log(allProducts.data);

  const defaultTheme = createTheme();

  return (
    <>
      <ThemeProvider
        theme={defaultTheme}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          style={{
            margin: "45px 30px",
          }}
        >
          All Products
        </Typography>
        <Container
          maxWidth="lg"
          component="main"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* start */}
          {allProducts?.data?.map((val, index) => {
            return (
              <Grid
                key={index}
                item
                style={{
                  margin: "35px 30px",
                  minWidth: "250px",
                  maxWidth: "300px",
                }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={val.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title.slice(0, 220)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.description.slice(0, 150)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{val?.rating?.rate}</Button>
                    <Button size="small">Price :{val?.price}</Button>
                    <Button
                      size="small"
                      onClick={() => navigate(`${paths.SingleHistory}/${val?.id}`)}
                    >
                      view More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
          {/* end */}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Products;
