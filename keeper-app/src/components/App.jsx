import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function createNote(note) {
    return <Note
        key={note.key}
        title={note.title}
        content={note.content}
    />;
}


function App() {
    return (
        <>
            <Header />
            {notes.map(createNote)}
            <Footer />
        </>
    );
}

export default App;