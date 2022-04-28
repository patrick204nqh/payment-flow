import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function AvartarUpload() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="360"
        image="https://via.placeholder.com/345x360"
        alt="green iguana"
      />
      <CardActions>
        <Button size="small">
          <UploadFileIcon />
          <Typography>Upload picture</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
