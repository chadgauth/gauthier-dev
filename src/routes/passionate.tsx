import React from "react";
import { Link } from "react-router-dom";

function Passionate() {
    return (
      <div className="Passionate full-page black center" id="passionate">
        <div className="my-3"><Link to="/">back</Link></div>
        <div><iframe src="https://www.youtube.com/embed/N-FCa-t93rM"></iframe></div>
      </div>
    );
  }

export default Passionate;