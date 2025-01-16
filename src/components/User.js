import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  return (
    <div className="p-2 m-2 border border-black">
      <h1>{count}</h1>
      <h2>User Name:{props.name}</h2>
      <h3>Location</h3>
    </div>
  );
};

export default User;
