import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
export default class Navbar extends React.Component{

    render(){
        return (<nav className="navbar navbar-expand navbar-light bg-light">
        <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faBookOpen}/>
       </Link>
       <div className="">
           <ul className="navbar-nav mr-auto">
               {this.props.author.map((aur)=>(
               <li className="nav-item" key={aur}>
                   <Link className="nav-link text-dark" to={`/books?searchText=${aur}`}>
                    {aur}   
                   </Link>
               </li>
               ))}
             <li className="nav-item">
                   <Link className="nav-link text-dark" to="/mybooks">
                   My Books   
                   </Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link text-dark" to="/setting">
                  Setting   
                   </Link>
               </li>
           </ul>
       </div>
</nav>);
    }
}