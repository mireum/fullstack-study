document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  if (!username) {
    return alert('제목을 입력하세요');
  } else if (!password) {
    return alert('비밀번호를 입력하세요');
  }
  try {
    const result = await axios.post(`/user/register`, { username, password });
    console.log(result); 

    if (!result.data.flag) {
      return alert(result.data.message);
    }
    // location.href = '/';
  } catch (err) {
    console.error(err);
  }
  e.target.username.value='';
  e.target.password.value='';
});