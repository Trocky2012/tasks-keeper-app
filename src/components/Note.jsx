import React from "react";

import Popup from 'reactjs-popup';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" 
      style={{
        backgroundColor: ((new Date())-((new Date(props.date)))>0 ? '#F4A3A3' : '#fff'), 
      }}>
      <h6>{props.date}</h6>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Popup trigger={<button >Del</button>}
          position="right center">
          <div >Delete this task?</div>
          <button onClick={handleClick}>Delete</button>
      </Popup>
    </div>
  );
}

export default Note;
