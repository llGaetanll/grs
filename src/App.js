import React from "react";

export const App = () => {
  return (
    <div>
      <h1 css={{ textDecoration: "underline hotpink 5px" }}>Hello New World</h1>
      <p>{new Date().toString()}</p>
    </div>
  );
};
