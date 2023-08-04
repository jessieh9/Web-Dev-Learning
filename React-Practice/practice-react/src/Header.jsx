import React from "react";

const hour = new Date(2019, 1, 1, 12).getHours();

const customStyle = {
  color: ""
}

let greeting;
// 1 -11 (morning)red, 12 - 18 (afternoon) gree, 19-0 (evening) blue
if ((hour >= 1) && (hour <= 11)) {
  greeting = "Good morning";
  customStyle.color = 'red';
} else if ((hour >= 12) && (hour <= 18)) {
  greeting = "Good afternoon";
  customStyle.color = 'green';
} else {
  greeting = "Good evening";
  customStyle.color = 'blue';
}

function Heading() {
    return <h1 className="heading" style={customStyle}>{greeting}</h1>;
}

export default Heading;