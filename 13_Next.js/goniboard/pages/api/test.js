export default function Handler(req, res) {
  console.log('/api/test.js');

  res.status(200).json({ message: '안녕' });
}