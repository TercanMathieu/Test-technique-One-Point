import React, { useState } from 'react';
import { Todo, TodoList } from './type'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ELEMENT, DELETE_ELEMENT, CHANGE_STATE_ELEMENT } from '../store/todoReducer';
import './liste.css'

function Liste() {
  const [text, setText] = useState('');
  const elements = useSelector((state: TodoList) => state.elements || []); 
  const dispatch = useDispatch(); 

  const addString = () => {
    if (text.trim()) {
      dispatch({ type: ADD_ELEMENT, payload: {text, completed: false} }); 
      setText('');
    }
  };

  const deleteString = (id : number) => {
      dispatch({ type: DELETE_ELEMENT, payload: id }); 
  };

  const changeState = (id: number) => {
      dispatch({ type: CHANGE_STATE_ELEMENT, payload: id });
  }

  return ( 
    <div className="container">
    <ul className="list">
      {elements.map((el: Todo, key: number) => (
        <div className="item" key={key}>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={el.completed}
              onChange={() => changeState(el.id)}
            />
            <span className="checkmark"></span>
          </label>
          <li>{el.text}</li>
          <button onClick={() => deleteString(el.id)}>delete</button>
        </div>
      ))}
    </ul>
  
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={addString}>Ajouter</button>
    </div>
  </div>
  );
}

export default Liste;
