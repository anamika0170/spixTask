import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import FullEx from "../FullExplanation";
import style from "./sleepReport.module.css";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";

const SleepReportChart = () => {
  const data = [
    { x: 1, y: 30 },
    { x: 2, y: 40 },
    { x: 3, y: 5 },
    { x: 4, y: 2 },
    { x: 5, y: 21 },
    { x: 6, y: 30 },
    { x: 7, y: 40 },
    { x: 8, y: 5 },
    { x: 9, y: 2 },
    { x: 10, y: 21 },
  ];

  return (
    <Box className={style.Main}>
      <div className={style.flex}>
        <div>
          <Paper sx={{width:"800px",backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4LAKgA3suGljtpaAWGYGV2SUecZ0qdTnTWhcx47JHr0h0uEHEP_VJuLee0SlSlVguRM&usqp=CAU)',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <Chart data={data}>
              {/* <ArgumentAxis />
              <ValueAxis /> */}

              <LineSeries valueField="y" argumentField="x" />
            </Chart>
          </Paper>
        </div>
        <div>
          <h4>Sleep Total</h4>
          <div className={style.flexWrap}>
            <div className={style.iconbg1}>
              {" "}
              <AccessAlarmsIcon className={style.icon} />
            </div>
            <div className={style.time}>
              7<sub>h</sub>14<sub>m</sub>
            </div>
          </div>

          <div className={style.flexWrap}>
            <div className={style.iconbg2}>
              {" "}
              <RunningWithErrorsIcon className={style.icon} />
            </div>
            <div className={style.flex2}>
              <div>
                Deep Sleep
                <h4>34%</h4>
              </div>
              <div className={style.sleep}>
                Light Sleep
                <h4>66%</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullEx />
    </Box>
  );
};

export default SleepReportChart;
