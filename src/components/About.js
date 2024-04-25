import React from "react";
import Links from"./Links"

function About(props){
  function Isbio (props){ 
  if (props.bio){
    return <p>{props.bio}</p>
  } 
 return  null
}
  return (
    <div id="about">
      <h2>About Me</h2>
      < Isbio bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {console.log(props.links)}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
