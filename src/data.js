import React from 'react'
import d from './data.json'


function Data() {
    var data = d.map( (item) => {
        return (<li>{item.category}</li>)
    })

    return(
        <ul>
           {data} 
        </ul>   
    )
}

export default Data