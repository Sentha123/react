import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {


  const [colorvalue,setcolorvalue]=useState("")
  const [hexvalue,sethexvalue]=useState("")
  const [isdarkcolor,setisdarkcolor]=useState(true)
  return (
    <div className="App"> 
        <Square
        colorvalue={colorvalue}
        hexvalue={hexvalue}
        isdarkcolor={isdarkcolor}
        />
        <Input
        colorvalue={colorvalue}
        setcolorvalue={setcolorvalue}
        sethexvalue={sethexvalue}
        isdarkcolor={isdarkcolor}
        setisdarkcolor={setisdarkcolor}
        />
    </div>
  );
}

export default App;
