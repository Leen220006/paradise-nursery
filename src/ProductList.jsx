import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

const data = [
  {
    category: 'Air Purifying Plants',
    plants: [
      ['Snake Plant', 15], ['Spider Plant', 12], ['Peace Lily', 18],
      ['Boston Fern', 14], ['Rubber Plant', 20], ['Aloe Vera', 10],
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      ['Lavender', 16], ['Jasmine', 18], ['Mint', 8],
      ['Rosemary', 11], ['Basil', 9], ['Lemon Balm', 10],
    ],
  },
  {
    category: 'Succulents and Cacti',
    plants: [
      ['Jade Plant', 13], ['Echeveria', 9], ['Zebra Haworthia', 10],
      ['Bunny Ear Cactus', 12], ['Burros Tail', 14], ['Golden Barrel Cactus', 17],
    ],
  },
];

let counter = 0;
const categories = data.map((c) => ({
  category: c.category,
  plants: c.plants.map(([name, cost]) => {
    counter += 1;
    return {
      name,
      cost,
      image: `https://loremflickr.com/300/300/houseplant?lock=${counter}`,
    };
  }),
}));

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      <div className="container">
        {categories.map((group) => (
          <section key={group.category}>
            <h2 className="category-title">{group.category}</h2>
            <div className="grid">
              {group.plants.map((plant) => (
                <div className="card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.cost}</p>
                  <button
                    className="btn"
                    disabled={isInCart(plant.name)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
