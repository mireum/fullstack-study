export default function Handler(req, res) {
  console.log('/api/test.js');

  // Query string 확인
  console.log(req.query);
  
  res.status(200).json({ message: '안녕' });
}