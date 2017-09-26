import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {Tabs, Tab} from "material-ui/Tabs";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import {
  getBucketlists,
  getOneBucketlist,
  postBucketlists,
  editBucketlists,
  deleteBucketlists
} from "../actions/bucketlistsActions";

import BucketlistEditForm from "../components/editBucketlist";
import BucketlistForm from "../components/bucketlistForm";
import ItemContainer from "./Items";
import Details from "../components/bucketlistDetails";

const initial_state =  {
   openCreate : false,
   openEdit : false,
   openView:false,
   title : "",
   intro : "",
   id: ""
 }
 class BucketContainer extends Component {
   constructor(props) {
     super(props);
    this.state = initial_state;
   }

   componentWillMount() {
     this.props.getBucketlists()
   }
   handleAdd = () => {
     this.setState({openCreate : !this.state.openCreate})
   }
   handleChange = (value) => {
    this.setState({
      value: value,
    })}
  handleView = () => {
       this.setState({openView : !this.state.openView})
   }
   handleEdit = (bucketid) => {
     this.setState({openEdit : !this.state.openEdit,
                   id: bucketid})
   }
   handleDelete = (id) => {
     this.props.deleteBucketlists(id)
   }
   handlePost = (values) => {
     this.setState({
       title: values.title,
       intro: values.intro
     })
     setTimeout(() => {
       const { title, intro} = this.state
       this.props.postBucketlists({ title, intro})
     }, 1000)
     setTimeout(() => {this.setState(initial_state)}, 2000)
   }
   handleGetOne = (id) => {
     const { bucketlists } = this.props
     if(bucketlists){
     this.props.getOneBucketlist(id)
   }
   }
   handlePut = (values) => {
     this.setState({
       title: values.title,
       intro: values.intro
     })
     setTimeout(() => {
       const { title, intro} = this.state
       const id = this.state.id
       this.props.editBucketlists(id, { title, intro})
     }, 1000)
     setTimeout(() => {this.setState(initial_state)}, 2000)
   }
   renderBucketlists(){
     const { bucketlists } = this.props
     if( bucketlists.length < 1){
       return (
         <h4>No bucketlists yet!</h4>
       )
     }
     return (
       bucketlists.map((bucketlist) =>(
         <Details
           date={bucketlist.date_created}
           dateUpdated={bucketlist.date_updated}
           getDetails={() => this.handleGetOne(bucketlist.id)}
           key={bucketlist.id}
           title={bucketlist.title}
           intro={bucketlist.intro}
           view={this.handleView}
           edit={() => this.handleEdit(bucketlist.id)}
           delete={() => this.handleDelete(bucketlist.id)}
         />
     )))
   }

   render(){
     const actionadd = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleAdd}
      />]
      const actionedit = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleEdit}
      />]
      const actionview = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleView}
      /> ];
      const customContentStyle = {
        width: "80%",
        maxWidth: "none",
        height: "80vw",
        maxHeight: "none",
      };
     return (
       <div>
         <Toolbar style={{margin:15}}>
           <ToolbarTitle text="Bucketlists" />
         <ToolbarGroup>
           <ToolbarSeparator />
           <RaisedButton
             style={{}}
            label="Add a bucketlist"
            secondary={true}
            onClick={this.handleAdd}/>
         </ToolbarGroup>
   </Toolbar>
           <div>
             {this.renderBucketlists()}
         </div>
         <Dialog
          title="Create a Bucketlist"
          actions={actionadd}
          modal={false}
          open={this.state.openCreate}
          onRequestClose={this.handleAdd}
          autoScrollBodyContent={true}
        >
          <BucketlistForm
            onSubmit={this.handlePost}
          />
        </Dialog>
        <Dialog
         title="Edit a Bucketlist"
         actions={actionedit}
         modal={false}
         open={this.state.openEdit}
         onRequestClose={this.handleEdit}
         autoScrollBodyContent={true}
       >
         <BucketlistEditForm
           onSubmit={this.handlePut}
         />
       </Dialog>
       <Dialog
        actions={actionview}
        modal={true}
        contentStyle={customContentStyle}
        open={this.state.openView}
          >
          <Tabs
      value={this.state.value}
      onChange={this.handleChange}
    >
      <Tab
        style={{
          backgroundColor : "#A1887F"}}
        >
              <ItemContainer />
      </Tab>
      </Tabs>
      </Dialog>
       </div>
     )
   }
 }


 const mapStateToProps = (state) => {
const { bucketlists, singleBucketlist } = state.bucketlists;
  return { bucketlists, singleBucketlist };
};

export default connect(mapStateToProps, {
  getBucketlists,
  getOneBucketlist,
  postBucketlists,
  editBucketlists,
  deleteBucketlists })(BucketContainer);

export { BucketContainer };
