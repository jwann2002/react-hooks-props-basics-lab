import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the <p> element only if the bio prop is provided */}
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass github and linkedin props to Links */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
