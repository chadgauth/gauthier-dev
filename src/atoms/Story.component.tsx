  
import React, { FunctionComponent, HTMLAttributes } from 'react';

const styles = {
    fontSize: 15,
    padding: '3px 10px',
    margin: 10,
  };

const flex = {
    display: 'flex',
    flex: 'row',
}

const bigger = {
    width: '25vw'
}
  
  export interface StoryProps { customerNeed: string; summarizedResult: string; obstacle?: string; actions:string[]; results:string[]; lesson?: string };
  const Story: FunctionComponent<StoryProps> = ({ customerNeed, summarizedResult, actions, results, obstacle, lesson }) => (
    <div style={styles}>
      <h1>{customerNeed}</h1>
      <h2>{ summarizedResult }</h2>
      <h3>{obstacle}</h3>
      <div style={flex}>
          <div style={bigger}>
          <h3>Actions:</h3>
          <div>{actions.map((action: string) => (
                <li>
                {action}
                </li>
            ))}</div>
          </div>
          <div style={bigger}>
          <h3>Results:</h3>
          <div>{results.map((result: string) => (
                <li>
                {result}
                </li>
            ))}</div>
          </div>
      </div>
      <br></br>
      <footer><b>{lesson}</b></footer>
    </div>
  );
  
  Story.displayName = 'Story';
  
  export default Story;