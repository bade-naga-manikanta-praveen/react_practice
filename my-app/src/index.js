import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import pie,{doublepi,triplepi} from './math.js';
import * as cal from './calculator.js'

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
// ReactDOM.render(
//     <div>
//       <h1 className="heading" contentEditable="true">My Favourite Foods</h1>
   
//       </div>
//     ,
//     document.getElementById("root")
//   );


// const current_time1=new Date().toLocaleTimeString();
// var time=current_time1.slice(0,2);
// var Am_or_pm=current_time1.slice(9,11);
// //convert time string to number
// time=Number(time);
// var wishString;
// if(Am_or_pm=="AM"){
//   wishString="Good Morning";
// }
// else if(time>=1 && time<=6){ 
//   wishString="Good Afternoon";
// }
// else{
//   wishString="Good Evening";
// }
// const customStyle={
//   color:"red"
// }
// if(wishString=="Good Afternoon"){
//   customStyle.color="green";
// }
// else if(wishString=="Good Evening"){
//   customStyle.color="blue";
// }

// ReactDOM.render(
//  <h1 className='heading' style={customStyle}>{wishString}</h1>,
//   document.getElementById('root')
// )

//@ React Components

// function Heading(){
//   return <h1>My Favourite Foods</h1>;
// }

// import Heading from "./heading";
// import List from "./List";

// ReactDOM.render(
//     <div>
//       <Heading />
//       <List />
//       </div>
//     ,
//     document.getElementById("root")
//   );

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

//@Import export and modules deepdive
// ReactDOM.render(
//   <ul>
//     <li>{pie}</li>
//     <li>{doublepi()}</li>
//     <li>{triplepi()}</li>
//   </ul>,
//   document.getElementById('root')
// )
//@Import export and modules deepdive practice
// ReactDOM.render(
//   <ul>
//      <li>{cal.add(1,2)}</li>
//      <li>{cal.subtract(2,1)}</li>     
//      <li>{cal.multiply(1,2)}</li>
//      <li>{cal.divide(1,2)}</li>
//   </ul>,
//    document.getElementById('root')
// )

//@ React Props
// function Card(props){
//    console.log(props);
//    return(
//       <div className='my-style'>
//   <h2>{props.name}</h2>
//     <img
//       src={props.src_link}
//       alt={props.alter}
//     />
//     <p>{props.tel}</p>
//     <p>{props.email}</p>
//       </div>
//    );
// }

// ReactDOM.render(
//   <div>
//     <h1>My Contacts</h1>
//     <Card name="Beyonce" src_link="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//        alter="avatar_img" tel="+123 456 789" email="b@beyonce.com" />
//     <Card name="Jack Bauer" src_link="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//          alter="avatar_img" tel="+987 654 321" email="jack@nowhere.com" />
//     <Card  src_link="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//          alter="avatar_img" tel="+918 372 574" email="gmail@chucknorris.com" />
//   </div>,
//   document.getElementById("root")
// );

//@React Props Practice + React dev tools + Mapping Data to Components+emojipedia+conditional rendering
ReactDOM.render(<App />, document.getElementById("root"));


reportWebVitals();
