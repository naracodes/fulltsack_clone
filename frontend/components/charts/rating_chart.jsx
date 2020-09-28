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

// const data = [
//   { name: "Page A", uv: 91, pv: 9, amt: 9 },
//   { name: "Page B", uv: 80, pv: 20, amt: 20 },
//   /*       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}, */
// ];

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
    debugger
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
            hide="true"
          type="number"
          domain={[0, 100]}
          ticks={[0, 100]}
          axisLine={{ stroke: "#EAF0F4" }}
        />
        <YAxis
          dataKey="name"
        hide="true"
        type="category"
        axisLine={{ stroke: "#EAF0F4" }}
        />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="uv" stackId="a" fill="#41e538">
          <LabelList fill="white" position="center">{`${buy}% Buy`}</LabelList>
        </Bar>
        <Bar dataKey="pv" stackId="a" fill="#b5b5b5">
          <LabelList fill="white" position="center" dataKey="amt">
            {`${hold}% Hold`}
          </LabelList>
        </Bar>
      </BarChart>
    );
  }
}

export default StackedChart;

// const { PieChart, Pie, Sector, Cell } = Recharts;
// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const SimplePieChart = React.createClass({
//   render() {
//     return (
//       <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
//         <Pie
//           data={data}
//           cx={300}
//           cy={200}
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={80}
//           fill="#8884d8"
//         >
//           {data.map((entry, index) => (
//             <Cell fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     );
//   },
// });

// ReactDOM.render(<SimplePieChart />, document.getElementById("container"));
