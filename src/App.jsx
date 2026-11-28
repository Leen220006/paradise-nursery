import { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  const [view, setView] = useState('home');

  if (view === 'plants') return <ProductList onNavigate={setView} />;
  if (view === 'cart') return <CartItem onNavigate={setView} />;

  return (
    <div>
      <div className="landing">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Where green meets serenity</p>
          <button className="btn get-started" onClick={() => setView('plants')}>
            Get Started
          </button>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
