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
import graph from '../../assets/graph.PNG'

const SleepReportChart = () => {

  return (
    <Box className={style.Main}>
      <div className={style.flex}>
        <div>
          <img className={style.image} src={graph}/>
        </div>
        <div>
          <h4>Sleep Total</h4>
          <div className={style.flexWrap}>
            <div className={style.iconbg1}>
              {" "}
              <AccessAlarmsIcon className={style.icon} sx={{fontSize:"40px"}}/>
            </div>
            <div className={style.time}>
              7<sub>h</sub>14<sub>m</sub>
            </div>
          </div>

          <div className={style.flexWrap}>
            <div className={style.iconbg2}>
              {" "}
              <RunningWithErrorsIcon className={style.icon} sx={{fontSize:"40px"}}/>
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
