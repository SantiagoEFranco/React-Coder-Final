
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { getProducts, getCategory } from "./asynMock";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      if (categoryId) {
        const categoryProducts = getCategory(categoryId);
        setProducts(categoryProducts);
      } else {
        try {
          const data = await getProducts(); 
          setProducts(data);
        } catch (error) {
          console.error("Error al obtener productos:", error);
        }
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <section>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p></p>
      )}
    </section>
  );
}
