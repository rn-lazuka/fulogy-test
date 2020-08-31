import React from 'react';
import s from './ButtonBlock.module.css'

const ButtonBLock = (props) => {
  return (
      <button className={props.i === props.activeBtn ? `${s.navBtn} ${s.activeBtn}` : s.navBtn}
              onClick={() => props.onBtnClick(props.i)}>
        {props.buttonName}
      </button>
  );
};

export default ButtonBLock;