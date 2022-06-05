import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

const InputArea = (props) => {
    const [isExpanded, setExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const handleChange = (event) => {
        const {name, value} = event.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const expand = () => {
      setExpanded(true);
    }
    return (
        <>
            <form onSubmit={(e) => {e.preventDefault()}}>
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title" />
                )}
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1} />
               <Zoom in={isExpanded}>
                    <button onClick={() => {
                        props.click(note)
                        setNote(() => {
                            return {
                                title: "",
                                content: ""
                            };
                        })
                    }}>
                        <AddIcon />
                    </button>
               </Zoom>
            </form>
        </>
    );
}

export default InputArea