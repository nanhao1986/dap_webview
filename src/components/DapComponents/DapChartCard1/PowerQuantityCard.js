import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Chart, Geom} from 'bizcharts';



//size
const bodywidth = document.body.clientWidth;
const bodyheight = document.body.clientHeight;
const width = 0.2 * bodywidth;
const height = 0.1 * bodyheight;
const padding = 0.05 * width;
const chartwidth = width - 2 * padding;


class PowerQuantityCard extends Component {


  render() {
    return (
      <div style={{ width: width, background:'#081528'}}>
        <div style={{padding:padding, color:"white"}}>
          <div style={{ fontSize: '1.4em'}}>{this.props.name}</div>
          <div style={{ fontSize: '1.6em', textAlign: 'center' }}>
            {this.props.data.reverse()[0].value}


            {this.props.unit}
          </div>


          <div style={{ width: '100%'}}>
            <Chart height={height}
                   width={chartwidth}
                   padding={[0, 0, 0, 0]}
                   data={this.props.data}
            >
              <Geom type="interval" position="time*value"/>
            </Chart>
          </div>
        </div>
      </div>
    );
  }

}

export default PowerQuantityCard;
