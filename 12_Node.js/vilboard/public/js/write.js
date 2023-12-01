document.getElementById('write-form').addEventListener('submit', async (e) => {
  const FormData = new FormData();
  FormData.append('title', e.target.title.value);
  FormData.append('content', e.target.content.value);

  try {
    await axios.post('/post/write', FormData);
  } catch (err) {
    console.error(err);
  }

});