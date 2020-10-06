import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Odometer from "react-odometerjs";

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
      <div>
        Loading...
      </div>
    } else {
        // debugger
        return (
            <div className="stock-graph">
            {/* <h1 className="company-name">{company ? company.split(',')[0] : ""}</h1> */}
            {/* <h3>{this.state.closePrice}</h3> */}
            <div className="odometer">
                $
                <Odometer
                value={data[data.length - 1].cash_balance}
                format="(,ddd).dd"
                />
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
                <YAxis hide={true} domain={["dataMin", "dataMax"]} />
                <Tooltip
                isAnimationActive={false}
                // offset={5}
                // position={{y: -20}}
                />
                <Line
                type="linear"
                dataKey="cash_balance"
                stroke="#1aee99"
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
