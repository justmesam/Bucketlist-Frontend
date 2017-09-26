import React, { Component } from "react";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";
import NavBar from "../components/layout/navBars"
import BucketContainer from "./bucketlist";

class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
     <div>
       <NavBar style={{margin:15}}/>
       <BucketContainer />
     </div>
    </div>
);
  }
}

const mapStateToProps = (state) => {
  const { bucketlists } = state.bucketlists;
  return {
    bucketlists
  }
}
export default connect(mapStateToProps)(Dashboard);
export { Dashboard }
