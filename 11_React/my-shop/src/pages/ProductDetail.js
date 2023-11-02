import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedProduct, selectSelectedProduct } from '../features/product/productSlice';
import axios from 'axios';

function ProductDetail(props) {
  // URL 파라미터 가져오기
  const { productId } = useParams(); // App.js에서 지은 이름
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);

  // 상품 상세보기가 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 오청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/fkdkskdfjfk/db.json/products/${productId}`);
        dispatch(getSelectedProduct(response.data))
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductById();
  }, []);

  return (
    <Container className='pt-3'>
      <Row>
        <Col md={6}>
          <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>상품명</h4>
          <p>상품설명</p>
          <p>1000원</p>
          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;