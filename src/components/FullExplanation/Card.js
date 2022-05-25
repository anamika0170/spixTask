import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { LinearProgress, linearProgressClasses } from '@mui/material';
import Score from '../YourScore';
import style from './fullExplaination.module.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width:250,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? 'green' : 'blue',
    },
  }));
  

  const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width:250,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? 'sky' : 'blue',
    },
  }));

  const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width:250,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? 'black' : 'blue',
    },
  }));

export default function BasicCard(props) {
  return (
   <Box>
    <Box sx={{display:"flex"}}>
    <Box>
      <Card sx={{ minWidth: 275,mx:5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
         Sleep duration
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Month1</Typography>
          <Typography sx={{mx:3}}>Monthy13</Typography>
          <Typography>Month24</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Box sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Sleeping
          <Typography>66%</Typography>
          </Typography>
          <Typography sx={{mx:3}}>Awake
          <Typography>34%</Typography>
          </Typography>
          <Typography>Heart Rate
          <Typography>2.400</Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
   </Box>
   <Box>
   <Card sx={{ minWidth: 275,mx:5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
         Sleep duration
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Month1</Typography>
          <Typography sx={{mx:3}}>Monthy6</Typography>
          <Typography>Month24</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Box sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress2 variant="determinate" value={35} />
    </Box>
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Sleeping
          <Typography>94%</Typography>
          </Typography>
          <Typography sx={{mx:3}}>Awake
          <Typography>6%</Typography>
          </Typography>
          <Typography>Heart Rate
          <Typography>31.370</Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
   </Box>
   <Box className={style.score}>
     <Score/>
   </Box>
    </Box>
    
    <Box sx={{display:"flex",marginTop: "-142px"}}>
    <Box>
      <Card sx={{ minWidth: 275,mx:5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
         Sleep duration
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Month1</Typography>
          <Typography sx={{mx:3}}>Monthy4</Typography>
          <Typography>Month24</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Box sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress3 variant="determinate" value={30} />
    </Box>
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Sleeping
          <Typography>72%</Typography>
          </Typography>
          <Typography sx={{mx:3}}>Awake
          <Typography>28%</Typography>
          </Typography>
          <Typography>Heart Rate
          <Typography>470min</Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
   </Box>
   <Box>
   <Card sx={{ minWidth: 275,mx:5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
         Sleep duration
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Month1</Typography>
          <Typography sx={{mx:3}}></Typography>
          <Typography>Month24</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Box sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress variant="determinate" value={0} sx={{color:"green",backgroundColor:"green"}}/>
    </Box>
        </Typography>
        <Typography sx={{display:"flex"}} variant="h5" component="div">
          <Typography>Sleeping
          <Typography>84%</Typography>
          </Typography>
          <Typography sx={{mx:3}}>Awake
          <Typography>16%</Typography>
          </Typography>
          <Typography>Heart Rate
          <Typography>102kg</Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
   </Box>
    </Box>
   </Box>
  );
}
