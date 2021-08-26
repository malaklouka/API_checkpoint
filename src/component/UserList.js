import React, {useEffect,useState} from 'react'
import axios from 'axios'
import User from './User';
import '../App.css'
import './User.css';



const UserList = () => {
    const [listOfUSer, setlistOfUSer] = useState([])
    const [error, setError] = useState(null);
    
    /******Use axios to Get data from the link inside useEffect hooks */
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setlistOfUSer(res.data))
            .catch(err => setError(err));
    }, [])
    return (
        /**map the list */
        <div className="list" >
        { listOfUSer.map((user, index)=> (
            <div key={index} >
                <User user={user}/>
            </div>
            ))}
        </div>
       


          
    )
}

export default UserList
