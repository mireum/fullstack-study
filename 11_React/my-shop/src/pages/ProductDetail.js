import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedProduct, selectSelectedProduct } from '../features/product/productSlice';
import axios from 'axios';

function ProductDetail(props) {
  // URL 파라미터 가져오기
  const { productId } = useParams(); // App.js에서 지은 이름
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);
  
  const [bool, setBool] = useState(true);

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
  
  useEffect(() => {
    setTimeout(() => {
      setBool(false);
    }, 3000);
  }, []);

  // const { id, title, content, price, imagePath } = product;


  // 없는 상품일 때 예외 처리 -> 아래에 써야 함
  if (!product) {
    return null; // 아무것도 렌더링하지 않음
  } 
  

  return (
    <Container className='pt-3'>
      {/* Quiz: Alert을 띄우고 3초 뒤에 사라지게 만들기
        힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정 */}
      {bool && <Alert variant={'info'}>
        현재 34명이 이 상품을 보고 있습니다.
      </Alert>}

      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>₩{product.price}</p>
          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;