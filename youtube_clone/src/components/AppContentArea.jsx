import Box from "@mui/material/Box";
import SideList from "@components/SideList";
import TabList from "@components/TabList";
import CardList from "@components/CardList";
import { appContentWrapper, flexColumnGrow } from "@styles/styles";
import React, { useState, useEffect } from "react";
import { fetchFromApi } from "../utils/api";
//import { fetchFromApi } from "@utils/api";
import Loader from "@components/Loader";
const AppContentArea = ({ isOpen }) => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [searchText, setSearchText] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      fetchFromApi(`/search?part=snippet&q=${searchText}`).then((response) => {
        setYoutubeData(response.data.items);
        setLoading(false);
      });
    } catch (e) {
      setLoading(false);
    }
  }, [searchText]);

  const onTabChange = (searchValue) => {
    setSearchText(searchValue);
    setLoading(!loading);
  };

  if (!youtubeData.length) {
    return;
  }
  const sideBarWidth = isOpen ? "70px" : "250px";
  return (
    <Box component="main" sx={appContentWrapper}>
      <Box
        component="div"
        sx={{
          flexBasis: sideBarWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflowY: "auto",
        }}
      >
        <SideList />
      </Box>
      <Box component="div" sx={flexColumnGrow}>
        <Box
          sx={{
            my: 2,
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <TabList onTabChange={onTabChange} />
        </Box>

        <Box
          component="div"
          sx={{
            display: "block",
            p: 2,
            minHeight: "100px",
            mb: 4,
            overflow: "hidden",
            overflowY: "auto",
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <CardList items={youtubeData} />
          <Loader open={loading} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppContentArea;
