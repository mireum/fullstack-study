export default function CartItem({ product }) {
  return (
    <div className="cart-item">
      <p>{product}</p>
      <p>500원</p>
      <p>1개</p>
    </div>
  );
}