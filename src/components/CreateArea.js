import React, { useState } from "react";
//import AddIcon from "@material-ui/icons/Add";
import AddIcon from '@mui/icons-material/Add';

import Fab from "@material-ui/core/Fab";
//Floating action button

import Zoom from "@material-ui/core/Zoom"; // For expanding effect use zzom component
//import ZoomInIcon from '@mui/icons-material/ZoomIn';

function CreateArea(props) {
  const [isExpanded, SetExpanded] = useState(false);

  function HandleExpansion() {
    SetExpanded(true);
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
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
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          onClick={HandleExpansion}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
