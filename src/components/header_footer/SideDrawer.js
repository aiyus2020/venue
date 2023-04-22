import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Scroller from "react-scroll/modules/mixins/scroller";

function SideDrawer(props) {
  const scrollToElement = (element) => {
    Scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItemButton onClick={() => scrollToElement("events")}>
          Event Start in
        </ListItemButton>
        <ListItemButton onClick={() => scrollToElement("venue")}>
          Venue Info
        </ListItemButton>
        <ListItemButton onClick={() => scrollToElement("highlights")}>
          HighLight
        </ListItemButton>
        <ListItemButton onClick={() => scrollToElement("pricing")}>
          Pricing
        </ListItemButton>
        <ListItemButton onClick={() => scrollToElement("location")}>
          Location
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
