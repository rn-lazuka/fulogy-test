import React from 'react';
import s from './Menu.module.css';

const Menu = () => {
  return (
      <div className={s.container}>
            <div className={s.item}>Обучающее видео</div>
            <div className={s.item}>Оформление заказа</div>
            <div className={s.item}>Оплата</div>
            <div className={s.item}>Доставка</div>
            <div className={s.item}>Гарантия</div>
            <div className={s.item}>Возврат</div>
            <div className={s.item}>Контакты</div>
            <div className={s.item}>Партнёрам</div>
      </div>
  );
};

export default Menu;