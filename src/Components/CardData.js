import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CardData = ({ props }) => {
  let { avatar, first_name, id } = props;

  return (
    <div>
      <Link to={`/user/${id}`}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image={avatar}
            alt={first_name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {first_name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default CardData;
