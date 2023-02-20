import React from 'react'
import{WiSunset} from'react-icons/wi';

function Info() {
  return (
    <div className="info">
        <p id="sehir">
            Şehir, Ülke
        </p>
        <div className="genelDeger">
            <p id="sicaklik">--</p> <WiSunset className='fa-c'/>
        </div>
        <div className="his">
            <p id="hissedilen">Hissedilen</p> <WiSunset className='fa-c'/>
        </div>
    </div>
  )
}

export default Info