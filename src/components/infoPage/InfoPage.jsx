import React from 'react';
import s from './InfoPage.module.css';

const InfoPage = (props) => {
  return (
      <div className={s.mainContainer}>
        <button className={s.btn} onClick={() => props.setInfoPage(false)}>
          <span>&lt; Вернуться</span>
        </button>
        <div className={s.description}>
          "Casual" - это свободный и динамический стиль....
        </div>
      </div>
  );
};

export default InfoPage;