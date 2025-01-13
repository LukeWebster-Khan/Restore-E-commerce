import { useEffect, useState } from "react";
import { API_URL } from "../lib/constants";
import { simpleProduct } from "../lib/types";
import Catalog from "./Catalog";

function App() {
  const [products, setProducts] = useState<simpleProduct[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    }).then((res) => res.json().then((data) => setProducts(data)));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
      },
    ]);
  };
  return (
    <div>
      <h1>Re-store</h1>
      {/* <button onClick={addProduct}>Add product</button> */}
      <Catalog products={products} addProduct={addProduct} />
      {/* <ul>
        {products.map((item, index) => {
          return (
            <li key={index}>
              {item.name}---{item.price}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
