import React, { useState } from "react";
import {Button} from "reactstrap";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
    return (
      <div>
        <Button>
          Rank by pop
        </Button>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
}

export default App;
