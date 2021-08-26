import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './User.css';
import { AiOutlinePhone,AiFillMail,AiOutlineHome} from "react-icons/ai";
import img from '../img/p.png'




const User = ({user}) => {
return (
        <>
        <Flippy  flipOnClick={false} flipOnHover={true} flipDirection="vertical" className='username' >
    <FrontSide >
        <div className="container">

            <h3 style={{fontSize:35,color:"#FF69B4"}}>{user.name}</h3>
            <h4>  {user.username}</h4>
            <ul>
            <li><AiOutlinePhone/>{user.phone} </li>

            <li> <AiOutlineHome/>{user.address.street}
            {user.address.suite}
            {user.address.city}
            {user.address.zipcode} </li>
            <li> <AiFillMail/> {user.email} </li>
           
            </ul>

        </div>

        </FrontSide>
        <BackSide >
            <div className="container">
            <div className='profil'>            
             <img src={img} style={{ width: 52, height: 52, borderRadius: 50}} alt="mon avatar"/>
              </div>
            
          
              <h3 >company: {user.company.name}</h3>
            <h3 >{user.company.catchPhrase}</h3>
            <h3 >{user.company.bs}</h3>
            </div>

        </BackSide>
    </Flippy>
        </>
    )
}

export default User