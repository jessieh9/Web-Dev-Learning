import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [noteText, setNoteText] = React.useState({
        title: "",
        content: ""
    });
    const [isExpanded, setExpand] = React.useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setNoteText((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function expand() {
        setExpand(true);
    }

    function submitForm(event) {
        props.onAdd(noteText);
        setNoteText({
            title: "",
            content: ""
        })

        event.preventDefault();
    }


    return (
        <div>
            <form className="create-note">
                {isExpanded ? <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={noteText.title}
                /> : null}

                <textarea
                    onChange={handleChange}
                    onClick={expand}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={noteText.content}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitForm}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
