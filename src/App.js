import React from 'react';

import { useEffect, useState } from "react";
import "./App.css"
import Input from "./Input";
import List from "./List";

function App() {
  const [todoList, setTodoList] = useState([
    {no:1, title:"밥 먹기", done:false},
    {no:2, title:"청소 하기", done:true},
    {no:3, title:"취직 하기", done:false},
    {no:4, title:"여행 하기", done:false}
  ]);
  const [noCnt, setNoCnt] = useState(todoList.length+1);

useEffect(function() {
  let todoListData = localStorage.getItem("todoListData");
  if(todoListData != null) {
    let todoListObj = JSON.parse(todoListData);
    setTodoList(todoListObj.todoList);
    setNoCnt(todoListObj.noCnt);
  }
}, []);

  // localStorage.setItem("user", "이예지");

  function saveData() {
    localStorage.setItem("todoListData", JSON.stringify({todoList, noCnt}));
  }

  function addItem(msg) {
    // todoList에 바로 새 아이템을 추가 할 수 없다.(상수니까)
    // todoList의 배열을 복제해서 새 todo 아이템을 추가한다.
    // 그리고 복제된 새 배열을 setTodoList 한다.
    // 데이터를 복제 할때 스프레드 연산자 사용
    //var newList = [...todoList];
    //newList.push({no:noCnt++, title:msg, done:false});
    //setTodoList(newList);
    setTodoList([...todoList, {no:noCnt, title:msg, done:false}]);
    setNoCnt(noCnt+1);
    saveData();
  }

  function removeItem(todo) {
    //let no = todo.no;
    // filter()나 findIndex()사용
    let index = todoList.findIndex(function(item, i, arr){
      return item.no === todo.no;
    });
    var newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
    saveData();
    saveData(newList, noCnt);
  }

  function updateItem(todo) {
    let index = todoList.findIndex(function(item, i, arr){
      return item.no === todo.no;
    });
    var newList = [...todoList];
    newList[index] = todo;
    setTodoList(newList);
    saveData();
    saveData(newList, noCnt);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List v0.1</h1>
      </header>
      <Input addItem={addItem} />
      <hr />
      <List todoList={todoList} removeItem={removeItem} updateItem={updateItem} />
    </div>
  );
}

export default App;