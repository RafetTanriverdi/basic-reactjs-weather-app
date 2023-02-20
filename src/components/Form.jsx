import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Form() {
    const [city,setCity] = useState("");
    useEffect(()=>console.log(city,[city]));

    const handleChange=()=>{
        const api ='9591601b5da8060aaa7fcc42b9c18240';
        const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
      axios(baseUrl).then(data=>console.log(data));  
    }
  return (
    <div>
        <h1>Hava Durumu</h1>
        <form  onSubmit={(e)=>{e.preventDefault();handleChange()}}>
            <div className="form">
                <input onChange={(e)=>setCity(e.target.value)} type="text" className="inputText" placeholder='Şehir giriniz'/>
            </div>
            <div className="btnDiv">
                <button type='submit' className='btn'> Verileri Getir</button>
            </div>
        </form>
    </div>
  )
}

export default Form