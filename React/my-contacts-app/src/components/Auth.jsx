import { useRef } from "react"
import App from "./contact"
import { useState } from 'react';
import Contact from "./contact.jsx"

function Auth() {
    const [rege, setAcc] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const User = "John";
    const Pass = "Doe";
    const inputUser = useRef(null)
    const inputPass = useRef(null)

    const [inpUser, setSavedUser] = useState('');
    const [inpPass, setSavedPass] = useState('');
    const [inputConfPass, setSaveConfPass] = useState('')

    const handleSave = () => {
        setSavedUser(inputUser.current.value);
        setSavedPass(inputPass.current.value);

        if (User == inpUser && Pass == inpPass) {
            setIsLoggedIn(true);
        } else {
            alert("Hello!");
        }
    }

    const makeAcc = () => {
        setAcc(true);
    }

    if (isLoggedIn) {
        return <Contact />;
    } else if (rege) {
        (
            <div className="logInField">
                <h3>Do it!</h3>
                <input className="inp" type="text" placeholder="Username" ref={inputUser}></input><br />
                <input className="inp" type="text" placeholder="Password" ref={inputPass}></input><br />
                <input className="inp" type="text" placeholder="Confirm Password" ref={inputConfPass}></input><br />
                <button onClick={handleSave}>Log In</button>
                <button onClick={makeAcc}>Register</button>
            </div >
        )
    }
    else {
        return (
            <div className="logInField">
                <h3>Do it!</h3>
                <input className="inp" type="text" placeholder="Username" ref={inputUser}></input><br />
                <input className="inp" type="text" placeholder="Password" ref={inputPass}></input><br />
                <button onClick={handleSave}>Log In</button>
                <button onClick={makeAcc}>Register</button>
            </div>
        )
    }
}


export default Auth