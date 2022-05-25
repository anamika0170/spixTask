import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import style from "./sidebar.module.css";
import EventNoteIcon from '@mui/icons-material/EventNote';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const drawerWidth = 90;

const Index = () => {
  return (
    <Box className={style.sidebar}>
      <Drawer
        variant="permanent"
        className={style.sidebar}
      >
        <Toolbar className={style.sidebar} />
        <Box className={style.sidebar}>
          <List className={style.sidebar} sx={{height:"480px",paddingTop:"200px"}}>
            <EventNoteIcon className={style.icon} />
            <br />
            <DarkModeIcon className={style.icon}/>
            <br />
            <CalendarTodayIcon className={style.icon}/>
            <br />
            <AccessTimeIcon className={style.icon}/>
            <br />
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Index;
