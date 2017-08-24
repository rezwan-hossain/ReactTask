import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    
    return (
      <div>
        <AppBar
          title={this.props.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={event =>
            this.setState({ open: !this.state.open })}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/todo">
            <MenuItem>TODO</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default Header;
