import React from 'react';
import { useState } from "react";

function Input(props){
    var addItem = props.addItem;
    var [inputValue, setValue] = useState("");

    return(<div>
        할 일: <input type="text" value={inputValue} onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={function(e) {
            addItem(inputValue);
        }}>저장</button>
    </div>);
}
export default Input;