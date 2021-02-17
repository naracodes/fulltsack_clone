import { text } from "@fortawesome/fontawesome-svg-core";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import numeral from 'numeral';

class StackedChart extends React.Component {

    constructor(props) {
        super(props)
    }

  render() {
      const { buy, hold, sell } = this.props;
    const data = [
      { name: "Page A", uv: 91, pv: 9, amt: 9 },
    //   { name: "Page B", uv: 80, pv: 20, amt: 20 },
      /*       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}, */
    ];
    return (
      <BarChart
      className="rating-bar-chart"
        width={427}
        height={82}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <XAxis
          hide={true}
          type="number"
          domain={[0, 100]}
          ticks={[0, 100]}
          axisLine={{ stroke: "#EAF0F4" }}
        />
        <YAxis
          dataKey="name"
          hide={true}
          type="category"
          axisLine={{ stroke: "#EAF0F4" }}
        />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="uv" stackId="a" fill="#bdecb6">
          <LabelList fill="white" position="center">{`${numeral(buy).format('0%')} Buy`}</LabelList>
        </Bar>
        <Bar dataKey="pv" stackId="a" fill="#ba7c4d">
          <LabelList fill="white" position="center" dataKey="amt">{`${numeral(hold).format('0%')} Hold`}</LabelList>
        </Bar>
        
          {
            (typeof sell === 'number') ? (
              <Bar dataKey="pv" stackId="a" fill="#facbd1">
                <LabelList fill="white" position="center" dataKey="amt">{`${numeral(sell).format('0%')} Sell`}</LabelList>
              </Bar>
            ) : null
          }
      </BarChart>
    );
  }
}

export default StackedChart;