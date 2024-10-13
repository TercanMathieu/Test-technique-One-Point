import {useEffect, useState } from 'react';
function Liste() {

useEffect(()=> {
    const storedList = localStorage.getItem('liste')
    if (storedList) {
        setList(JSON.parse(storedList));

    }
},[])

  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  function addString ({storeList}) {
    setList([...list, text])
    console.log([...list, text]); 
    localStorage.setItem('myList', JSON.stringify([...list, text]));
    setText('')
  }

 
  return (

    <div>
      <ul>
      {list.map((el, key)=> {
        return (
          <div key={key}>
            <li> {el} </li>
            </div>
        )
      })}
      </ul>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addString}>button</button>
    </div>

  );
};

export default Liste;
