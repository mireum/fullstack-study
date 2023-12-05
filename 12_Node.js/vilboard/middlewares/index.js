// 라우터에 접근 권한을 제어하는 미들웨어 만들기
// 로그인한 사용자는 회원 가입과 로그인 라우터에 접근하면 안됨(이미 로그인을 했으니까)
// 로그인하지 않은 사용자는 로그아웃 라우터에 접근하면 안됨

// 로그인 중이면 req.isAuthenticated()가 true이고, 그렇지 않으면 false

// 로그인해야 볼 수 있는 곳은 usLiggedIn 미들웨어 사용
// 예: 마이페이지, 프로필 등
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인 필요');  // 401(비인증) 또는 403(미승인) 사용
  }
};