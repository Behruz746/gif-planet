import React from "react";
import { styles, textStyles } from "./util/styles";

function App() {
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${textStyles.title}`}>Hello World</h1>
    </div>
  );
}

export default App;
