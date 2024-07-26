import React from "react";

const relatives = ["relatives1", "relatives2", "relatives3", "relatives4"];
const App = () => {
  return (
    <div id="main">
      <ol key={"relativeList"}>
        {relatives.map((relatives, i) => (
          <li key={`relativesListItem&{i+1}`}>{relatives} </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
