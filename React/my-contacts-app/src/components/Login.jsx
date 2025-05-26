// import { useState } from 'react';
// import { useRef } from "react";

// function login() {
//     let isLoggedIn = false;
//     const User = "John";
//     const Pass = "Doe";
//     const inputUser = useRef(null);
//     const inputPass = useRef(null);

//     const [inpUser, setSavedUser] = useState('');
//     const [inpPass, setSavedPass] = useState('');

//     const handleSave = () => {
//         setSavedUser(inputUser.current.value);
//         setSavedPass(inputPass.current.value);

//         if (User === inpUser && Pass === inpPass) {
//             isLoggedIn = true;
//         }
//     }
//     return (
//         <div className="logInField">
//             <h3>Do it!</h3>
//             <input className="inp" type="text" placeholder="Username" ref={inputUser}></input><br />
//             <input className="inp" type="text" placeholder="Password" ref={inputPass}></input><br />
//             <button onClick={handleSave}>Log In</button>
//             <button>Register</button>
//         </div>
//     )
// }
// export default login