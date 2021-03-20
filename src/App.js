import logo from './logo.svg';
import './App.css';
import React, {useState,useReducer,useEffect} from 'react';
import Display from './Component/Display';

function App() {

//sets the state of the pages initially only one page has a normal class
  const[pgOne,setPgOne]=useState("page");
  const[pgTwo,setTwo]=useState("invisible");
  const[pgThree,setThree]=useState("invisible");


// a function for each button onClick which changes state of the pages
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




//an array just to give content to each Display hook,could just make seperate pages
const pageNumArr=['Home page','page two','page three'];


  return (
    <div className="App">
{/*    
   the navbar is essentially just button wrapped in a div which styles it to look like navbar */}
        <div className="navbar">
          <button  onClick={PageOne}>Home</button>
          <button  onClick={pageTwo}>pageTwo</button>
          <button  onClick={pageThree}>pageThree</button>
        </div>
       
{/* 
       each page is a hook of Display but could just be seperate hook pages */}
            <Display state={pgOne} pageNum={pageNumArr[0]} />
            <Display state={pgTwo} pageNum={pageNumArr[1]} />
            <Display state={pgThree} pageNum={pageNumArr[2]} />
        
 




    </div>
  );
}

export default App;
