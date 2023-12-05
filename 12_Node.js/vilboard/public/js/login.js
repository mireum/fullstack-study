document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const result = await axios.post(`/user/login`, { username, password });
    console.log(result); 

    if (!result.data.flag) {
      return alert(result.data.message);
    }
    // location.href = '/';
  } catch (err) {
    console.error(err);
  }

});