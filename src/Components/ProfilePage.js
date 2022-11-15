import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";

const ProfilePage = () => {
  const [details, setDetails] = useState([]);
  const [toggle, setToggle] = useState(false);

  let { id } = useParams();
  let API_URL = `https://reqres.in/api/users/${id}`;

  const fetchData = async () => {
    let response = await axios.get(API_URL);
    setDetails(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setToggle(true);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="400"
          image={details.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.first_name} {details.last_name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {details.email}
          </Typography>
        </CardContent>
        <CardActions>
          {!toggle ? (
            <Button onClick={handleClick} variant="contained">
              Add Job Role
            </Button>
          ) : (
            <TextField
              id="standard-basic"
              variant="standard"
              placeholder="Job Title"
            />
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProfilePage;
