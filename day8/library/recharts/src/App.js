import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class App extends Component {
  state = {
    data: [
      { name: 'Page A', value: 4000, value2: 2400 },
      { name: 'Page B', value: 3000, value2: 1398 },
      { name: 'Page C', value: 2000, value2: 9800 },
      { name: 'Page D', value: 2780, value2: 3908 },
      { name: 'Page E', value: 1890, value2: 4800 },
      { name: 'Page F', value: 2390, value2: 3800 },
      { name: 'Page G', value: 3490, value2: 4300 },
    ]
  }
  render() {
    return (
      <LineChart width={730} height={250} data={this.state.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default App;
