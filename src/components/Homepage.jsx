import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';

const {Title} = Typography;

const Homepage = () => {
  return (
    <>
        <Title level={2} className='heading'>
            Global Crypto Stats
       </Title>
       <Row>
           <Col span={12}><Statistic title="Totla Cryptocurrencies" value={5} /></Col>
           <Col span={12}><Statistic title="Totla Exchanges" value={5} /></Col>
           <Col span={12}><Statistic title="Totla Market Cap" value={5} /></Col>
           <Col span={12}><Statistic title="Totla 24h Volume" value={5} /></Col>
           <Col span={12}><Statistic title="Totla Markets" value={5} /></Col>
       </Row>
    </>
  )
}

export default Homepage