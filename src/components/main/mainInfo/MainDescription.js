import React from 'react';
import s from './MainInfo.module.css';

const MainInfo = () => {
  return (
      <div className={s.descriptionContainer}>
        <div className={s.infoContainer}>
          <div className={s.itemInfo}>
            <span className={s.property}>Класс:</span>
            <span className={`${s.description} ${s.special}` }>Standart</span>
          </div>
          <div className={s.itemInfo}>
            <span className={s.property}>Потребляемая мощьность:</span>
            <span className={s.description}>59 Вт.</span>
          </div>
          <div className={s.itemInfo}>
            <span className={s.property}>Сила света:</span>
            <span className={s.description}>3495 Люмен = 7,5 ламп накаливания по 40 Вт.</span>
          </div>
          <div className={s.itemInfo}>
            <span className={s.property}>Гарантия:</span>
            <span className={s.description}>3 года</span>
          </div>
          <div className={s.itemInfo}>
            <span className={s.property}>Монтаж:</span>
            <span className={s.description}>Да</span>
          </div>
          <div className={s.itemInfo}>
            <span className={s.property}>Итого сумма:</span>
            <span className={s.description}>2594 рублей</span>
          </div>
        </div>
      </div>
  );
};

export default MainInfo;