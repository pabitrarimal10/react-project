// import { useState } from 'react'

// function TodoList() {
//   // TODO: Store in state.
//   const [todoList, setTodoList] = useState(
//     [
//       {
//         name: "Read for exam",
//         isComplete: false,
//       },
//       {
//         name: "Complete html day 1",
//         isComplete: true
//       },
//       {
//         name: "Complete html day 2",
//         isComplete: true
//       }
//     ]);

//   const [myText, setMyText] = useState("");

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           setMyText(e.target.value)
//         }}
//         value={myText}
//       ></input>
//       <h4>On Input: {myText}</h4>
//       <button onClick={() => {
//         const newArray = [
//           ...todoList,
//           {
//             name: myText,
//             isComplete: false
//           }
//         ]

//         setTodoList(
//           newArray
//         )
//         setMyText("")
//       }}
//       >
//         Click to Add
//       </button>

//       <ul>
//         {todoList.map(item => {
//           return <><li className={item.isComplete ? "complete" : ""}>{item.name}</li>
//             <button onClick={()=>{
//               const newList=todoList.map((item,itemIndex )=>{
//                 if (itemIndex == itemIndex){
//                   return{
//                     ...item,
//                     isComplete:!item.isComplete
//                   }
//                 }
//                 return item;
//               })
//               setTodoList(newList)
//               // update item isComplete
//             }}>
//               {item.isComplete ? "Revert" : "Complete"}
//             </button></>
//         })}
//       </ul>
//     </>
//   )
// }

// export default TodoList;