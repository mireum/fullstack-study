document.getElementById('edit-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = e.target.id.value;
  const title = e.target.title.value;
  const content = e.target.content.value;

  if (!title) {
    return alert('제목을 입력하세요');
  }
  try {
    const result = await axios.patch(`/post/${id}`, { title, content });
    console.log(result.data); // 브라우저 콘솔

    if (!result.data.flag) {
      return alert(result.data.message);
    }
    location.href = '/post';  // location 객체로 페이지 redirect
  } catch (err) {
    console.error(err);
  }
  e.target.title.value='';
  e.target.content.value='';
});