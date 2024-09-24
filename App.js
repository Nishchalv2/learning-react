import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 id="heading">Namaste React</h1>; // this line is same as above line

// React Components - There are 2 types of components - Class Based(Old) and Functional Components(New).

const Title = () => {
  return <h1>React Functional Title</h1>;
};

const ComponentHeading = () => {
  return (
    <div>
      {jsxHeading}
      <Title />
      <h1>Hi All This React Functional Component</h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ComponentHeading />);
