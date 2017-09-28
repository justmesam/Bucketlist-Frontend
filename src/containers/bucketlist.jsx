import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {Tabs, Tab} from "material-ui/Tabs";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Pagination from "material-ui-pagination";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import {
  getBucketlists,
  getOneBucketlist,
  postBucketlists,
  editBucketlists,
  deleteBucketlists,
  searchBuckets,
  paginateBuckets
} from "../actions/bucketlistsActions";

import BucketlistEditForm from "../components/editBucketlist";
import BucketlistForm from "../components/bucketlistForm";
import ItemContainer from "./Items";
import Details from "../components/bucketlistDetails";
import SearchTiles from "../components/searchDisplay";

const initial_state =  {
   openDelete : false,
   openCreate : false,
   openEdit : false,
   openView:false,
   value: 0,
   page:1
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
   handleSearch = (event) => {
     this.setState({
    search: event.target.value,
  });
};
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
   handleDelete = () => {
     const { id } = this.state
     this.props.deleteBucketlists(id)
     this.setState({openDelete : !this.state.openDelete})
   }
   handleDeleteModal = (id) => {
     this.setState({
       id : id,
       openDelete : !this.state.openDelete
   })
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
   handleSearchBucket = () => {
     const { search } = this.state;
     this.props.searchBuckets(search)
   }
   handleChangeLimit = (event, index, value) => {
     this.setState({value})
     setTimeout(() => {
       this.props.paginateBuckets(this.state.value, this.state.page)
     }, 1000)
   };
   renderPaginated(){
     return(
     this.renderBucketlists())
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
           delete={() => this.handleDeleteModal(bucketlist.id)}
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
      const actionaDelete = [
        <FlatButton
          label="Delete"
          secondary={true}
          onClick={this.handleDelete}
        />,
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleDeleteModal}
        />
      ]
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
           <ToolbarGroup firstChild={true}>
          <SelectField
            value={this.state.value}
            floatingLabelText="Limit per page"
            onChange={this.handleChangeLimit}>
            <MenuItem value={0} primaryText="None" />
            <MenuItem value={3} primaryText="0 - 3" />
            <MenuItem value={5} primaryText="0 - 5" />
            <MenuItem value={8} primaryText="0 - 8" />
            <MenuItem value={10} primaryText="0 - 10" />
            <MenuItem value={15} primaryText="0 - 15" />
          </SelectField>
         </ToolbarGroup>
           <ToolbarGroup>
           <TextField
            id="text-field-controlled"
            hintText="Search Bucketlists"
            value={this.state.search}
            onChange={this.handleSearch}
           />
           <IconButton
             onClick={this.handleSearchBucket}
             iconClassName="muidocs-icon-custom-github" />
           <ToolbarSeparator />
           <RaisedButton
            label="Add a bucketlist"
            secondary={true}
            onClick={this.handleAdd}/>
         </ToolbarGroup>
        </Toolbar>
           <div>
             <div>
               {this.props.searched ?
                 <SearchTiles data={this.props.searchedBucketlist}/> :
                 <div></div>}
             </div>
              <div     style={{
                     display:"flex",
                     justifyContent: "center",
                     alignItems: "center"
                 }}>
               {this.props.paginated ? <Pagination
                                     total = { this.props.pages }
                                     current = { this.props.current }
                                     display ={6}
                                   /> : <br />}
             </div>
             {this.state.value === 0 &&
               !this.props.paginated ? this.renderBucketlists() :
                this.renderPaginated()}
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
         title="Delete a Bucketlist"
         actions={actionaDelete}
         modal={false}
         open={this.state.openDelete}
         onRequestClose={this.handleDeleteModal}
         autoScrollBodyContent={true}
       >
        <em style={{color:"red"}}> Are you Sure you want to delete this? </em>

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
const { bucketlists, singleBucketlist,
   searchedBucketlist, searched,
   current, paginated, pages } = state.bucketlists;
  return { bucketlists, searched, singleBucketlist,
     searchedBucketlist, current, paginated, pages };
};

export default connect(mapStateToProps, {
  getBucketlists,
  getOneBucketlist,
  postBucketlists,
  editBucketlists,
  searchBuckets,
  paginateBuckets,
  deleteBucketlists })(BucketContainer);

export { BucketContainer };
