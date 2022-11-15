import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardData from "./CardData";

const HomePage = () => {
  let API_URL = `https://reqres.in/api/users?page=2`;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let response = await axios.get(API_URL);
    setData(response.data.data);
  };
  console.log("data", data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>User Details</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          {data.map((item) => (
            <Grid key={item.id} item xs={4}>
              <CardData props={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
