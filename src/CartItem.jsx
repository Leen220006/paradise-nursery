import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  const handleIncrease = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleCheckout = () => alert('Coming Soon');

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      <div className="container">
        <h2 className="category-title">Shopping Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Unit price: ${item.cost}</p>
                <div className="qty">
                  <button className="qty-btn" onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn" onClick={() => handleIncrease(item)}>+</button>
                </div>
                <p>Total: ${item.cost * item.quantity}</p>
              </div>
              <button className="btn delete" onClick={() => dispatch(removeItem(item.name))}>
                Delete
              </button>
            </div>
          ))
        )}

        <h3 className="total">Total Cart Amount: ${totalAmount}</h3>

        <div className="cart-actions">
          <button className="btn" onClick={() => onNavigate('plants')}>Continue Shopping</button>
          <button className="btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
