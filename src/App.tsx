import React from "react";
import me from "./content/me.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div> 
      <div className='light x8'></div>
      <div className='light x9'></div>
      <div className="full-page">
        <main className="content justify-between">
          <div className="profile">
            <img src={me} alt="Chad Gauthier thinking at workstation" />
          </div>
          <div className="about">
            <p>I am Chad Gauthier. I am <a href="#passionate">passionate</a>, I believe in <a href="#ubuntu">Ubuntu</a>, and I am <a href="#resilient">resilient</a>. If you are looking for a creative, a problem-solver, a visionary... <br/><br/> I am your person.</p>
          </div>
        </main>
      </div>
      <div className="full-page" id="passionate">

      </div>
      <div className="full-page" id="ubuntu">
      A person with Ubuntu is open and available to others, affirming of others, does not feel threatened that others are able and good, based from a proper self-assurance that comes from knowing that he or she belongs in a greater whole and is diminished when others are humiliated or diminished, when others are tortured or oppressed.
      </div>
      <div className="full-page" id="resilient"></div>
    </div>
  );
}

export default App;
