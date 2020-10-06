import React  from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";


class TinyLineChart extends React.Component {
    render() {
        const { data } = this.props;
        debugger
        return (
          <LineChart width={60} height={30} data={data}>
            <XAxis tickLine={false} dataKey="label" hide={true} />
            <YAxis hide={true} domain={["auto", "auto"]} />
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

export default TinyLineChart;