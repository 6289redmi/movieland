import React from 'react';
import {  Col, Card  } from 'antd';
const { Meta } = Card;

const AntCard = (props) => {
  // console.log(props.path)
  // console.log(props.title)
  // console.log(props.id)
  return (
    <Col  xs={12} md={8} lg={6}>
        <Card xs={12} md={8} lg={6}
        hoverable
        style={{
        width: 240,
        }}
        cover={<img alt={props.title} src={props.path} />}
    >
        <Meta title={props.title} />
        </Card>
    </Col>
  )
}

export default AntCard
