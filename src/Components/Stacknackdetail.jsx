import React from 'react'
// import ".Stacknackdetail/.css"

const Stacknackdetail = ({ item }) => {
    return (
        <div>
            <p>{item.e}</p>
            <img src={item.thumbnail} />
            <div>{item.brand}</div>
            <p>{item.category}</p>
            
        </div>
    )
}

export default Stacknackdetail
