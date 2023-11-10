import React from 'react';

import { useState } from "react";

function Item({todo, removeItem, updateItem}) {
    // {no:1, title:"밥 먹기", done:false}
    // 구조분해 할당
    // var {todo, removeItem} = props;
    const [title, setTitle] = useState(todo.title);
    return (<li>
        <input type="checkbox" checked={todo.done?"checked":""} onChange={function(e){
            todo.done = !todo.done;
            // App.js의 수정 기능 호출
            updateItem(todo);
        }} />
        <input type="text" 
            onChange={(e)=>{setTitle(e.target.value);}} 
            style={{textDecoration: (todo.done?"line-through":"none")}} 
            value={title} 
            className="todoInput" />
        <button onClick={(e)=>{
            todo.title = title;
            updateItem(todo);
        }}>확인</button>
        <button onClick={(e) => {
            // 삭제 기능 호출
            removeItem(todo);
        }}>삭제</button>
    </li>);
}

export default Item;