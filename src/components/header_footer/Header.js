import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import SideDrawer from "./SideDrawer";
export default class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }
componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}
handleScroll = ()=> {
    if (window.scrollY > 0) {
        this.setState({
            headerShow: true
        })
    }else{
        this.setState({
            headerShow: false
        })
    }
}

    toggleDrawer = (value)=>{
        this.setState({
            drawerOpen: value
        })
    }
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor:this.state.headerShow?  "#2f2f2f" : 'transparent',
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title"> Musical Events</div>
          </div>
          <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={()=> this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer 
          open={this.state.drawerOpen}
          onClose ={(value)=> this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}