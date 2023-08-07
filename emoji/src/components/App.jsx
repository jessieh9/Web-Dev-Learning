import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


// using map for filtering purpose
// var description = emojipedia.map(function (emoji) {
//   return emoji.meaning.substring(0, 100);
// });

// console.log(description);

function createEntry(emojis) {
  return (
    <Entry
      key={emojis.id}
      symbol={emojis.emoji}
      title={emojis.name}
      description={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
