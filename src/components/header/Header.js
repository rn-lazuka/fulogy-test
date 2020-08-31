import React, {useState} from 'react';
import s from './Header.module.css'
import burgerMenu from '../../assets/burger-icon.png'
import closeMenu from '../../assets/close-icon.png'
import basket from '../../assets/basket.png'

const Header = (props) => {
  const [burger, setCloseBurger] = useState(burgerMenu)
  const changeIcon = () => {
    if (burger === burgerMenu) {
      setCloseBurger(closeMenu)
      props.setMenu(true)
    } else {
      setCloseBurger(burgerMenu)
      props.setMenu(false)
    }

  }
  return (
      <div className={s.headerContainer}>
        <div className={s.logo}>Fulogy</div>
        <div className={s.basketContainer}>
          <div style={{height: '20px', width: '20px', backgroundImage: `url(${basket})`, backgroundSize: 'cover'}}/>
        </div>
        <div className={s.menuContainer}>
          <div className={s.burgerMenu} style={{backgroundImage: `url(${burger})`}} onClick={changeIcon}/>
        </div>
      </div>
  );
};

export default Header;