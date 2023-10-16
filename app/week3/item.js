
const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">Category: {category}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
    </li>
  );
};

export default Item;