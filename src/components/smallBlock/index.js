import React from 'react';
import './smallBlock.css';
import { Image } from 'react-bootstrap'
import Temp from '../../static/image/temp1.png'

export default class SmallBlock extends React.PureComponent{
    render() {
      return(
            <div className="smallBlock_text">
              <div className="smallBlock" style={{gridTemplateColumns: this.props.item.bigImg ? 'repeat(1, 1fr)': 'repeat(2, 1fr)'}}>
                  <Image className="img" style={{width: this.props.item.width, height: this.props.item.height, margin: this.props.item.margin }} responsive src={this.props.item.image} />                    
                  <div className="text_t_b">
                      <div>
                        {this.props.item.textTop}
                      </div>
                      <div>
                        {this.props.item.textBottom}
                      </div>
                  </div>
              </div>
              <div className='text1' style={{color: this.props.item.white ? 'white' : 'grey'}}>
                {this.props.item.name}
              </div>
            </div>
      );
    }
  }
