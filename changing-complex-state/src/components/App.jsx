import React from "react";

function App() {
  // const [fname, setFname] = React.useState("");
  // const [lname, setLname] = React.useState("");
  const [fullName, setFullName] = React.useState({
    fname: "",
    lname: ""
  });
  const [buttonColor, setButtonColor] = React.useState("white");

  // function handleFChange(event) {
  //   console.log("Changed first.");
  //   setFname(event.target.value);
  // }

  // function handleLChange(event) {
  //   console.log("Changed Last");
  //   setLname(event.target.value);
  // }
  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prev) => {
      if (name === "lName") {
        return {
          fname: prev.fname,
          lname: value
        };
      } else if (name === "fName") {
        return {
          fname: value,
          lname: prev.lname
        };
      }
    });
  }

  function handleMouseOver() {
    setButtonColor("black");
  }

  function handleMouseOut() {
    setButtonColor("white");
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button
          style={{ backgroundColor: buttonColor }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
