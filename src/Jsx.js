import React from "react";

//Normal componets es 5


// function Jsx(){
//return React.createElement("h1", //{className:"heading"},"hello world");
//}
//  function Jsx(){

//     return React.createElement("h2",{className:"head"}, 
//      React.createElement("h3",{className:"header"},"Welcome to reactjs"))
    
//  }

//JSX --> JavaScript Xml 

// function Jsx(){
//     return <div>This div tag</div>
// }

// function Jsx(){

//     const firstName ="anji";
//     const lastName ="reddy";

//     const user = {
//         first : "srinu",
//         last : "vasureddy"
//     }

//     function primeName(user){
//         return ` ${user.first} ${user.last}`;
//     }
    
//   return (

//     <section className="container">
//     <header>
//         <h1>Welcome {firstName+" "+lastName}</h1>

//      <h1 id="time">Time change {new Date().toLocaleTimeString()}</h1>
//         <h1>And my brother he name is {primeName(user)}</h1>
//         <p>
//             This is reactjs code {10+20} and we are using javascript xml component
//         </p>
//         </header>
//         <p>
//             This is reactjs code and we are using javascript xml component
//         </p>
//         <img src="" alt="" />
//         </section>
    
//   )
  
// }


// export default Jsx

//Nested Component

  const InnerComponent = () => {
   return <h1>Inner Component</h1>
  }

   const PrintName = () => {
      return <InnerComponent />;
   };

    const Jsx = () => {
    const user = {
    firstName : "subbu",
    secondName : "paddu",
};
return (
   <section>
     <PrintName />
     <PrintName />
     <PrintName />
     <PrintName />
   </section>
   );
};
export default Jsx;
   