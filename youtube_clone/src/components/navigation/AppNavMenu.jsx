import { AiFillYoutube } from "react-icons/ai";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "@components/navigation/SearchBar";
import UserProfile from "@components/UserProfile";
import NotificationsList from "@components/NotificationsList";
import Upload from "@components/Upload";
import {
  appBar,
  toolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile,
} from "@styles/styles";

const AppNavMenu = (props) => {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <AiFillYoutube size={32} />
            <Typography variant="h6" component="div" sx={logoText}>
              YouTube
            </Typography>
            <Box sx={hideOnMobile}>
              <SearchBar />
            </Box>
            <Box sx={hideOnMobile}>
              <Upload />
              <NotificationsList />
              <UserProfile />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavMenu;
