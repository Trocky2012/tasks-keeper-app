import React, { useState } from "react";


function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    date:"",
    content: "",
    sectionTitle: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      date:"",
      content: "",
      sectionTitle: ""
    });
    compress();
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  function compress() {
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input type="date"
            name="date"
            onChange={handleChange}
            value={note.date}
          />
        )}

        {isExpanded && (
          <select 
            name="sectionTitle"
            onChange={handleChange}
            value={note.sectionTitle}
            placeholder="Section..."
            rows={isExpanded ? 2 : 1}
          >
            {/*<option value="One">One</option>*/}
            <option value="Section">Select section...</option>
            {(props.sections).map(fbb =>
              <option key={fbb.key} value={fbb.key}>{fbb.title}</option>
            )};
          </select>
        )}  

        <input
          name="title"
          onChange={handleChange}
          onClick={expand}
          value={note.title}
          placeholder="New task..."
        />


        {isExpanded && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Write a note..."
            rows={isExpanded ? 2 : 1}
          />
        )}
        {isExpanded && (
          <button type='submit' onClick={submitNote}>
            +
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
