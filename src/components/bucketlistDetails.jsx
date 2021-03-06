import React from "react";
import {Card, CardHeader, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Chip from "material-ui/Chip";



const Details = (props) => (
  <Card style={{
    display: "inline-block",
    margin: 12,
    width: "40vw",
    transitionDuration: "0.3s"}}
    onClick={props.getDetails}
    >
    <CardHeader
      title={props.title}
    />
    <CardText >
      <p style={{wordWrap: "break-word"}}>{props.intro}</p>
      <div style={{
    display: "flex",
    flexWrap: "wrap",
  }}>
      <Chip style={{margin:"2px"}}>
        {props.date}
      </Chip>
      <Chip style={{margin:"2px"}}>
        {props.dateUpdated}
      </Chip>
      </div>
    </CardText>
      <FlatButton primary={true} onClick={props.view} label="View items" />
      <FlatButton
        style={{
         marginRight: 0}}
         backgroundColor="#eaeaeb"
        label="Edit" onClick={props.edit}/>
      <FlatButton
        style={{
         marginRight: 0}}
        label="Delete" secondary={true} onClick={props.delete}/>
  </Card>
);

export default Details;
