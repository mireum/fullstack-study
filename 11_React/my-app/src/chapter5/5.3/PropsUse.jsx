import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";

function PropsUse() {

  
  return (
    <>
      <Profile 
        // 키-값 쌍의 형태로 자식 컴포넌트에 props를 전달할 수 있ㄷ음
        // 정수, 변수, 다른 컴포넌트 등 값을 넣을 때는 {}로 감싼다.
        // 문자열은 {} 생략 가능
        viewCount={999} name="최지우" introduction="안녕하세요 헬로"
      />

      <Layout 
        width={2500}
        height={1440}
        // props로 다른 컴포넌트를 넘기는 것도 가능
        header={
          <Header title="지우의 블로그입니다." />
        }
        fppter={
          <Footer />
        }
      />
    </>
  );
}

export default PropsUse;