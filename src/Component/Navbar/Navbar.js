import React, {useReducer} from 'react';
import Display from '../Display/Display';
import css from './Navbar.module.css';

function Navbar() {

//sets the state of the pages initially only one page has a normal class

  const initialState = {
    pageOne: "page", 
    pageTwo: 'invisible', 
    pageThree:'invisible'
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case "pageOne":
        console.log("page one pressed");
        return {...state, pageOne: "page", 
        pageTwo: 'invisible', 
         pageThree:'invisible'
      };
      case "pageTwo":
        console.log("page two pressed");
        return {...state, pageOne: "invisible", 
        pageTwo: 'page', 
         pageThree:'invisible'
      };
      case "pageThree":
        console.log("page three pressed");
        return {...state, pageOne: "invisible", 
        pageTwo: 'invisible', 
         pageThree:'page'
      };
      default:
        throw new Error();
    }
  }




const [state, dispatch] = useReducer(reducer, initialState);


//an array just to give content to each Display hook,could just make seperate pages
const pageNumArr=['Home page','page two','page three'];


  return (
    <div>
{/*    
   the navbar is essentially just button wrapped in a div which styles it to look like navbar */}
        <div className={css.navbar}>
          <button  onClick={()=>dispatch({type: 'pageOne'})}>Home</button>
          <button  onClick={()=>dispatch({type: 'pageTwo'})}>Page Two</button>
          <button  onClick={()=>dispatch({type: 'pageThree'})}>Page Three</button>
        </div>
    
       {/*each page is a hook of Display but could just be seperate hook pages */}
            <Display state={state.pageOne} pageNum={pageNumArr[0]} />
            <Display state={state.pageTwo} pageNum={pageNumArr[1]} />
            <Display state={state.pageThree} pageNum={pageNumArr[2]} />
        
 




    </div>
  );
}

export default Navbar;
