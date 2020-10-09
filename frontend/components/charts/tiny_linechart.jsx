import React  from "react";
import { LineChart, Line, XAxis, YAxis, ReferenceLine } from "recharts";


class TinyLineChart extends React.Component {
  
  chopData(dataArr, mod) {
    let chopped = [];
    dataArr.forEach((data, i) => {
      if (i % mod === 0) {
        chopped.push(data)
      }
    });
    return chopped;
  }
  
  render() {
        const { data } = this.props;
        let interval = {};
        if (!data) {
          return (
            <div>
              Loading...
            </div>
          )
        } else {
          return (
            <LineChart width={60} height={30} data={this.chopData(data, 2)}>
              <XAxis tickLine={false} dataKey="label" hide={true} />
              <YAxis hide={true} domain={["dataMin", "dataMax"]} />
              <ReferenceLine y={this.props.prevClose} label="" stroke="grey" strokeDasharray="2 2" />
              <Line
                type="linear"
                dataKey="close"
                stroke="red"
                strokeWidth={1}
                dot={false}
                connectNulls={true}
              />
            </LineChart>
          );
        }
    }
}

export default TinyLineChart;