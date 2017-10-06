import React, { Component } from "react";
import { connect } from "react-redux";
import Authentication from "./Auth";
import Dashboard from "./dashboard";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { authenticated: false };
  }

  renderView(){
    const { authenticated, token } = this.props;
    if(authenticated && token) {
      return (<Dashboard />)
    }
    return  (<Authentication />)
  }
  render(){
    return (
    <div>
     <div>
       {this.renderView()}
     </div>
    </div>
);
  }
}

const mapStateToProps = (state) => {
  const { authenticated, token } = state.authentication;
  return {
    authenticated, token
  }
}
export default connect(mapStateToProps)(Home);
export { Home }
