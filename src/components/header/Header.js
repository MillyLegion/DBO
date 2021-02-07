import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';
import { ReactComponent as Notification } from '../../assets/icons/notification.svg';
import { ReactComponent as Download } from '../../assets/icons/dowload.svg';
import { ReactComponent as LogOut } from '../../assets/icons/log-out.svg';

import './header.scss';

const Header = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={Logo} alt='item'className='logo' />
        <h2 className='logo_title' style={{
          fontFamily: 'RF Dewi',
        }}>
          Бизнес <br/>
          Онлайн
        </h2>
      </div>
      <div className='header_items'>
        <div className='user_info'>
          <h4>Жасур Абдуллаев</h4>
          <p>ООО «Компания»</p>
        </div>
        <div className='avatar circle'>
          <Avatar />
        </div>
        <div className='circle'>
          <Search />
        </div>
        <div className='circle count'>
          <Notification />
          <div className='count_icon'>{notificationCount}</div>
        </div>
        <div className='circle'>
          <Settings />
        </div>
        <div className='download'>
          <Download className='gray_icon' />
          <p className='icon_text'>Все файлы</p>
        </div>
        <div className='circle'>
          <LogOut className='gray_icon' />
        </div>
        
      </div>
    </div>
  )
};

export default Header;
