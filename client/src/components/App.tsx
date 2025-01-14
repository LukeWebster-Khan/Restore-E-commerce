import { useEffect, useState } from "react";
import { API_URL } from "../lib/constants";
import { product } from "../lib/types";
import Catalog from "./Catalog";
import NavBar from "./NavBar";
import { ThemeProvider } from "./theme-provider";

function App() {
  const [products, setProducts] = useState<product[]>([]);

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
        id: prevState.length + 1,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        quantityInStock: 100,
        description: "this here is a product you see?",
        pictureUrl: "https://placehold.co/278x278",
        type: "test",
        brand: "test",
      },
    ]);
  };
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar addProduct={addProduct} />
        <div className="container mx-auto">
          <Catalog products={products} addProduct={addProduct} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
