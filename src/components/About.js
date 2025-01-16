import User from "./User";
import UserClass from "./userClass";
// import React from "react";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("parent did mount");
  }
  render() {
    console.log("render");
    return (
      <div className="p-2 m-2">
        About
        <h1>This is my first React Project</h1>
        {/* <User name={"My Name is Akshat"} /> */}
        {/* <UserClass
          name={"My name is Akshat (Class Based)"}
          location={"Delhi"}
        /> */}
        <UserClass
          name={"My name is Akshat (Class Based)"}
          location={"Bengaluru"}
        />
      </div>
    );
  }
}
// const About = () => (
//   <div className="p-2 m-2">
//     About
//     <h1>This is my first React Project</h1>
//     {/* <User name={"My Name is Akshat"} /> */}
//     <UserClass name={"My name is Akshat (Class Based)"} />
//   </div>
// );
export default About;
