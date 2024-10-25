import { createContext, useEffect, useState } from 'react';
import { getProds } from '../componentes/asynMock';

//lo que tenemos que consumir
export const ProductsContext = createContext(false);

//el que provee acceso al contexto
export default function ProductsProvider({ children }) {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    getProds().then((data) => setProds(data));
  }, []);

  return (
    <ProductsContext.Provider value={[prods]}>
      {children}
    </ProductsContext.Provider>
  );
}
