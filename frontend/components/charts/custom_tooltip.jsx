import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

class CustomTooltip extends React.Component {

  render() {
    const { active } = this.props;
    console.log(this.props.payload)
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
        </div>
      );
    }
    return null;
  }
}

export default CustomTooltip;
