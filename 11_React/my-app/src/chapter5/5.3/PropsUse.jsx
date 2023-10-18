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

    </>
  );
}

export default PropsUse;