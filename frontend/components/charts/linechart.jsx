import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Odometer from "react-odometerjs";

class AssetLineChart extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      closePrice: null, // null to string
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleHover(e) {
    if (e.activePayload && this.props.data) {
      this.setState({
        closePrice: e.activePayload[0].payload.close,
      })
    }
  }

  handleMouseLeave(e) {
    this.setState({
      closePrice: null,
    })
  }

  render() {
    const { data, company, closePrice } = this.props;
    if (!data) {
      return null;
    } 
    // else {
    //   if (this.state.closePrice === null) { // null -> string and in constructor
    //     const closePrice = this.props.data[this.props.data.length - 1].close;
    //     this.setState({
    //       closePrice: closePrice,
    //     });
    //   }

      return (
        <div className="stock-graph">
          <h3>{company}</h3>
          {/* <h3>{this.state.closePrice}</h3> */}
          <h1>$<Odometer className="odometer" value={!this.state.closePrice ? closePrice : this.state.closePrice} format="(,ddd).dd" /></h1>
          <LineChart
            width={750}
            height={360}
            data={this.props.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            onMouseMove={this.handleHover}
            onMouseLeave={this.handleMouseLeave}
          >
            <XAxis tickLine={false} dataKey="label" hide={true} />
            <YAxis hide={true} domain={["auto", "dataMax"]} />
            <Tooltip
              isAnimationActive={false}
              // offset={5}
              // position={{y: -20}}
            />
            <Line
              type="linear"
              dataKey="close"
              stroke="#1aee99"
              dot={false}
              // activeDot={ { onClick: (e) => console.log(e) } }
            />
          </LineChart>
        </div>
      );
  }
}

// const AssetLineChart = props => {
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

export default AssetLineChart;