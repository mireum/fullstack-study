const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },
  greeting: {
    marginRight: 8
  }
};

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout} = props;

  return (
    <>
      <div style={styles.wrapper}>
        {/* Quiz:
            로그인/로그아웃 버튼을 누르 때마다 isLoggedIn 값이 바뀌고
            로그인/로그아웃 버튼이 바뀌도록 조건부 렌더링
            로그인 상태이면 인사말이 나오도록 조건부 렌더링
        */}
        <span style={styles.greeting}>환영합니다!</span>

        {!isLoggedIn && <button onClick={onClickLogin}>로그아웃</button> }
        {isLoggedIn && <button onClick={onClickLogout}>로그인</button> }

      </div>
    </>
  );
}

export default Toolbar;