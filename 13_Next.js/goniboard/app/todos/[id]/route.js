export async function GET(req, { params }) { 
  // Dynamic Route
  console.log(params.id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const todo = await res.json();  // 파싱
  
  return Response.json({ todo });
}

// 기능들 Route Handler로 옮기기!
// export async function DELETE(req, { params }) {

//   return Response.json({ todo });
// }