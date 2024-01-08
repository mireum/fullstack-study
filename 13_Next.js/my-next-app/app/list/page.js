export default function List() {
  // DB에서 가져온 데이터라고 가정
  const products = ['Apple', 'Banana', 'Melon'];

  return (
    <>
      <h4 className="title">상품 목록</h4>
      <div className="fruits">
        <h4>{products[0]}</h4>
      </div>
      <div className="fruits">
        <h4>{products[1]}</h4>
      </div>
      <div className="fruits">
        <h4>{products[2]}</h4>
      </div>

      {/* Quiz: 상품 목록 반복 렌더링 */}
      {products.map((item, index) => {
        return (
          <div className="fruits" key={index}>
            <h4>{item}</h4>
          </div>
        )
      })}
    </>
  );
}