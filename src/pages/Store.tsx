import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Productstype } from "../types/service";

function Store() {
  const [products, setProducts] = useState<Productstype[]>([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-white mt-4 text-2xl underline">
        New Products
      </h1>
      <div
        className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center 
      justify-center gap-4 "
      >
        {products.map((item) => {
          return (
            <Link key={item.id} className="hover:scale-105" to={`/productdetail/${item.id}`}>
              <ProductItem {...item}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
