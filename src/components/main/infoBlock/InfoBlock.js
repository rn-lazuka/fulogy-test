import React from 'react';
import s from './InfoBlock.module.css'

const InfoBlock = (props) => {
  return (
      <div className={s.infoBlock}>
        <button className={s.infoBtn} onClick={()=>props.setInfoPage(true)}>i</button>
        <div className={s.blockName}>Выберите цвет свечения</div>
      </div>
  );
};

export default InfoBlock;