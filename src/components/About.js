import React from "react";
import user from "../data/user";
import Links from "../components/Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio ? <p>{user.bio}</p>: null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />


    </div>
  );
}


export default About;
