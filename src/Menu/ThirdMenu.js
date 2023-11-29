/***************************************************
 *        FileName : ThirdMenu.js
 *        Date : 11.29
 *
 *
 *
 ***************************************************/

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const ThirdMenu = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          {/* <IconButton color="inherit">
                        <MenuIcon></MenuIcon>
                    </IconButton> */}
          <h2> MUI :</h2>
          {/* <Box sx={{ flexGrow: 1 }}></Box> */}
          <div style={{ marginLeft: 30 }}></div>
          <Stack direction='row' spacing={2}>
            {/* <Link to="/home">Home</Link>
                        <Link to="/home">Contact</Link>
                        <Link to="/form">Form</Link>
                        <Link to="/auto">Autocomplete</Link>
                        <Link to="/check">Checkbox</Link> */}

            <Link to='/table'>Table</Link>
            <Link to='/MuiBox_01'>MuiBox_01</Link>
            <div>Second Menu</div>
            <div>Tecond Menu</div>
            <div>Flatingbuttonecond Menu</div>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ThirdMenu;
