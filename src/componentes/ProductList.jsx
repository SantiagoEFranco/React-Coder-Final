import { Row, Col } from 'react-bootstrap';
import ItemCard from "./ItemCard";

export default function ProductList({ products }) {
  return (
    <>
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </>
  );
}
