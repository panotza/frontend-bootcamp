import React, { Component } from 'react';
import { Layout, Select, Spin, Row, Col } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './App.css';

const Option = Select.Option;

class App extends Component {
  state = {
    loading: true,
    loadingHistory: false,
    bpi: {},
    history: {},
    currency: 'USD'
  }

  async componentDidMount() {
    const [bpi, history] = await Promise.all([this.fetchLastestPrice(), this.fetchHistory(this.state.currency)]);
    this.setState({
      loading: false,
      bpi,
      history
    });
    this.timer = setInterval(this.priceUpdater, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  priceUpdater = async () => {
    const bpi = await this.fetchLastestPrice();
    this.setState({ bpi });
  }

  fetchLastestPrice = async () => {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const { bpi } = await response.json();
    return bpi;
  }

  fetchHistory = async currency => {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`);
    const { bpi: historyData } = await response.json();
    const arrayData = Object.entries(historyData);
    return arrayData.map(h => ({ name: h[0], [currency]: h[1] }));
  }

  handleChange = async value => {
    this.setState({ loadingHistory: true, currency: value })
    const history = await this.fetchHistory(value);
    this.setState({
      loadingHistory: false,
      history
    })
  }

  render() {
    const { loading, loadingHistory, bpi, currency, history } = this.state;
    if (loading) {
      return (
        <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
          <Col span={1}>
            <Spin tip="Loading..." />
          </Col>
        </Row>
      );
    }
    return (
      <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
        <Col span={12}>
          <h1 style={{ fontSize: 45 }}>Bitcoin price checker</h1>
          <div>
            <Select defaultValue="USD" style={{ width: 220 }} onChange={this.handleChange}>
              <Option value="USD">USD</Option>
              <Option value="GBP">GBP</Option>
              <Option value="EUR">EUR</Option>
            </Select>
            <p style={{ float: 'right', fontSize: 25 }}>Current price: <span style={{ fontSize: 30 }}>{bpi[currency].rate} {currency}</span></p>
          </div>
          <div style={{ width: 730, clear: 'right' }}>
            <Spin spinning={loadingHistory}>
              <LineChart width={730} height={250} data={history}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={currency} stroke="#82ca9d" />
              </LineChart>
            </Spin>
          </div>
        </Col>
      </Row>
    );
  }
}

export default App;
