import React, { useEffect, useState } from "react";
import { FETCH_WRAPPER } from "../api";
import { Box, Container, Grid } from "@mui/material";
import CardButton from "./CardButton";

const FavTask = () => {
  const [favTask, setFavTask] = useState([]);

  useEffect(() => {
    (async () => {
      const apiData = await FETCH_WRAPPER(`getFavTasks`);
      setFavTask(apiData.data.result);
        })();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          gap={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          {/* Start */}
          {favTask?.map((val, index) => {
            return (
              <Box
                key={index}
                style={{
                  border: "1px dashed black",
                  borderRadius: "4px",
                  margin: "20px 0px",
                }}
              >
                {val.likeTask && <CardButton val={val} />}
                <br />
                <br />
                <br />
                {/* Edit functionlity */}
                <CardButton val={val} />
                {/* End Edit functionlity */}
              </Box>
            );
            /* End */
          })}
        </Grid>
      </Container>
    </>
  );
};

export default FavTask;
