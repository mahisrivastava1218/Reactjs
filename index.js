import React from "react"
import ReactDom from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// createRoot(document.getElementById('root')).render(<h1>Your App</h1>)
// render is used to show
// render method it read only one element like heading here h1,show we can use div to show multiple element
// ReactDom.render(<h1>Here is mahi</h1>,
// document.getElementById('root'))


// ReactDom.render(<div><h1>Here is mahi</h1><p>Web developer</p> <h2>follow me on github</h2> </div>,
// document.getElementById('root'))

// use comma to separate array
// const arr=['mahi','dhira','rupa','mavie']
// ReactDom.render(
// [
// <h1>Here is mahi</h1>,<p>Web developer</p>, <h2>follow me on github</h2>
// ],
// document.getElementById('root'))


// this can be use react18 update react

// const root=ReactDom.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <h1>this is mavie</h1>
//   </div>
// );
// reportWebVitals();

// to not create extradiv we use reactfragment u can see in console
// const root=ReactDom.createRoot(document.getElementById('root'));
// root.render(
//   <React.Fragment>
//     <h1>this is mavie</h1>
//     <p>five important project for frontend developer</p>
//     <ol>
//       <li>Social media application</li>
//       <li>Todo list</li>
//       <li>Resume builder</li>
//       <li>Crud application</li>
//       <li>Image-gallery</li>
//     </ol>
//   </React.Fragment>
// );
// reportWebVitals();

// root id is assign to index.html in react-app
const root=ReactDom.createRoot(document.getElementById('root'));
// const name='mavie';
// const rollnumber=90;
// jsx(html) ke andar js ko use krrhe h toh {} use kre
// root.render(
//   <React.Fragment>
//     <h1>{name}</h1>
//     <p>my rollnumber is {19*19}</p>
//     {/* it will give random no. */}
//     <p>{Math.random()}</p>
   
//     {/* <p>{                 {/* can't use expression like this under{} */}
//         {/* if({rollnumber}>4){
//           console.log(true)
//         }else{
//           console.log(false)
//         }
//       } */}
//     {/* </p> */} 
//   </React.Fragment>
// );


const name='Mahi';
// const date= new Date().getDate(); 
// const currdate =new Date().toLocalString();
      // to get current time
const currdate =new Date().toLocaleDateString();

// to get time
// const time=new Date().getTime();
// current time
const time =new Date().toLocaleTimeString();
root.render(
   
  <>
  {/* /href= jsx attribute */}
    <h1>HELLO MEET TO {name}</h1>
    <p>Current date is = {currdate}</p>
    <p>Current time is = {time}</p>
  </>
);
reportWebVitals();


