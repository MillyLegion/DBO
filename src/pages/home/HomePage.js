import React from 'react';
import Slider from "react-slick";
import { DatePicker } from 'antd';
import moment from 'moment';

import Table from '../../components/table/Table';

import { ReactComponent as ArrowLeft} from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight} from '../../assets/icons/arrow-right.svg';
import { ReactComponent as Calendar} from '../../assets/icons/calendar.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';

import './home.scss';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dateFormat = 'DD.MM.YYYY';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowRight
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowLeft
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      toggleAction: true,
      toggleSub: false,
    }
  }
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    // const [toggleAction, toggleSub] = this.state;
    return (
      <div className='home_container'>
        <div className='home_container-main'>
          <div className='slider'>
            <Slider {...settings}>
              <div className='cart'>
                <h3 className='cart_items'>1</h3>
              </div>
              <div className='cart'>
                <h3 className='cart_items'>2</h3>
              </div>
              <div className='cart'>
                <h3 className='cart_items'>3</h3>
              </div>
              <div className='cart'>
                <h3 className='cart_items'>4</h3>
              </div>
              <div className='cart'>
                <h3 className='cart_items'>5</h3>
              </div>
              <div className='cart'>
                <h3 className='cart_items'>6</h3>
              </div>
            </Slider>
          </div>
          <div className='navigation'>
            <span
              onClick={() => this.setState({ toggleAction: true, toggleSub: false })}
              className={`${this.state.toggleAction ? 'active' : ''}`}
            >
              События
            </span>
            <span
              onClick={() => this.setState({ toggleAction: false, toggleSub: true })}
              className={`${this.state.toggleSub ? 'active' : ''}`}
            >
              На подпись и отправку
              <div className='circle'/>
            </span>
          </div>
          <div className='docs'>
            <div className='docs_items'>
              <div className='docs_title'>
                <h2 className='title'>Документы</h2>
                <p className='created'>Созданные</p>
                <DatePicker className='date' suffixIcon={<Calendar className='icon' />} defaultValue={moment('03.07.2020', dateFormat)} format={dateFormat} />
              </div>
              <Settings className='settings_icon' />
            </div>
            <Table />
          </div>
          <div className='actions'>

          </div>
        </div>
        <div className='home_container-secondary'>
          <div className='cart_history'>

          </div>

          <div className='notes'>
            
          </div>

          <div className='curency'>

          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
