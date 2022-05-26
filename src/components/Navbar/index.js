import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import style from "./navbar.module.css"
import SubHeader from '../SubHeader';
import SmartAlarm from '../SmartAlarm';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const image="https://cdn1.vectorstock.com/i/1000x1000/27/65/cute-boy-face-cartoon-vector-23302765.jpg"

const Index = () => {
  return (
    <Box className={style.Appbaar}>
    <AppBar position="static" className={style.Appbaar}>
      <Toolbar className={style.Appbaar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
         <Typography sx={{display:"flex"}}>
           {/* <Typography className={style.Z}>Z<sub>z</sub>
           <Typography className={style.cuma}>Cuma nongs</Typography>
           </Typography> */}
           <Typography sx={{mx:5,paddingTop:"25px"}} className={style.cuma}>Hii Wayueh</Typography>
         </Typography>
        </Typography>

        <Search sx={{marginRight:"45px"}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search something here"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Typography sx={{display:"flex",mx:2}}>
          <Typography className={style.cuma}>Basics Account
         <Typography>Wayueh Asback</Typography>
          </Typography>
          <Typography className={style.profile}>
              <img src={image} className={style.profileImage}/>
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>

   <Typography sx={{display:"flex"}}>
     <Typography>
     <SubHeader/>
     </Typography>
     <Typography sx={{marginTop:"40px"}}>
     <SmartAlarm/>
     </Typography>
   </Typography>
  </Box>
  )
}

export default Index