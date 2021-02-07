import React from 'react';

import { ReactComponent as Add } from '../../assets/icons/add.svg';
import { ReactComponent as Help } from '../../assets/icons/help.svg';
import { ReactComponent as Patterns } from '../../assets/icons/patterns.svg';

import './nav-panel.scss';

const navigation = [
  {
    name: 'Создать+',
    icon: <Add />
  },
  {
    name: 'Шаблоны',
    icon: <Patterns />
  },
  {
    name: 'Помощь',
    icon: <Help />
  },
];

const navigationTransaction = [
  {
    name: 'Платежные документы',
    icon: <div className='icon'/>
  },
  {
    name: 'Шаблоны',
    icon: <div className='icon'/>
  },
  {
    name: 'Счета',
    icon: <div className='icon'/>
  },
]

const navigationCurrency = [
  {
    name: 'Свифт',
    icon: <div className='icon'/>
  },
  {
    name: 'Конверсия',
    icon: <div className='icon'/>
  },
  {
    name: 'Аккредитив',
    icon: <div className='icon'/>
  },
  {
    name: 'Валютно-обменные операции',
    icon: <div className='icon'/>
  },
  {
    name: 'Покупку-продажу иностранной валюты ',
    icon: <div className='icon'/>
  },
]

const navigationMap = [
  {
    name: 'Зарплатная ведомость',
    icon: <div className='icon'/>
  },
  {
    name: 'Работы с картами',
    icon: <div className='icon'/>
  },
]

const other = [
  {
    name: 'Кредит',
    icon: <div className='icon'/>
  },
  {
    name: 'Депозиты',
    icon: <div className='icon'/>
  },
  {
    name: 'Картотека',
    icon: <div className='icon'/>
  },
  {
    name: 'Отчеты',
    icon: <div className='icon'/>
  },
  {
    name: 'Мониторинг',
    icon: <div className='icon'/>
  },
]

const NavPanel = () => {
  return (
    <div className='nav'> 
      {
        navigation.map((item, id) => (
          <div className='main_nav' key={id}>
            <i className='icon'>{item.icon}</i>
            <span className='main_nav-text-bold'>{item.name}</span>
          </div>
        ))
      }
        <p className='nav_title'>Банковские операции</p>
        {
          navigationTransaction.map((item, id) => (
            <div className='main_nav' key={id}>
              <i className='icon'>{item.icon}</i>
              <span className='main_nav-text'>{item.name}</span>
            </div>
          ))
        }
        <p className='nav_title'>Валютная операции</p>
        {
          navigationCurrency.map((item, id) => (
            <div className='main_nav' key={id}>
              <i className='icon'>{item.icon}</i>
              <span className='main_nav-text'>{item.name}</span>
            </div>
          ))
        }
        <p className='nav_title'>Карты</p>
        {
          navigationMap.map((item, id) => (
            <div className='main_nav' key={id}>
              <i className='icon'>{item.icon}</i>
              <span className='main_nav-text'>{item.name}</span>
            </div>
          ))
        }
        <hr className='line'/>
        {
          other.map((item, id) => (
            <div className='main_nav' key={id}>
              <i className='icon'>{item.icon}</i>
              <span className='main_nav-text'>{item.name}</span>
            </div>
          ))
        }
    </div>
  )
};

export default NavPanel;
