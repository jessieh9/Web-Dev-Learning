import React from "react";

function CreateArea(props) {
    const [noteText, setNoteText] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNoteText((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
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
            <form>
                <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={noteText.title}
                />
                <textarea
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={noteText.content}
                />
                <button onClick={submitForm}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
