import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Odometer from "react-odometerjs";
import numeral from 'numeral';
import CustomTooltip from '../charts/custom_tooltip';

class PortfoLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cashBalance: null, // null to string
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleHover(e) {
    if (e.activePayload && this.props.data) {
      this.setState({
        cashBalance: e.activePayload[0].payload.cash_balance,
      });
    }
  }

  handleMouseLeave(e) {
    this.setState({
      cashBalance: null,
    });
  }

  render() {
    const { data } = this.props;
    if (!data) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
        // debugger
        return (
            <div className="stock-graph">
              <div className="odometer">
                  $<Odometer value={data[data.length - 1].cash_balance}format="(,ddd).dd"/>
              </div>
              {/* <ResponsiveContainer id="responsive-container"> */}
              <LineChart
                  // id="stock-line-chart"
                  width={676}
                  height={361}
                  data={this.props.data}
                  margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
                  onMouseMove={this.handleHover}
                  onMouseLeave={this.handleMouseLeave}
              >
                  <XAxis tickLine={false} dataKey="label" hide={true} />
                  <YAxis hide={true} domain={["dataMin - 50", "dataMax + 50"]} />
                  <Tooltip
                  isAnimationActive={false}
                  content={<CustomTooltip />}
                  offset={2}
                  position={{y: 20}}
                  />
                  <Line
                  type="monotone"
                  dataKey="cash_balance"
                  stroke="#1aee99"
                  strokeWidth={2}
                  dot={false}
                  connectNulls={true}
                  // activeDot={ { onClick: (e) => console.log(e) } }
                  />
              </LineChart>
              {/* </ResponsiveContainer> */}
            </div>
        );
    }
  }
}

// const PortfoLineChart = props => {
//     const { data } = props;
//     debugger
//     if (!data) {
//         return null;
//     } else {
//         return (
//             <div className="chartContainer">
//                 <h3>Hello!</h3>
//                 <h3>{data[data.length - 1].close}</h3>
//                 <LineChart
//                     width={600}
//                     height={300}
//                     data={props.data}
//                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                 >
//                     <XAxis tickLine={false} dataKey="label" hide={true} />
//                     <YAxis hide={true} domain={["auto", "dataMax"]} />
//                     <Tooltip />
//                     <Line type="linear" dataKey="close" stroke="#1aee99" dot={false} />
//                 </LineChart>
//             </div>
//         );
//     }
// }

export default PortfoLineChart;
