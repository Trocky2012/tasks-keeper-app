import React, { useState } from "react";


function CreateSection(props) {

  const [section, setSection] = useState({
    title: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSection(prevSection => {
      return {
        ...prevSection,
        [name]: value
      };
    });
  }

  function submitSection(event) {
    props.onAdd(section);
    setSection({
      title: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-section">
        <input
          name="title"
          onChange={handleChange}
          value={section.title}
          placeholder="New Section"
        />
        <button type='submit' onClick={submitSection}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateSection;
