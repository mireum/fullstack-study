# 게시판 만들기 프로젝트
Node.js, express, MongoDB를 이용해서 서버를 개발

## 구현할 기능들
- 글 등록, 조회, 수정, 삭제 기능(CRUD)
- 페이지네이션 기능
- 회원 기능
- 이미지 업로드 기능(AWS S3)
- 검색 기능
- 배포(AWS)

웹서비스의 90% 이성이 게시판이랑 기능(CRUD)이 똑같고 껍데기만 다름
SNS 만들고 싶어요 - 사진 올리는 게시판
쇼핑몰 만들고 싶어요 - 상품 올리는 게시판
주문 기능도 게시판 글 등록이랑 똑같은데 주문이라고 껍데기만 씌워놓은 것이지 로직은 같음

env.
MONGO_ID=admin
MONGO_PASSWORD=qwer`123
PORT=8888
COOKIE_SECRET=cookieqwer