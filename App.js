const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, "hello World"),
  React.createElement("div", { id: "children2" }, "hello world2"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(">>>", parent);
