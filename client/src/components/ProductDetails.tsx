import { API_URL } from "@/lib/constants";
import { product } from "@/lib/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "./ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<product | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);
  const productDetails = [
    {
      label: "Name",
      value: product?.name,
    },
    {
      label: "Description",
      value: product?.description,
    },
    {
      label: "Type",
      value: product?.type,
    },
    {
      label: "Brand",
      value: product?.brand,
    },
    {
      label: "Quantity in Stock",
      value: product?.quantityInStock,
    },
  ];
  return (
    <div>
      {product ? (
        <>
          <Breadcrumb className="mb-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/catalog">Catalog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{product.name}</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col xl:flex-row gap-6 items-center">
            <div className="max-w-full flex justify-center">
              <img
                src={product.pictureUrl}
                alt={product.name}
                className="lg:max-w-[500px] max-w-[95%] mb-10"
              />
            </div>
            <div className="">
              <h1 className="mb-9 pb-4 border-b-4">{product.name}</h1>
              <div>
                <p className="text-xl mb-10">{product.description}</p>
                <p className="text-3xl font-semibold mb-5">
                  £{(product.price / 100).toFixed(2)}
                </p>
                <Table className="mb-12">
                  <TableBody>
                    {productDetails.map((detail, index) => (
                      <TableRow key={index}>
                        <TableHead>{detail.label}</TableHead>
                        <TableCell>{detail.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <label htmlFor="quantityInput">Quantity in Basket</label>
                <div className="flex gap-8">
                  <Input
                    defaultValue={1}
                    type="number"
                    id="quantityInput"
                    className="w-72"
                  />
                  <Button>Add to Basket</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
