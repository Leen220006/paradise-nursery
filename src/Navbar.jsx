import { useSelector } from 'react-redux';

function Navbar({ onNavigate }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <h2 className="brand">Paradise Nursery</h2>
      <div className="nav-links">
        <button className="nav-link" onClick={() => onNavigate('home')}>Home</button>
        <button className="nav-link" onClick={() => onNavigate('plants')}>Plants</button>
        <button className="nav-link cart-link" onClick={() => onNavigate('cart')}>
          🛒 Cart <span className="badge">{totalItems}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
