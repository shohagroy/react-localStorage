import React from 'react';
import { setWorkToLocalStorage } from '../../utilitiy/utility';
import './DisplayData.css'


const DisplayData = props => {

    const {id, name, phone, gender, email, company, balance} = props.user
 
    const workAdded = (id)=>{
        setWorkToLocalStorage(id)
    }
    return (
        <div className='user-container'>
            <h2>Name: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Gender: {gender}</p>
            <p>Company: {company}</p>
            <p>Email: {email}</p>
            <p>Ammount: {balance}</p>
            <p>Id: {id}</p>
            <button onClick={()=> workAdded(id)}>Add to Work</button>
        </div>
    );
};

export default DisplayData;