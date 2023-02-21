import React from 'react'
import { WiSunset } from 'react-icons/wi';

function Info({ info, state }) {
  return (

    <>
      {

        state ?
          <div className="info">
            <p id="sehir">
              {info.name},{info.sys.country}
            </p>
            <div className="genelDeger">
              <p id="sicaklik">{Math.floor(info.main.temp)} °C</p> <WiSunset className='fa-c' />
            </div>
            <p id='havaDurumu'>{info.weather[0].description}</p>
            <div className="his">
              <p id="hissedilen">{Math.floor(info.main.feels_like)} °C</p> <WiSunset className='fa-c' />
            </div>
          </div> : null

      }
    </>

  )
}

export default Info