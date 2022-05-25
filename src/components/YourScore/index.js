import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { LinearProgress, linearProgressClasses } from "@mui/material";
import style from "./yourScore.module.css";
import AdjustIcon from '@mui/icons-material/Adjust';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function Score() {
  return (
    <Box>
    <h4>Your Score</h4>
        <Card sx={{ minWidth: 275, backgroundColor: "#000075",color:"white",height:"400px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14,textAlign:"center" }} gutterBottom>
          Difficult Score
        </Typography>
        <Typography sx={{ display: "flex" }} variant="h5" component="div">
          <Typography sx={{mx:3}}>
            <div className={style.pie}>
              <span class={style.overlay}></span>
            </div>
           <Typography sx={{textAlign:"center"}}>
           <ForkLeftIcon className={style.arrow}/>
            <AdjustIcon/>
           </Typography>
          </Typography>
        </Typography>
        <Typography sx={{ display: "flex" }} variant="h5" component="div">
          <Typography sx={{textAlign:"center"}}>
          On Progress 64%
            <Typography sx={{textAlign:"center",mx:4}}>
               Tracker for your Health
            </Typography>
          </Typography>
        </Typography>
        <Typography sx={{textAlign:"center"}}>
            See Details
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}
