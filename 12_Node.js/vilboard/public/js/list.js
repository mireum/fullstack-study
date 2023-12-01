// 글 삭제 시
document.querySelectorAll('.delete').forEach((deleteBtn, index) => {
  deleteBtn.addEventListener('click', async (e) => {
    try {
      // data-id 이므로 카멜케이스로 바꿀 필요없다. - 가 2개이상이면 바꿈
      const id = e.target.dataset.id;
      const result = await axios.delete(`/post/${id}`);
      console.log(result.data);
    } catch (err) {
      console.error(err);
    }
  });
});