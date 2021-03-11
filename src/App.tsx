import React from "react";
import me from "./content/me.jpg";
import words from "./content/words.png";
import fall from "./content/fall.gif";
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
      <div id="me" className="full-page">
        <main className="content justify-between">
          <div className="profile">
            <img src={me} alt="Chad Gauthier thinking at workstation" />
          </div>
          <div className="about">
            <p>I am Chad Gauthier. I am <a href="#passionate">passionate</a>, I believe in <a href="#ubuntu">Ubuntu</a>, and I am <a href="#resilient">resilient</a>. If you are looking for a creative, a problem-solver, a visionary... <br/><br/> I am your person.</p>
          </div>
        </main>
        <div>
          Do not just take my <a href="#reviews">word</a> for it.
        </div>
      </div>
      <div className="full-page black center" id="passionate">
        <div className="my-3"><a href="#me">back</a></div>
        <div><iframe src="https://www.youtube.com/embed/N-FCa-t93rM"></iframe></div>
      </div>
      <div className="full-page u-background" id="ubuntu">
        <div className="content">
          <a href="#me">back</a>
          <p className="slide">
            A person with <b>Ubuntu</b> is open and available to others, <b>affirming</b> of others, does not feel threatened that others are <b>able and good</b>, based from a proper <b>self-assurance</b> that comes from knowing that he or she belongs in a <b>greater whole</b> and is diminished when others are humiliated or diminished, when others are tortured or oppressed.
          </p>
          <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
        </div>
      <div className="full-page" id="resilient">
        <div className="content">
          <a className="my-3" href="#me">back</a>
            <p className="quote">
            “A person who falls and gets back up is much stronger than a person who never fell”
            </p>
            <p className="author">-Victor Frankl</p>
            <img src={fall} alt="Chad falling while roller blading and getting back up" />
            <p>enough said...</p>
        </div>
      </div>
      <div className="full-page" id="reviews">
        <div className="content">
          <a className="my-3" href="#me">back</a>
          <div className="tooltip">
            <span className="tooltip-text">{tooltip}</span>
            <img src={words} alt="word cloud with 6 years of most common words from one on one reports: most common words are team, work, drove, business, designed, willing, improved, completed, and many more" />
          </div>
        </div>
      </div>
    </div>
  );
}

const tooltip = "6 years of 1-1 reports visualized";

export default App;
