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
import React from "react";
var isLoggedIn = true;
function App() {
  return (
    <div className="container">
      {isLoggedIn  && <h1>Hello</h1>}
       {!isLoggedIn && <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
       }
       
    </div>
  );
}

export default App;






