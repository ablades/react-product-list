import React from 'react'
import d from './data.json'


function Data() {
    let data = d.map( (item) => {
        return item.category
    })

    const categorieSet = new Set(data)
    const categorieUnique = Array.from(categorieSet)

    //Objeckts.keys(dataUnqie)

    return(
        <div>
           {categorieUnique}   
        </div>
    )
}

export default Data

