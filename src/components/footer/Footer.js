import React, {useState} from 'react';
import s from './Footer.module.css'
import ButtonBLock from './ButtonBLock';

const Footer = () => {
  const [activeBtn, setActiveBtn] = useState(null)

  const navInfoMenu = ['Вариант кухни', 'Размеры', 'Сенсор', 'Питающий кабель', 'Блок питания', 'Цвет свечения', 'Монтаж', 'Корзина']
  const onBtnClick = (index) => {
    setActiveBtn(index)
  }

  const btnBlock = navInfoMenu.map((el, i) => <ButtonBLock key={i}
                                                           i={i}
                                                           buttonName={el}
                                                           onBtnClick={onBtnClick}
                                                           activeBtn={activeBtn}/>
  )
  return (
      <div className={s.container}>
        {btnBlock}
      </div>
  );
};

export default Footer;