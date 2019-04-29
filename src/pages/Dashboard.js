import React from 'react';
import PowerQuantityCard from './../components/DapComponents/DapChartCard1/PowerQuantityCard';


// 数据源
const data = [
  { time: '1', value: 15 },
  { time: '2', value: 16 },
  { time: '3', value: 18 },
  { time: '4', value: 12 },
  { time: '5', value: 13 },
  { time: '6', value: 11 },
  { time: '7', value: 16 },
  { time: '8', value: 18 },
  { time: '9', value: 11 },
  { time: '10', value: 14 },
];



export default function() {
  return (
    <div style={{paddingTop:0,}}>
      <PowerQuantityCard name={"日发电量"} unit={"MWh"} data={data}/>
    </div>
  );
}
