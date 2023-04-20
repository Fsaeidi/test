import './App.css';
import Header from './component/header.jsx';
import Course from './component/courses';
import Footer from './component/footer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [toDo, setToDo] =useState([
    {title:"math",text:"saeidi" ,id:uuidv4()},
    {title:"physic",text:"salehi" ,id:uuidv4()},
    {title:"chemist",text:"raie" ,id:uuidv4()},
    {title:"chemist",text:"raie" ,id:uuidv4()}
  ])

  return (
    <div>

    <Header/>
    
   <div className="inline">
{toDo.map(item => (
  <Course
   
    title={item.title} 
    text={item.text}
    key={item.id}/>
 
))}
  
 
   </div>
 <hr/>

   <Footer className="footer">copy right 2023 -Farzane seidi </Footer> 

  </div>

  
    /*<div className="App">
      <h1>{name}</h1>
      <button onClick={handClick}>change name</button>
    </div>*/
  );
}

export default App;
