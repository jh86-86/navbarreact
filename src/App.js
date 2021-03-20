import logo from './logo.svg';
import './App.css';
import React, {useState,useReducer,useEffect} from 'react';
import Display from './Component/Display';

function App() {

  const[pgOne,setPgOne]=useState("page");
  const[pgTwo,setTwo]=useState("invisible");
  const[pgThree,setThree]=useState("invisible");

function PageOne(){
    setPgOne("page");
    setTwo("invisible");
    setThree("invisible");
};

function pageTwo(){
  setPgOne("invisible");
  setTwo("page");
  setThree("invisible");
};

function pageThree(){
  setPgOne("invisible");
  setTwo("invisible");
  setThree("page");
}





const pageNumArr=['Home page','page two','page three'];


  return (
    <div className="App">
   
        <div className="navbar">
          <button  onClick={PageOne}>Home</button>
          <button  onClick={pageTwo}>pageTwo</button>
          <button  onClick={pageThree}>pageThree</button>
        </div>
       
            <Display state={pgOne} pageNum={pageNumArr[0]} />
            <Display state={pgTwo} pageNum={pageNumArr[1]} />
            <Display state={pgThree} pageNum={pageNumArr[2]} />
        
 




    </div>
  );
}

export default App;
