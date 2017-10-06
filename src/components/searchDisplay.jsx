import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
},
gridList: {
  width: 500,
  height: 450,
  overflowY: 'auto',

},
titleStyle: {
  fontSize: "20px"
},
};

const SearchTiles = (props) => (
  <div style={styles.root}>
    <GridList style={styles.gridList}>
      {props.data.map((prop) => (
        <GridTile
          style={{overflowY: 'auto'}}
          onClick={props.view}
          key={prop.id}
          title={prop.title}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          Intro: <br/><span style={{fontSize:"20px", wordWrap: "break-word",}}> {prop.intro}</span>
        </GridTile>
      ))}
    </GridList>
</div>
)

export default SearchTiles;
