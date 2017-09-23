import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import { logoutUser } from '../../actions/authActions';


class NavBar extends Component {
  constructor(props){
    super(props);
  }
  handleLogout = () => {
    this.props.logoutUser()
    localStorage.clear()
  }

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
              <MenuItem primaryText="Log out" onClick={this.handleLogout}/>
              <MenuItem primaryText="Delete Account" />
            </IconMenu>

          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { token, authenticated } = state.authentication
  return { token, authenticated }
}

export default connect(mapStateToProps, {logoutUser})(NavBar)

export { NavBar };
