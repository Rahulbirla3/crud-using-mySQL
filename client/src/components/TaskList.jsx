import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardButton from "./CardButton";

const TaskList = () => {
  const { taskApiData } = useSelector((store) => store.tasks);

  console.log(taskApiData);

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
          {taskApiData?.map((val, index) => {
            return (
              <Box
                key={index}
                style={{
                  border: "1px dashed black",
                  borderRadius: "4px",
                  margin: "20px 0px",
                }}
              >
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

export default TaskList;
