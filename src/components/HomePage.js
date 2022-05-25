import React from "react";
import style from "../style/home.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BedtimeOffIcon from "@mui/icons-material/BedtimeOff";
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  LinearProgress,
  linearProgressClasses,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import Paper from "@mui/material/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
const HomePage = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 30 },
    { x: 3, y: 25 },
    { x: 4, y: 40 },
    { x: 5, y: 5 },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <div>
      <div className={style.PageLayout}>Hii Wayueh</div>
      <div className={style.PageLayout}>
        <div>
          <div>
            <CalendarTodayIcon />
          </div>
          <div>
            <AccessTimeFilledIcon />
          </div>
          <div>
            <BedtimeOffIcon />
          </div>
          <div>
            <BedtimeOffIcon />
          </div>
        </div>
        <div className={style.PageLayoutTwo}>
          <h4>Your Sleep Report</h4>
          <div className={style.heading}>
            <div>
              <div>try to avoid your laptop after 09 PM</div>
            </div>
            <div>
              <button>
                23-24 Okt 2021 <KeyboardArrowDownIcon />
              </button>
            </div>
          </div>
          <div className={style.HeartChart}>
            <h4>
              Heart Rate Chart <KeyboardArrowDownIcon />
            </h4>
            <p>In Hours</p>
            <div className={style.chart}>
              <div>
              <Paper className={style.chartGraph}>
                <Chart data={data} className={style.chartGraph}>
                  <ArgumentAxis />
                  <ValueAxis />

                  <LineSeries valueField="y" argumentField="x" />
                </Chart>
              </Paper>
              </div>
              <div className={style.chartDesign}>
                <div>Chart</div>
                <div>
                  <h3>Sleep Total</h3>
                  <div className={style.chart}>
                    <div className={style.timeIcon}>
                      <AccessAlarmsIcon />
                    </div>
                    <div>
                      7<sub>h</sub>14<sub>m</sub>
                    </div>
                  </div>
                  <div className={style.chart}>
                    <div className={style.SleepIcon}>
                      <RunningWithErrorsIcon />
                    </div>
                    <div className={style.chart}>
                      <div>
                        Deep Sleep
                        <h3>34%</h3>
                      </div>
                      <div>
                        Light Sleep
                        <h3>66%</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={style.chart}>
              <div>
                {/* <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      <h4>Sleep Duration</h4>
                      <Typography className={style.chart}>
                        <Typography>Month1 </Typography>
                        <Typography>Month13 </Typography>
                        <Typography>Month24 </Typography>
                      </Typography>
                      <Typography>
                        <Box sx={{ flexGrow: 1 }}>
                          <BorderLinearProgress
                            variant="determinate"
                            value={50}
                          />
                        </Box>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card> */}
              </div>
              {/* <div>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div> */}
              {/* <div>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div> */}
            </div>
          </div>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
};

export default HomePage;
