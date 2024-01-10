export default function Handler(req, res) {
  console.log('/api/test/[id].js');

  // URL 파라미터 확인
  console.log(req.query);

  res.json({ message: '하이' });

  // GET POST 요청에 따라 다른 코드를 실행하고 싶으면?
  // if 또는 switch문 사용
  if (req.method === 'POST') {

  } else {
    
  }
  
}