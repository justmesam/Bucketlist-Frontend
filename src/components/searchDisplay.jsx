import React from "react";
import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";



const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
  },
  titleStyle: {
    color: "rgb(0, 0, 0)",
  },
};

const SearchTiles = (props) => (
  <div style={styles.root}>
    <GridList  cols={2.2} cellHeight={100} style={styles.gridList}>
      {props.data.map((prop) => (
        <GridTile
          key={prop.id}
          title={prop.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          {prop.intro}
        </GridTile>
      ))}
    </GridList>
</div>
)

export default SearchTiles;
