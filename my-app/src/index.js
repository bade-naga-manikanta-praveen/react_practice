import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// ReactDOM.render( 
//    <React.StrictMode>
//         <App />
//    </React.StrictMode>
//     , document.getElementById('root')                                       
// )

//@starting with react
// ReactDOM.render(
//    <div><h1>hello world</h1><p>bye</p></div> ,
//     document.getElementById('root')
// )


// //@jsx code challenge
// const name = 'john';
// ReactDOM.render(
//     <div>
//         <h1>heading {name}</h1>
//         <ul>
//             <li>list item 1</li>
//             <li>list item 2</li>
//             <li>list item 3</li>
//         </ul>
//     </div>,
//     document.getElementById('root')
// )

//@Jsx attributes and styling
ReactDOM.render(
    <div>
      <h1 className="heading" contentEditable="true">My Favourite Foods</h1>
   
      </div>
    ,
    document.getElementById("root")
  );

reportWebVitals();
