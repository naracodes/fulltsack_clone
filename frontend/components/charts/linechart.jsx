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
const data = [
  {
    date: "2020-08-04",
    minute: "09:30",
    label: "09:30 AM",
    close: null,
  },
  {
    date: "2020-08-04",
    minute: "09:35",
    label: "09:35 AM",
    close: 36.427,
  },
  {
    date: "2020-08-04",
    minute: "09:40",
    label: "09:40 AM",
    close: 35.96,
  },
  {
    date: "2020-08-04",
    minute: "09:45",
    label: "09:45 AM",
    close: 36.44,
  },
  {
    date: "2020-08-04",
    minute: "09:50",
    label: "09:50 AM",
    close: 37.42,
  },
  {
    date: "2020-08-04",
    minute: "09:55",
    label: "09:55 AM",
    close: 37.24,
  },
  {
    date: "2020-08-04",
    minute: "10:00",
    label: "10 AM",
    close: 36.351,
  },
  {
    date: "2020-08-04",
    minute: "10:05",
    label: "10:05 AM",
    close: 37.163,
  },
  {
    date: "2020-08-04",
    minute: "10:10",
    label: "10:10 AM",
    close: 38.01,
  },
  {
    date: "2020-08-04",
    minute: "10:15",
    label: "10:15 AM",
    close: 37.12,
  },
  {
    date: "2020-08-04",
    minute: "10:20",
    label: "10:20 AM",
    close: 38.17,
  },
  {
    date: "2020-08-04",
    minute: "10:25",
    label: "10:25 AM",
    close: 37.03,
  },
  {
    date: "2020-08-04",
    minute: "10:30",
    label: "10:30 AM",
    close: 37.58,
  },
  {
    date: "2020-08-04",
    minute: "10:35",
    label: "10:35 AM",
    close: 36.945,
  },
  {
    date: "2020-08-04",
    minute: "10:40",
    label: "10:40 AM",
    close: 36.945,
  },
  {
    date: "2020-08-04",
    minute: "10:45",
    label: "10:45 AM",
    close: 37.005,
  },
  {
    date: "2020-08-04",
    minute: "10:50",
    label: "10:50 AM",
    close: 38.1,
  },
  {
    date: "2020-08-04",
    minute: "10:55",
    label: "10:55 AM",
    close: 37.68,
  },
  {
    date: "2020-08-04",
    minute: "11:00",
    label: "11 AM",
    close: 37.515,
  },
  {
    date: "2020-08-04",
    minute: "11:05",
    label: "11:05 AM",
    close: 37.49,
  },
  {
    date: "2020-08-04",
    minute: "11:10",
    label: "11:10 AM",
    close: 37.49,
  },
  {
    date: "2020-08-04",
    minute: "11:15",
    label: "11:15 AM",
    close: 38.14,
  },
  {
    date: "2020-08-04",
    minute: "11:20",
    label: "11:20 AM",
    close: 36.62,
  },
  {
    date: "2020-08-04",
    minute: "11:25",
    label: "11:25 AM",
    close: 36.7,
  },
  {
    date: "2020-08-04",
    minute: "11:30",
    label: "11:30 AM",
    close: 36.66,
  },
  {
    date: "2020-08-04",
    minute: "11:35",
    label: "11:35 AM",
    close: 37.299,
  },
  {
    date: "2020-08-04",
    minute: "11:40",
    label: "11:40 AM",
    close: 37.6,
  },
  {
    date: "2020-08-04",
    minute: "11:45",
    label: "11:45 AM",
    close: 36.79,
  },
  {
    date: "2020-08-04",
    minute: "11:50",
    label: "11:50 AM",
    close: 36.898,
  },
  {
    date: "2020-08-04",
    minute: "11:55",
    label: "11:55 AM",
    close: 36.467,
  },
  {
    date: "2020-08-04",
    minute: "12:00",
    label: "12 PM",
    close: 37.87,
  },
  {
    date: "2020-08-04",
    minute: "12:05",
    label: "12:05 PM",
    close: 37.105,
  },
  {
    date: "2020-08-04",
    minute: "12:10",
    label: "12:10 PM",
    close: 36.367,
  },
  {
    date: "2020-08-04",
    minute: "12:15",
    label: "12:15 PM",
    close: 36.982,
  },
  {
    date: "2020-08-04",
    minute: "12:20",
    label: "12:20 PM",
    close: 37.936,
  },
  {
    date: "2020-08-04",
    minute: "12:25",
    label: "12:25 PM",
    close: 37.12,
  },
  {
    date: "2020-08-04",
    minute: "12:30",
    label: "12:30 PM",
    close: 36.47,
  },
  {
    date: "2020-08-04",
    minute: "12:35",
    label: "12:35 PM",
    close: 37.63,
  },
  {
    date: "2020-08-04",
    minute: "12:40",
    label: "12:40 PM",
    close: 37.1,
  },
  {
    date: "2020-08-04",
    minute: "12:45",
    label: "12:45 PM",
    close: 37.7,
  },
  {
    date: "2020-08-04",
    minute: "12:50",
    label: "12:50 PM",
    close: 36.93,
  },
  {
    date: "2020-08-04",
    minute: "12:55",
    label: "12:55 PM",
    close: 37.11,
  },
  {
    date: "2020-08-04",
    minute: "13:00",
    label: "1 PM",
    close: 37.14,
  },
  {
    date: "2020-08-04",
    minute: "13:05",
    label: "1:05 PM",
    close: null,
  },
  {
    date: "2020-08-04",
    minute: "13:10",
    label: "1:10 PM",
    close: 37.03,
  },
];

// const {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } = Recharts;

const AssetLineChart = props => {
    return (
      <LineChart
        width={600}
        height={300}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis tickLine={false} dataKey="label" hide={true} />
        <YAxis hide={true} domain={["auto", "dataMax"]} />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="close" stroke="#1aee99" dot={false} />
      </LineChart>
    );
}

export default AssetLineChart;