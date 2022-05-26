import { Button, LinearProgress, linearProgressClasses, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./smartAlarm.module.css"
import ToggleSwitch from "./ToggleSwitch ";
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width:250,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
const SmartAlarm = () => {
  return (
    <Box className={style.smart}>
      <Box>
        <Typography className={style.smartAlarm}>
          <Typography>Smart Alarm</Typography>
          <Typography>
        {/* <ToggleSwitch  label="." /> */}
          </Typography>
        </Typography>
      </Box>
      <Box className={style.drag}>
          Drag Hours Below

          <Box>
              <img className={style.watch} src="https://cdn.picpng.com/clock/clock-time-hour-minute-84493.png"/>
          </Box>
      </Box>
      <Typography sx={{display:"flex",textAlign:"center",backgroundColor:"white"}}>
          <Typography>From<Typography sx={{mx:3}}>09.00 PM</Typography>
          </Typography>
          <Typography>to<Typography>04.45 AM</Typography>
          </Typography>
      </Typography>
      <Box>
          <Typography sx={{display:"flex",mx:3}}>
              <Typography>Alarm Sound</Typography>
              <Typography>Marimba</Typography>
          </Typography>
          <Typography>
          <input className={style.range} type="range"/>
          </Typography>
      </Box>
      <Box style={{margin:"10px"}}>
          <Typography>Repeat</Typography>
          <Box style={{display:"flex", margin:"10px"}}>
          <Typography>Mon</Typography>
          <Typography style={{marginLeft:"15px"}}>Tue</Typography>
          <Typography style={{marginLeft:"15px"}}>Wed</Typography>
          <Typography style={{marginLeft:"15px"}}>Thu</Typography>
          </Box>
      </Box>
<Box>
<center><Button className={style.Button}>Set on my phone</Button></center>

</Box>    </Box>
  );
};

export default SmartAlarm;
