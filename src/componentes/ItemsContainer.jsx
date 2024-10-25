import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import ItemCard from "./ItemCard"


export default function ItemListContainer(){

const [prods] = useContext(ProductsContext);

    return (
        <>
        <section>
          {prods.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </section>
      </>
    );
  }
  