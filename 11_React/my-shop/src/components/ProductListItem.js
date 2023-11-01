import React from 'react';
import { Col } from 'react-bootstrap';

function ProductListItem(props) {
  const { prod: { imagePath, title, price } } = props;

  return (
    <Col md={4}>
      <img src={imagePath} width="80%"/>
      <h4>{title}</h4>
      <p>₩{price}</p>
    </Col>
  );
}

export default ProductListItem;