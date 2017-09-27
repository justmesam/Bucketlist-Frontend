import React, {Component} from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Avatar from "material-ui/Avatar";
import { logoutUser,
        changePassword,
        deleteUser
 } from "../../actions/authActions";
 import ChangePasswordForm from "../changePassword";
 import LoginForm from "../logInForm";


class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      openChange : false,
      deleteAccount: false
    }
  }
  handleChangeModal = () => {
    this.setState({openChange : !this.state.openChange})
  }
  handleDeleteUser = () =>{
    this.setState({ deleteAccount : !this.state.deleteAccount})
  }
  handleLogout = () => {
    this.props.logoutUser()
    localStorage.clear()
  }
  handleDeleteAuth = (values) =>{
    this.setState({ password : values.password})
    setTimeout(() => {
      const { password } = this.state
      this.props.deleteUser(
        password)
        localStorage.clear()
    }, 1000)
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
    const actionDelete = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleDeleteUser}
    />]
    return (
      <div>
        <AppBar
          style={{
            backgroundColor : "#A1887F"}}
          title={`Hello, ${this.props.user}`}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <Avatar>A</Avatar>
                </IconButton>
              }
              targetOrigin={{horizontal: "right", vertical: "top"}}
              anchorOrigin={{horizontal: "right", vertical: "top"}}
            >
              <MenuItem primaryText="Change password" onClick={this.handleChangeModal} />
              <MenuItem primaryText="Log out" onClick={this.handleLogout} />
              <MenuItem primaryText="Delete Account" onClick={this.handleDeleteUser}/>
            </IconMenu>

          }
        />
        <Dialog
         title="Change User Password"
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
       <Dialog
        title="Delete Account"
        actions={actionDelete}
        modal={false}
        open={this.state.deleteAccount}
        onRequestClose={this.handleDeleteUser}
        autoScrollBodyContent={true}
      >
        <h3 style={{color: "red" }}>Are you sure you want to delete account??</h3>
        <LoginForm
          onSubmit={this.handleDeleteAuth}
         />
      </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { token, authenticated, user } = state.authentication
  return { token, authenticated, user}
}

export default connect(mapStateToProps, {logoutUser, changePassword, deleteUser})(NavBar)

export { NavBar };
