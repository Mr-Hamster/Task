import React from 'react';
import './App.css';
import SmallBlock from './components/smallBlock/index';
import { Image } from 'react-bootstrap'
import Picture from './static/image/1.png'
import WiFi from './static/image/wifi.png'
import Bluetooth from './static/image/bluetooth.png'
import Network from './static/image/network.png'

const arr = [
  {
    name: "TEMPERATURE",
    image: require('./static/image/temp1.png'),
    textBottom:'24.5',
    textTop:'°C',
    white: true,
    bigImg:false,
    height: '80%',
    margin:'7% 0 0 10%'
  },
  {
    name: "PH1",
    image: require('./static/image/vial.png'),
    textBottom:'7.0',
    textTop:'pH',
    white: true,
    height: '80%',
    width:'55%',
    margin:'7% 0 0 10%'
    },
    {
        name: "PH2",
        image: require('./static/image/vial.png'),
        textBottom:'7.1',
        textTop:'pH',
        white: true,
        height: '80%',
        width:'55%',
        margin:'7% 0 0 10%'
    },
    {
        name: "REDOX",
        image: require('./static/image/vial1.png'),
        textBottom:'9.0',
        textTop:'mV',
        white: true,
        height: '80%',
        margin:'7% 0 0 10%'
    },
    {
        name: "CONDUCTIVITY",
        image: require('./static/image/conductivity.png'),
        textBottom:'28.2',
        textTop:'mS/cm',
        white: true,
        height: '80%',
        margin:'7% 0 0 20%'
    },
    {
        name: "O2",
        image: require('./static/image/o2.png'),
        textBottom:'70.9',
        textTop:'%',
        white: true,
        height: '60%',
        margin:'5% 0 0 10%'
    },
      {
            name: "FLOAT 1",
            image: require('./static/image/lines.png'),
            bigImg:true,
            width:'95%',
            height:'70%',
            margin:'7% 0 0 0'
      },
      {
        name: "FLOAT 2",
        image: require('./static/image/lines.png'),
        bigImg:true,
        width:'95%',
        height:'70%',
        margin:'7% 0 0 0'
      },
      {
          name: "FLOAT 3",
          image: require('./static/image/lines.png'),
          bigImg:true,
          width:'95%',
          height:'70%',
          margin:'7% 0 0 0'
      },
      {
          name: "OPTICAL 1",
          image: require('./static/image/lines.png'),
          bigImg:true,
          width:'95%',
          height:'70%',
          margin:'7% 0 0 0'
      },
      {
          name: "OPTICAL 2",
          image: require('./static/image/lines.png'),
          bigImg:true,
          width:'95%',
          height:'70%',
          margin:'7% 0 0 0'
      },
      {
          name: "OPTICAL 3",
          image: require('./static/image/lines.png'),
          bigImg:true,
          width:'95%',
          height:'70%',
          margin:'7% 0 0 0'
      },
      {
          name: "PAR 1",
          image: require('./static/image/leaf.png'),
          bigImg:false,
          height: '55%',
          width:'90%',
          margin:'7% 0 0 15%'
      },
      {
          name: "PAR 2",
          image: require('./static/image/leaf.png'),
          height: '55%',
          width:'90%',
          margin:'7% 0 0 15%',
          bigImg:false
      },
      {
          name: "0-10V 1",
          image: require('./static/image/lightning.png'),
          height: '50%',
          width:'40%',
          margin:'7% 0 0 30%',
          bigImg:false
      },
      {
          name: "0-10V 2",
          image: require('./static/image/lightning.png'),
          bigImg:false,
          height: '50%',
          width:'40%',
          margin:'7% 0 0 30%'
      },
      {
          name: "0-10V 3",
          image: require('./static/image/lightning.png'),
          bigImg:false,
          height: '50%',
          width:'40%',
          margin:'7% 0 0 30%'
      },
      {
          name: "0-10V 4",
          image: require('./static/image/lightning.png'),
          bigImg:false,
          height: '50%',
          width:'40%',
          margin:'7% 0 0 30%'
      },
      {
          name: "0-10V 5",
          image: require('./static/image/lightning.png'),
          bigImg:false,
          height: '50%',
          width:'40%',
          margin:'7% 0 0 30%'
      },
      {
          name: "0-10V 6",
          image: require('./static/image/lightning.png'),
          bigImg:false,
          height: '50%',
          width:'40%',
          margin:'7% 0 0 30%'
      },
      {
          name: "FEEDSTOP",
          image: require('./static/image/feedstop.png'),
          bigImg:false,
          white:true,
          height: '55%',
          margin:'7% 0 0 30%',
          width:'100%'
      },
      {
          name: "VIRTUAL SWITCH 1",
          image: require('./static/image/switch.png'),
          bigImg:true,
          height: '25%',
          margin:'15% 0 0 0',
          width:'60%'
      },
      {
          name: "VIRTUAL SWITCH 2",
          image: require('./static/image/switch.png'),
          bigImg:true,
          height: '25%',
          margin:'15% 0 0 0',
          width:'60%'
      },
      {
          name: "VIRTUAL SWITCH 3",
          image: require('./static/image/switch.png'),
          bigImg:true,
          height: '25%',
          margin:'15% 0 0 0',
          width:'60%'
      },
      {
          name: "VIRTUAL SWITCH 4",
          image: require('./static/image/switch.png'),
          bigImg:true,
          height: '25%',
          margin:'15% 0 0 0',
          width:'60%'
      },
      {
          name: "VIRTUAL SWITCH 5",
          image: require('./static/image/switch.png'),
          bigImg:true,
          height: '25%',
          margin:'15% 0 0 0',
          width:'60%'
      },
      {
          name: "VIRTUAL SWITCH 6",
          image: require('./static/image/switch.png'),
          bigImg:true,
          height: '25%',
          margin:'15% 0 0 0',
          width:'60%'
      },
      {
        name: "VIRTUAL SWITCH 7",
        image: require('./static/image/switch.png'),
        bigImg:true,
        height: '25%',
        margin:'15% 0 0 0',
        width:'60%'
      }
  ];


  export default class App extends React.Component{
    render() {
      return(
          <div className='wrapper'>
              <div className="big_block">
                <div className="top_block">
                  <Image className="picture" responsive src={Picture}/>                    
                    <div className="icons_date">
                        <div className="icons">
                            <Image className="icon_size" responsive src={WiFi}/> 
                            <Image className="icon_size" responsive src={Bluetooth}/> 
                            <Image className="icon_size" responsive src={Network}/> 
                        </div>
                        <div className="date">
                            01/28/2019
                        </div>
                    </div>
                </div>
                <div className="time">
                    23:16:30
                </div>
                <div className="textMaster">
                    Master
                </div>
            </div>
              <div className="block_small">
              {
                arr.map(item =>{ 
                  return(
                    <SmallBlock item={item} />
                  )
                })
              }
              </div>
              </div>
         );
  }
}
