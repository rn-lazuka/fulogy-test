import React, {useState} from 'react';
import s from './Thumbnails.module.css'
import daylight from '../../../assets/daylight.png'
import warmlight from '../../../assets/warmlight.png'
import coldlight from '../../../assets/coldlight.png'
import checkMark from '../../../assets/check-mark.png'


const Thumbnails = (props) => {
  const [activeLight, setActiveLight] = useState(1)
  const changeLightColor = (number) => {
    setActiveLight(number)
    let lightPower = '1'
    number === 1
        ? lightPower = '1'
        : number === 2
        ? lightPower = '0.9'
        : lightPower = '0.8'
    props.setLightColor(lightPower)
  }
  return (
      <div className={s.container}>
        <div className={s.item}
             style={{backgroundImage: `url(${warmlight})`, backgroundSize: 'cover'}}
             onClick={() => changeLightColor(1)}>
          {activeLight === 1
              ? <div className={s.choice} style={{backgroundImage: `url(${checkMark})`, backgroundSize: 'cover'}}/>
              : null}
          Теплый
        </div>
        <div className={s.item}
             style={{backgroundImage: `url(${daylight})`, backgroundSize: 'cover'}}
             onClick={() => changeLightColor(2)}>
          {activeLight === 2
              ? <div className={s.choice} style={{backgroundImage: `url(${checkMark})`, backgroundSize: 'cover'}}/>
              : null}
          Дневной
        </div>
        <div className={s.item}
             style={{backgroundImage: `url(${coldlight})`, backgroundSize: 'cover'}}
             onClick={() => changeLightColor(3)}>
          {activeLight === 3
              ? <div className={s.choice} style={{backgroundImage: `url(${checkMark})`, backgroundSize: 'cover'}}/>
              : null}
          Холодный
        </div>
      </div>
  );
};

export default Thumbnails;