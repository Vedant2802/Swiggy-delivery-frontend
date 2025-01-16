import React, { use } from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    super(props);
    {
      // console.log(props);
    }
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        // avatar_url: "url",
      },
    };
    console.log("child Constructor");
  }
  // RENDER CYCLE Last Step
  async componentDidMount() {
    console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/Vedant2802");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  // AFTER the Render cycle and the state update , the render cycle is called again.
  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // const { name } = this.props;
    // const { count } = this.state;
    // const onClickHandler = () => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // };
    console.log("child Render");
    const { avatar_url } = this.state.userInfo;
    debugger;
    return (
      <div className="p-2 m-2 border border-black">
        {/* <h1>Count:{count}</h1> */}
        {/* <button onClick={onClickHandler}>Count Increase</button> */}
        {/* <h1>Count:{count2}</h1> */}
        <h2>User Name:{this.state.userInfo.name}</h2>
        <img src={avatar_url} />
        <h3>Location:{this.state.userInfo.location}</h3>
        <h4>Contact: Akshat Vedant</h4>
        {/* <User /> */}
      </div>
    );
  }
}

export default UserClass;
