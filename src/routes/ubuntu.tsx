import React from "react";
import { Link } from "react-router-dom";

function Ubuntu() {
    return (
        <div className="Ubuntu full-page u-background" id="ubuntu">
            <div className="content">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <Link to="/">back</Link>
                <p className="slide">
                    A person with <b>Ubuntu</b> is open and available to others, <b>affirming</b> of others, does not feel threatened that others are <b>able and good</b>, based from a proper <b>self-assurance</b> that comes from knowing that he or she belongs in a <b>greater whole</b> and is diminished when others are humiliated or diminished, when others are tortured or oppressed.
                </p>
          </div>
        </div>
    );
  }

export default Ubuntu;