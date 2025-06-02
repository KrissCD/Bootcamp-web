 import { Link } from "react-router-dom";

 const Navbar = () => {
   return (
     <nav>
       <ul>
         <ul>
           <Link to="/">Home</Link>
         </ul>
         <ul>
           <Link to="/about">About</Link>
         </ul>
         <ul>
           <Link to="/contact">Contact</Link>
         </ul>
       </ul>
     </nav>
   );
 }

 export default Navbar