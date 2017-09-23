import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import { logoutUser,
        changePassword,
        deleteUser
 } from '../../actions/authActions';
 import ChangePasswordForm from '../changePassword';


class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      openChange : false
    }
  }
  handleChangeModal = () => {
    this.setState({openChange : !this.state.openChange})
  }
  handleLogout = () => {
    this.props.logoutUser()
    localStorage.clear()
  }

  handleChangePassword = (values) => {
    this.setState({
      old_password : values.old_password,
      new_password : values.new_password,
      confirm_password : values.confirm_password
    })
    setTimeout(() => {
      const { old_password,
              new_password,
              confirm_password } = this.state
      this.props.changePassword({
              old_password,
              new_password,
              confirm_password }, 1000)
    })
  }

  render() {
    const actionChange = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleChangeModal}
    />]
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
              <MenuItem primaryText="Change password" onClick={this.handleChangeModal} />
              <MenuItem primaryText="Log out" onClick={this.handleLogout} />
              <MenuItem primaryText="Delete Account" />
            </IconMenu>

          }
        />
        <Dialog
         title="Edit a Bucketlist"
         actions={actionChange}
         modal={false}
         open={this.state.openChange}
         onRequestClose={this.handleChangeModal}
         autoScrollBodyContent={true}
       >
         <ChangePasswordForm
           onSubmit={this.handleChangePassword}
         />
       </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { token, authenticated } = state.authentication
  return { token, authenticated }
}

export default connect(mapStateToProps, {logoutUser, changePassword})(NavBar)

export { NavBar };
