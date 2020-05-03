import React from 'react'
import { Link } from 'react-router-dom';

const Useritem =(props)=>{
   // here is only javascript

        const {login,avatar_url,html_url,id }=props.user;
        return (//here is only html code
         
            <div className="card text-center">
               <img src={avatar_url} alt="" className="round-img"
               style={{width:'60px '}}></img>
               <h3>{login}</h3>
              <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        )
    }


export default Useritem
