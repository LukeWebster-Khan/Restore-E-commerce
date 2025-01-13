import { simpleProduct } from "../lib/types";

type CatalogProps = {
  products: simpleProduct[];
  addProduct: () => void;
};

export default function Catalog({ products, addProduct }: CatalogProps) {
  return (
    <>
      <ul>
        {products.map((item, index) => {
          return (
            <li key={index}>
              {item.name}---{item.price}
            </li>
          );
        })}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </>
  );
}
