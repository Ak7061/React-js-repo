/* I want to create html tag type div and all in react*/
{
  /* <div id="parent">
  <div id ="child">
    <h1>hello from react-js-1</h1>
    <h2>hello from react-js-1</h2>
  </div>
</div>; */
}
// I want to create like this using react:>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi this is React-h1"),
    React.createElement("h2", {}, "hi this is React-h1"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi this is React-h1"),
    React.createElement("h2", {}, "hi this is React-h1"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

/*const heading = React.createElement("h1", { id: "heading", xyz: "xyz" }, "Hello world from React-js")
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)*/
