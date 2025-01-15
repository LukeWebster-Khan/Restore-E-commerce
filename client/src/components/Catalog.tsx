import { useEffect, useState } from "react";
import { product } from "../lib/types";
import ProductList from "./ProductList";
import { API_URL } from "@/lib/constants";

export default function Catalog() {
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

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
