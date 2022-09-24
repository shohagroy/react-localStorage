import React, { useEffect, useState } from 'react';
import DisplayData from '../DisplayData/DisplayData';

const GetData = () => {
    const [data, setData] = useState([])
    useEffect( ()=>{
        fetch('data/symple-data.json')
        .then(res => res.json())
        .then(data => setData(data))
    } , [])

    return (
        <div className='main-container'>
            {
                data.map(user => <DisplayData key={user.id} user={user}/>)
            }
        </div>
    );
};

export default GetData;