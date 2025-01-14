import { product } from "../lib/types";
import ProductList from "./ProductList";

type CatalogProps = {
  products: product[];
  addProduct: () => void;
};

export default function Catalog({ products }: CatalogProps) {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
