import React, { useEffect,useState } from 'react'
import axios from 'axios';

function Form({setInfo,setState}) {
    const [city,setCity] = useState("");
    

    const handleChange=async()=>{
        const api ='9591601b5da8060aaa7fcc42b9c18240';
        const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
      await axios(baseUrl).then(res=>setInfo(res.data));  

      setState(true);
      
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