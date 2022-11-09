import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Stacknack.css"
import Stacknackdetail from './Stacknackdetail';

const Stacknack = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchData();
      },[])

    const fetchData = async () => {
        setLoading(true);
        axios ({
          method: 'get',
          url: "https://dummyjson.com/products"
        })
        .then(res => {
          setData(res.data.products);
          setLoading(false); 
          // console.log("res", res)
        })
        .catch(err => {
          setLoading(false);
        })
      }
      console.log("data", data)

    return (
      <div>
          {loading && <div>loading</div>}
          
          <div className='inputDiv'>
            <input placeholder='search any title'/>
          </div>

          <div className='mainDiv'>
            {
              data.map((e) => {
                return  <div>
                           {/* {e.brand} */}
                          <Stacknackdetail item={e} />
                         
                      
                        </div>
              }) 
            }
          </div> 
      </div>
    )
}


export default Stacknack
