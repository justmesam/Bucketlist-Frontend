import React from "react";
import { Link  } from "react-router-dom";

const NotFound = () =>
<div style={{textAlign:"center", marginTop:"15px", fontSize: "20px"}}>
  <h3> Sorry, Page Not Found </h3>
  <p>
    Hey, you seem lost follow me to get back home, <Link to="/" > HOME</Link>
  </p>
</div>

export default NotFound;
