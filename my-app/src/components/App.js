// import logo from './logo.svg';
// // import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Heading from "./heading";
// import List from "./List";

// function App() {
//   return (
//       <div>
//         <Heading />
//         <List />
//         </div>
//     );
// }



// export default App;
//@React Props Practice + React dev tools + Mapping Data to Components


// import React from "react";
// import Avatar from "./Avatar";
// import contacts from "../contacts";



// function Card(props){
//    return(
//     <div className="card">
//     <div className="top">
//       <p className="name">{props.id}</p>
//       <h2 className="name">{props.name}</h2>
//       <Avatar src_link={props.src_link}  />
//     </div>
//     <div className="bottom">
//       <p className="info">{props.tel}</p>
//       <p className="info">{props.email}</p>
//     </div>
//   </div>    
//    );
// }

// function createCard(contact){
//   return(
//     <Card 
//       key={contact.id}
//       id={contact.id}
//       name={contact.name}
//       src_link={contact.imgURL}
//       alter="avatar_img"
//       tel={contact.phone}
//       email={contact.email}
//     />
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//         {contacts.map(createCard)}
//          {/* <Card name={contacts[0].name} src_link={contacts[0].imgURL}  tel={contacts[0].phone} email={contacts[0].email}/>
//          <Card name={contacts[1].name} src_link={contacts[1].imgURL}  tel={contacts[1].phone} email={contacts[1].email}/>
//          <Card name={contacts[2].name} src_link={contacts[2].imgURL}  tel={contacts[2].phone} email={contacts[2].email}/> */}
//     </div>
//   );
// }

//@ Mapping Data to Components practice (emojipedia)
// import React from "react";
// import emojipedia from "../emojipedia.js" ;

// // function Card(props){
// //    return(
// //     <div className="card">
// //     <div className="top">
// //       <p className="name">{props.id}</p>
// //       <h2 className="name">{props.name}</h2>
// //       <Avatar src_link={props.src_link}  />
// //     </div>
// //     <div className="bottom">
// //       <p className="info">{props.tel}</p>
// //       <p className="info">{props.email}</p>
// //     </div>
// //   </div>    
// //    );
// // }

// function Card(props){
//   return(
//     <div className="term">
//     <dt>
//       <span className="emoji" role="img" aria-label={props.name}>
//         {props.emoji}
//       </span>
//       <span>{props.name}</span>
//     </dt>
//     <dd>
//       {props.meaning}
//     </dd>
//   </div>
//   );
// }

// // function createCard(contact){
// //   return(
// //     <Card 
// //       key={contact.id}
// //       id={contact.id}
// //       name={contact.name}
// //       src_link={contact.imgURL}
// //       alter="avatar_img"
// //       tel={contact.phone}
// //       email={contact.email}
// //     />
// //   );
// // }

// function CreateCard(emojipedia){
//   return(
//     <Card 
//       key={emojipedia.id}
//       emoji={emojipedia.emoji}
//       name={emojipedia.name}
//       meaning={emojipedia.meaning}
//     />
//   );
// }

// //         {contacts.map(createCard)}

// function App() {
//   return (
//     <div>
//       <h1>
//         <span>emojipedia</span>
//       </h1>

//       <dl className="dictionary">
//            {emojipedia.map(CreateCard)}
//       </dl>
//     </div>
//   );
// }

// export default App;

//@ conditional rendering 
// import React from "react";
// var isLoggedIn = true;
// function App() {
//   return (
//     <div className="container">
//       {isLoggedIn  && <h1>Hello</h1>}
//        {!isLoggedIn && <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//        }
       
//     </div>
//   );
// }

// export default App;

//@ React hooks
// import React  from "react";
// var count=0;

// function increase(){
//   count++;
//   console.log(count);
// }



// function getTime(){
//   var date=new Date();
//   return date.toLocaleTimeString();
// }

// function App(){
//   const [time,setTime]=React.useState();
//   function getTime(){
//     var date=new Date();
//     setTime(date.toLocaleTimeString());
//   }
//     return (
//       <div className="container">
//         <h1>{time}</h1>
//         {/* <button onClick={getTime}>Get Time</button> */}
//         <div className="div">{setInterval(getTime,1000) && 0}</div>
        
//       </div>
//   );
// }

//@ Event handling in React
// import React from "react";

// function App() {
  
//   const [bgcolor,setColor]=React.useState("white");
//   const [name,setName]=React.useState("");

//   const[clicked,setClicked]=React.useState(false);

//   function f(){
//     console.log("hu");
//     setColor("black");
//   }

//   function f1(){
//     console.log("bye");
//     setColor("white");
//   }

//   function handleChange(event){
//     setClicked(false);
//     // console.log(event.target.value);
//     setName(event.target.value);
//   }

//   function g(){
//     setClicked(true);
//   }

//   return (
//     <div className="container">
//       <h1>Hello {clicked && name} </h1>
//       <input
//       name="myInput"
//        type="text" placeholder="What's your name?" 
//         onChange={handleChange}
//         value={name}
//       />
//       <button onClick={g}  style={{backgroundColor : bgcolor} } onMouseOver={f} onMouseOut={f1} >Submit</button>
//     </div>
//   );
// }

// export default App;

//@ Changing Complex State
// import React from "react";

// function App() {
//     const [fname,setfName]=React.useState("");
//     const [lname,setlName]=React.useState("");
//     function f(event){
//       setfName(event.target.value);
//     }
//     function g(event){
//       setlName(event.target.value);
//     }
//   return (
//     <div className="container">
//       <h1>Hello {fname+" "+lname}</h1>
//       <form>
//         <input name="fName" placeholder="First Name" onChange={f} />
//         <input name="lName" placeholder="Last Name"  onChange={g}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";

// function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: ""
//   });

//   function handleChange(event) {
//     const { value, name } = event.target;

//     setFullName(prevValue => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: value
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName +" "+ fullName.lName}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={fullName.lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//@ Changing Complex State Practice
// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event){
//      const {name,value}=event.target;
//       setContact(prevValue=>{
//         if(name==="fName"){
//           return{
//             fName:value,
//             lName:prevValue.lName,
//             email:prevValue.email
//           };
//         }else if(name==="lName"){
//           return{
//             fName:prevValue.fName,
//             lName:value,
//             email:prevValue.email
//           };
//         }else if(name==="email"){
//           return{
//             fName:prevValue.fName,
//             lName:prevValue.lName,
//             email:value
//           };
//         }
//       });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input name="fName" placeholder="First Name" onChange={handleChange}/>
//         <input name="lName" placeholder="Last Name" onChange={handleChange}/>
//         <input name="email" placeholder="Email" onChange={handleChange}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


//@ JS ES6 Spread Operator
// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact(prevValue => {
//       return {
//         ...prevValue,
//         [name]: value
//       };
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           onChange={handleChange}
//           name="fName"
//           value={contact.fName}
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleChange}
//           name="lName"
//           value={contact.lName}
//           placeholder="Last Name"
//         />
//         <input
//           onChange={handleChange}
//           name="email"
//           value={contact.email}
//           placeholder="Email"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//@ JS ES6 Spread Operator Practice
// import React from "react";

// function App() {
//   const [arr,setarr]=React.useState([]);
//   const [item,setitem]=React.useState(""); 

//   function handleChange(event){
//     setitem(event.target.value);
//   }

//   function f(){
//     setarr(prevValue=>{
//       return [...prevValue,item];
//     });
//     setitem(" ");
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input type="text"
//           onChange={handleChange}
//           value={item} />
//         <button onClick={f}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {arr.map(todoitem=><li>{todoitem}</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

//@ Managing a component tree
// import React, { useState } from "react";
// import ToDoItem from "./TodoItem";

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   function addItem() {
//     setItems(prevItems => {
//       return [...prevItems, inputText];
//     });
//     setInputText("");
//   }

//   function deleteItem(id) {
//     setItems(prevItems => {
//       return prevItems.filter((item, index) => {
//         return index !== id;
//       });
//     });
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleChange} type="text" value={inputText} />
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map((todoItem, index) => (
//             <ToDoItem
//               key={index}
//               id={index}
//               text={todoItem}
//               onChecked={deleteItem}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

//@ Managing a component tree Practice
import React, { useState } from "react";
import ToDoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);



  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      onClick={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;




