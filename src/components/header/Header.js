import React from 'react';
import Logo from '../../assets/logo.png';

import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={Logo} alt='item'className='logo' />
        <h2 className='logo_title'>
          Бизнес <br/>
          Онлайн
        </h2>
      </div>
      <div className='header_items'>
        <div className='user_info'>
          <h4>Жасур Абдуллаев</h4>
          <span>ООО «Компания»</span>
        </div>
        <div className='avatar'>

        </div>

      </div>
    </div>
  )
};

export default Header;
