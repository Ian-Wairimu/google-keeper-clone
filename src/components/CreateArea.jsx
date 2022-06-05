import React, {useState} from "react";
import "./styles/create.module.css"
import Note from "./Note";
import InputArea from "./InputArea";

const CreateArea = () => {
    const [notes, setNotes] = useState([]);
    const handleClick = (note) => {
      setNotes((value) => {
          return [note, ...value];
      });
    }
    const handleDelete = (id) => {
      setNotes((prevValue) => {
         return prevValue.filter((_, index) => {
              return id !== index;
          })
      })
    }
    return (
        <>
            <div>
                <InputArea click={handleClick} />
                {
                    notes.map((noteItems, index) => {
                       return <Note
                           key={index}
                           id={index}
                           title={noteItems.title}
                           content={noteItems.content}
                           delete={handleDelete}
                       />
                    })
                }
            </div>
        </>
    );
}

export default CreateArea;