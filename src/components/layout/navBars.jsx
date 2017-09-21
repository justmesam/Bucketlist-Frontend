import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import { logoutUser } from '../../actions/authActions';


class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar
          style={{
            backgroundColor : '#A1887F',
            height: '5vw'}}
          title="La - Bucketlist"
          iconElementRight={

            <IconMenu
              iconButtonElement={
                <IconButton><Avatar>A</Avatar></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Change password" />
              <MenuItem primaryText="Log out" />
              <MenuItem primaryText="Delete Account" />
            </IconMenu>

          }
        />
      </div>
    );
  }
}

export default NavBar;
