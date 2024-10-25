import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ItemCard({ product }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 6, behavior: 'smooth' });
  };

  return (
    <Card bg='light' style={{ margin: '10px', border: 'solid 1px grey', borderRadius: '15px' }}>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Img style={{ width: 200 }} variant="top" src={product.image} />
        <Card.Text>$USD {product.price}</Card.Text>
        <Link to={`/item/${product.id}`} onClick={scrollToTop}>
          <Button onClick={scrollToTop} style={{ backgroundColor: '#2871f8', margin: '10px' }}>Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
