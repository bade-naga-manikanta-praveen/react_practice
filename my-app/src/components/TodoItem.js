// import React from "react";

// function TOdoItem(props){
//     const [clicked,setClicked]=React.useState(false);
//     function handleClick(){
//         setClicked(!clicked);
//     }
//     return(
//        <li onClick={handleClick} style={
//               clicked?{textDecoration:"line-through"}:{textDecoration:"none"}
//        }>{props.text}</li>
//     )
// }

// export default TOdoItem;

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
