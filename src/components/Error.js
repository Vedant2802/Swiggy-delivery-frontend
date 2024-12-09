import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log("first", err);
  return <div>error</div>;
};

export default Error;
