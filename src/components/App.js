import React, {useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";

function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(handleInitialData())
})
  

return <div className="App">
          
       </div>;
}

export default App;
