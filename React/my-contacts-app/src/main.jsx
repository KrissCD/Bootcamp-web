import ReactDOM from 'react-dom/client'
import reach from 'react'
import "./index.css"

import Contact from './components/contact'
import Auth from './components/Auth'

let login =
  <>
    <h1>Hello, LOG IN!</h1>
    <Auth />
  </>

let content =
  <>
    <h1>My Contacts</h1>
    <Contact />
  </>

const logged_in = false

let shown = login

if (logged_in) {
  shown = content
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(shown);
