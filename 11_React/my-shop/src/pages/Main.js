import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from "axios";

// 리액트(JS)에서 이미지 파일 가져오기
import yonexImg from "../images/yonex.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { addMoreProducts, getAllProducts, getMoreProductsAsync, selectProductList, selectStatus } from '../features/product/productSlice';
import ProductListItem from '../components/ProductListItem';
import { getMoreProducts } from '../api/productAPI';
import { PacmanLoader, ScaleLoader } from "react-spinners";

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch(); // store에 넣을 때
  const productList = useSelector(selectProductList); // store에서 꺼내올 때
  const status = useSelector(selectStatus); // API 요청 상태(로딩 상태)

  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고 
  // 그 결과를 리덕스 스토어에 전역 상태로 저장
  useEffect(() => {
    // 서버에 상품 목록 요청
    axios.get('https://my-json-server.typicode.com/fkdkskdfjfk/db.json/products')
      .then((response) => {
        dispatch(getAllProducts(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleGetMoreProduct = async () => {
    const result = await getMoreProducts();
    dispatch(addMoreProducts(result));
  };

  const handleGetMoreProductAsync = () => { // async 할 필요 x
    dispatch(getMoreProductsAsync());
  };

  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
        {/* <img src={yonexImg} /> */}
      </section>

      {/* 상품 목록 레이아웃 섹션 */}
      <section>
        <Container>
          <Row>
            {/* 부트스트랩을 이용한 반응형 작업 */}
            {/* md ≥768px 이상에서 전체 12등분 중 4:4:4로 보여줌 */}
            {/* <Col md={4}>
              <img src='https://www.yonexmall.com/shop/data/goods/1645767865278s0.png' width="80%"/>
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src='https://www.yonexmall.com/shop/data/goods/1645767865278s0.png' width="80%"/>
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src='https://www.yonexmall.com/shop/data/goods/1645767865278s0.png' width="80%"/>
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col> */}

            {/* ProductListItem 컴포넌트 만들어서 반복 렌더링으로 바꾸고 데이터 바인딩 */}
            {/* Quiz: 
              1) 반복적인 상품 아이템을 src/components/ProductListItem 컴포넌트로 만들기
              2) productList 배열을 반복하며 ProductListItem 컴포넌트를 렌더링 하기
              3) 상품 정보를 props로 넘겨서 데이터 바인딩 하기
            */}
            {productList.map((prod) => <ProductListItem key={prod.id} prod={prod}/>)}

            {/* 로딩 만들기 */}
            {status === 'loading' &&
              <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ScaleLoader
                  color="#36d7b7"
                  height={40}
                />
                {/* <PacmanLoader color="#36d7b7" /> */}
              </div>
            }
          </Row>
        </Container>

        {/* 상품 더 보기 기능 만들기
          더보기 버튼 클릭 시 axios를 사용하여 데이터 요청
          받아온 결과를 전역 상태에 추가하기 위해 slice에 리듀서 추가 및 action 생성 함수 export
          스토어에 dispatch로 요청 보내기 */}
        {/* HTTP 요청 코드를 함수로 만들어서 api 폴더로 추출 */}
        <Button variant='secondary' className='mb-4' onClick={handleGetMoreProduct} >
          더보기
        </Button>

        {/* thunk를 이용한 비동기 작업 처리하기 */}
        <Button variant='secondary' className='mb-4' onClick={handleGetMoreProductAsync} >
          더보기 {status}
        </Button>
      </section>
    </>
  );
}

export default Main;


// 가짜(Fake) API 서버 만들기
// 실무와 비슷한 느낌으로 하기 위해 가짜(Fake) API 서버를 만들거임

// 1. json-server (혼자 CRUD 연습하기 좋음)
// 이 도구를 사용하면 json 파일 하나만 있으면 로컬에 연습용 서버를 쉽게 구성 할 수 있음
// (즉, 사용하려는 컴퓨터에서 매번 로컬 서버를 띄워야 함)

// json-server 사용법
// ./src/data.json 이라는 파일을 작성
// npx json-server ./src/data.json --port 4000
// 또는 
// npm i -g json-server
// json-server --watch ./src/data.json --port 4000

// 더 자세한 사용법 참고
// https://github.com/typicode/json-server
// https://redux-advanced.vlpt.us/3/01.html

// 2. My JSON Server (Read만 가능)
// 이 서비스를 사용하면 GitHub와 연동하여 연습용 서버를 쉽게 구성 할 수 있음

// My JSON Server 사용법
// GitHub에 저장소 생성(<your-username>/<your-repo>)
// db.json파일 만들기
// 서버에 액세스하려면 https://my-json-server.typicode.com/<your-username>/<your-repo>를 방문
// https://github.com/fkdkskdfjfk/db.json
// https://my-json-server.typicode.com/fkdkskdfjfk/db.json

// 사용 예
// https://my-json-server.typicode.com/geoblo/db-shop
// https://my-json-server.typicode.com/geoblo/db-shop/products
// https://my-json-server.typicode.com/geoblo/db-shop/products/1