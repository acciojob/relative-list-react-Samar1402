import React from "react";

const relatives = ["relatives1", "relatives2", "relatives3", "relatives4"];
const App = () => {
  return (
    <div id="main">
      <ol id="relativeList" key={"relativeList"}>
        {relatives.map((relatives, i) => (
          <li id={`relativeListItem${i + 1}`} key={`relativeListItem${i + 1}`}>
            {relatives}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
