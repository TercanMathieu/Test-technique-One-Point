import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ELEMENT, DELETE_ELEMENT } from '../store/todoReducer';
import './liste.css'
function Liste() {
  const [text, setText] = useState('');
  const elements = useSelector((state) => state.elements || []); 
  const dispatch = useDispatch(); 
  const addString = () => {
    if (text.trim()) {
      dispatch({ type: ADD_ELEMENT, payload: text }); 
      setText('');
    }
  };

  const deleteString = (id) => {
      dispatch({ type: DELETE_ELEMENT, payload: id }); 
  };

  return (
    <div className="container">
  <ul className='list'>
    {elements.map((el, key) => (
      <div className="item" key={key}>
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
    />
    <button onClick={addString}>Ajouter</button>
  </div>
</div>
  );
}

export default Liste;
