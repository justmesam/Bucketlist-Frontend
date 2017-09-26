import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import {
  getBucketlistsItems,
  getOneBucketlistItem,
  postBucketlistsItems,
  editBucketlistsItems,
  deleteBucketlistsItems
 } from "../actions/itemsActions";

 import ItemForm from "../components/itemForm";
  import ItemEditForm from "../components/editItem";
 import Details from "../components/bucketlistDetails";


 const initialState = {
   openItemEdit: false,
   openItemAdd: false
 }
 class ItemContainer extends Component {
   constructor(props) {
     super(props);
     this.state = initialState
   }

   handlePostItem = () => {
     this.setState({ openItemAdd: !this.openItemAdd })
   }
   handlePostItemForm = (values) => {
     this.setState({
       title: values.title,
       intro: values.intro
     })
     setTimeout(() => {
       const { singleBucketlist } = this.props
       const { title, intro} = this.state
       this.props.postBucketlistsItems(singleBucketlist.id, { title , intro})
     }, 1000)
   }
   handleDeleteItem = (id) => {
     const _id = this.props.singleBucketlist.id
     this.props.deleteBucketlistsItems(_id, id)
   }
   handlePutItem = (id) => {
     this.setState({
       id: id,
       openItemEdit: !this.openItemEdit }
     )}
   handlePutItemform = (values, id) => {
     this.setState({
       title: values.title,
       intro: values.intro
     })
     setTimeout(() => {
       const { singleBucketlist } = this.props
       const { title, intro} = this.state
       const _id = this.state.id
       this.props.editBucketlistsItems(singleBucketlist.id, _id, { title , intro})
       this.setState = (initialState)
     }, 1000)
   }

   getAllItems(){
     const { singleBucketlist } = this.props
     if(singleBucketlist){
       this.props.getBucketlistsItems(singleBucketlist.id)
     }}

     renderItems(){
     const { allItems } = this.props
     if (allItems.length > 0){
     const { singleBucketlist } = this.props
     const bucketItems = allItems.filter(item => item.owner === singleBucketlist.id)
       if( bucketItems.length > 0){
         return (
           bucketItems.map((item) =>(
             <Details
               date={item.date_created}
               dateUpdated={item.date_updated}
               key={item.id}
               title={item.title}
               intro={item.intro}
               edit={() => this.handlePutItem(item.id)}
               delete={() => this.handleDeleteItem(item.id)}
             />
         ))

         )
       } else
       return (
         <h4>No Items yet!</h4>
        )
   }else{
   return (
     <h4>No Items yet!</h4>
    )
}}

   render(){
     const actionedit = [
     <FlatButton
       label="Cancel"
       primary={true}
       onClick={this.handlePutItem}
     />]
     const actionadd = [
     <FlatButton
       label="Cancel"
       primary={true}
       onClick={this.handlePostItem}
     />]
     return (
       <div>
         <Toolbar style={{margin:15}}>
           <ToolbarTitle text={this.props.singleBucketlist.title} />
         <ToolbarGroup>
           <ToolbarSeparator />
           <RaisedButton
             label="Add an item"
            backgroundColor="#a4c639"
            style={{
                    margin: 12,
                  }}
            onClick={this.handlePostItem}
            />
         </ToolbarGroup>
       </Toolbar>
       <div>
         {this.renderItems()}
      </div>
         <div>
           <Dialog
            title="Create an item"
            actions={actionadd}
            modal={false}
            open={this.state.openItemAdd}
            onRequestClose={this.handlePostItem}
            autoScrollBodyContent={true}
          >
           <ItemForm
             onSubmit={this.handlePostItemForm}
           />
          </Dialog>
           <Dialog
            title="Edit an item"
            actions={actionedit}
            modal={false}
            open={this.state.openItemEdit}
            onRequestClose={this.handlePutItem}
            autoScrollBodyContent={true}
          >
            <ItemEditForm
             onSubmit={this.handlePutItemform}
            />
          </Dialog>

         </div>
       </div>
     )
   }
 }


 const mapStateToProps = (state) => {
 const { allItems, singleItem  } = state.items;
 const { singleBucketlist } = state.bucketlists;
 return { singleBucketlist, allItems, singleItem  };
 };

 export default connect(mapStateToProps, {
   getBucketlistsItems,
   getOneBucketlistItem,
   postBucketlistsItems,
   editBucketlistsItems,
   deleteBucketlistsItems})(ItemContainer);

 export { ItemContainer };
